# User Interface

This documents common user interface patterns that are used in the system.

## Infinite Scrolling

In the first implementation of the system, tables and list related views were paginated using the traditional page number method. Following initial demonstrations, user feedback indicated that infinite scrolling was the preferred approach where possible.

To that end, most of the views have been converted to use an infinite scrolling approach, however there may be a few minor views that continue to use the paginated approach and need to be updated.

### Implementation

#### Back End
The current implementation relies on the REST API providing the paginated results to conform to the following:

- Must accept a `limit` and an `offset` in the query for the paginated results
- Returns a list of items
- Returns an indication of whether or not there are "more" items to be loaded

In practice, what this means is that the results should be filtered by `PaginatedInput` or a subclass of it, and they should be returned in the form of a `PaginatedDto`. 

`PaginatedInput` is a simple DTO that expects:

- A `Search` parameter. This is a simple text search that can be used to filter the results
- A `Limit` parameter. This is the number of results that should be returned for this particularly query
- An `Offset` parameter. This is the number of results that should be skipped in the query before taking the next `Limit` results.

For more complex scenarios, a subclass of the PaginatedInput is recommended to be used, e.g.

```c#
public class ComplexFilter : PaginatedInput {
  public string ComplexFilterParameter { get; set; }
}
```

`PaginatedDto<T>` is a simple DTO that has:

- A `Items` parameter. This is an enumerable collection of items of type `T`
- A `Count` parameter. A count of the total number of items for the filtered query.
  - This was primarily used for the traditional pagination approach. This may be removed if/when all pagination instances use the Infinite Scroll approach
- A `HasNext` parameter. An indication if the query has more results that can be loaded.

You may choose to construct this manually, but an extension method has been added for `IQueryable`s that will help construct this for a given query and filters. This can be found in the `DataExtensions`, and is called `ToPaginatedDtoAsync`.

Essentially, given an `IQueryable` that has been filtered by any additional filters can be paginated by this extension method as follows:

```c#
private readonly IMapper _mapper;

public Task<PaginatedDto<MatterDto>> GetMatters(PaginatedInput filters) {
  IQueryable query = _context.Matters.Where(x => x.Name.ToUpper().Contains(filters.Search));
  return await query.ToPaginatedDtoAsync<Matter, MatterDto>(_mapper, filters);
}
```

You will note that it expects an `IMapper` instance. This is to handle the mapping from the "source" type (`Matter` in this case) to the destination type (`MatterDto` in this case). Alternatively a mapping function may be provided of the form `Func<TSource, TDestination> mapper`; the extension is overloaded to accept this alternative should the need arise/if automapper should not be used.

#### Front End

There are a number of helper methods and components available on the front end to assist with the implementation of the `InfiniteScroll` feature.

These are:

- The infinite table component. `AlpInfiniteTable` (As seen [here](/front-end/components-common#alpinfinitetable))
- The more general infinite container component. `AlpInfiniteContainer` (As seen [here](https://github.com/AndreyevLawyers/ALP))
- The infinite list composable function(s). (As seen [here](/front-end/composable#infinitelist))
- The infinite Vuex store helper. `ResourceInfiniteVuex` (As seen [here](/front-end/store#resourceinfinitevuex))

As an example of how these may be used, consider the case where we are loading an "Infinite" tabled list of Matters, and had a controller method as follows:

(Some details omitted for brevity)

```c#
public class MatterController : ControllerBase {
  [HttpGet]
  public async Task<PaginatedDto<MatterDto>> GetList([FromQuery] PaginatedInput filterInput)
  {
      return await _matterService.GetMatters(filterInput);
  }
}
```

Which NSwag generates as a `MatterServiceProxy` with a method `getMatterList(search: string, limit: number, offset: number)`.

We can construct a store with the following:

```ts
ResourceInfiniteVuex(
  "matters", // state name
  "GET_MATTERS", // getter name
  "SET_MATTERS", // mutation name
  {
    action: "GET_MATTERS", // action name
    fn: ({search, limit, offset}) => new MatterServiceProxy().getMatterList(search, limit, offset)
  }
)
```

The infinite list composable function can then be used to wrap the loading of the items as follows:

```ts
const { items, loading, fetch, reset } = useInfiniteListable({
  items: MatterStore.getters.GET_MATTERS,
  query: MatterStore.actions.GET_MATTERS,
  queryParams: () => ({
    search: "some search text",
  })
});
```

You may choose to handle the display of the items, loading state manually, but you can use the `AlpInfiniteTable` component to handle this instead. This will handle the calling of the `fetch` function when the user scrolls to the end of the container:

```html
<alp-infinite-table
  :headers="['Id', 'Name'"
  :fields="['id', 'name']"
  :loading="loading"
  :values="items"
  @selected="$router.push({ name: 'Matter', params: $event })"
  @load-more="fetch"
/>
```

## Inline Editing

A significant portion of a typical user's interactions will involve making minor changes to the information stored on the system. To streamline this, the decision was made to allow for inline editing of data after its initial creation, where possible.

### Implementation

We leverage JSON patch to minimise data sent over the wire when making these changes.

#### Backend

ASP NET Core has reasonable support for JSON Patch operations, as per the documentation [here](https://docs.microsoft.com/en-us/aspnet/core/web-api/jsonpatch?view=aspnetcore-5.0).

But in essence, the controller method may be configured as follows to accept a JSON Patch document, and apply the patch to the DTO that will then be used to update the entity:

```c#
[HttpPatch("{id}")]
public async Task<ActionResult<MatterDto>> Patch(int id, [FromBody] JsonPatchDocument<MatterDto> patch)
{
    var matter = await _matterService.GetById(id); // This retrieves a MatterDto instance
    patch.ApplyTo(matter); // Patch the DTO
    return Ok(await _matterService.UpdateMatter(id, matter)); // Use the updated DTO to call the service method to update the entity
}
```

#### Frontend

We generate the JSON Patch documents on the front end using the `fast-json-patch` library.

Essentially, it can be called as follows:

```ts
import jsonpatch from "fast-json-patch";

const operations = jsonpatch.compare(original, updated);
```

The operations can be passed to the proxy methods as the JSON Patch document.

In terms of detecting the changes, there is a composable function that can assist with this: `usePatchable` (As can be seen [here](/front-end/composable#patchable)).

Given that the entity is retrieved and patched via the Vuex store like so:

```ts
ResourceDictVuex(
  "id",
  "matter",
  "GET_MATTER",
  "SET_MATTER",
  {
    action: "GET_MATTER",
    fn: ({ id }) => new MatterServiceProxy().getMatterById(id)
  },
  [
    {
      action: "PATCH_MATTER",
      fn: ({ id, original, updated }: { 
        id: string;
        original: MatterDto;
        updated: MatterDto;
      }) => {
        const operations = patchOperations(original, updated);
        return new MatterServiceProxy().patchMatter(id, operations as any);
      },
    }
  ]
)
```

We can use the composable function like so:

```ts
const matterId = 1;
const { state } = usePatchable<MatterDto>({
  identifier: matterId,
  getter: "GET_MATTER",
  query: "GET_MATTER",
  queryParams: () => ({ id: matterId }),
  patchQuery: "PATCH_MATTER",
  patchQueryParams: () => ({ id: matterId })
});
```

The `state` that is returned by the `usePatchable` call will automatically detect any changes made to the state and will call the `patchQuery` with the `original` and `updated` versions of the state. `state` is typically used/modified by binding it to an input using `v-model`.

If any properties should be ignored when patching, then this may be handled on the Store definition by constructing two alternative `original` and `updated` values that do not contain the values to be excluded.

