## Sharepoint integration
Sharepoint integration into Portal ‘view’ for Matter

## Dashboard refactor
- Replace Metabase. Replace with Portal data info to ‘start day’.

To improve Lawyer efficiency.
- recent actions/activities. 
- Recent Matters, etc. Links.

Activities to turn into time entires.
Linked to other features via Dashboard. Secondary flow.



## UI review
- Review core elements of UI to improve look-and-feel and usability.
### Efficiency
- Reduce the number of clicks to do common tasks.
- Reduce necessity to open and close pages to complete things, e.g. use of pop-up for common tasks. [`GlobalModal`](/front-end/components-ui-user.md#globalmodals)
### Graphs
- Embed graphs within Portal. [`Chart.js`](/front-end/key-libraries.md#chartjs)
### Email
- New Email to be draggable and resizable instead of the current right bottom

## Improve Security 
- Data security. Immutability of data changes record.
- Trust accounting. Immutability of data changes record.


## Projects and Routines
- Make Projects only relate to VC projects.
- Create a new type of entity – ‘Routine’. 
> This should replace most of the Projects. We could relabel all existing Projects into Routines and then create a new table for Projects, or just create metadata for Projects to split between Routines and Projects.
- Consider moving Routine calendars into Portal.
- Create TO DO lists of Tasks on Dashboard.


## Migration to Pinia
The officially recommended state management tool for Vue projects has changed to Pinia.
#### What is Pinia?
Pinia is a lightweight alternative to Vuex for state management in Vue.js applications. 

It provides a simpler and more intuitive API, better type-safety, and improved performance. 
#### Migration
Migrating from Vuex to Pinia involves updating the state management code in the application to use the Pinia API instead of Vuex.

Migration is planned for version to be released in **2023 Q4**.


## Improve Efficiency
- BusOps efficiency improvement. Reducing systems, etc.
- Lawyer efficiency improvement.
- Detailed audit logs and queries. Portal-wide.
- Query optimization – speed improvement.
- Lawyer-led.
- Quick wins to improve efficiency and sort out lawyer-led issues/obstacles.

## Code Refactoring
- Syntaq implementation – refactor.
