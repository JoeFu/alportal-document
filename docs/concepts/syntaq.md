# Syntaq

Syntaq is our documentation automation platform. It provides users with the ability to generate simple and complex documents based on information they provide through forms, or via API calls.

The Portal uses Syntaq's capabilities to allow users to generate a wide range of legal documents, streamlining the process by injecting data collected by the system.

Syntaq currently exposes it's document automation functionality through two main avenues: Forms and Apps.

## Syntaq Forms

Syntaq can provides forms for users to enter data which is subsequently processed and injected into the generated documents. This allows for a significant amount of flexibility in the final document, particularly when factoring in the templating capabilities of the Syntaq engine and Microsoft Word.

Syntaq leverages [Form IO](https://github.com/formio/formio.js) to allow its users to build forms with minimal programming knowledge. These forms may be embedded into web pages using the script tags provided by the Syntaq platform.

As of the time of writing, the Portal uses these forms by embedding them within IFrames. This is due to FormIO's dependency on Bootstrap which adversely affects local styling.

Data is passed from the Portal into these forms by augmenting the script prior to loading them on the page.

## Syntaq Apps

Syntaq Apps provide similar functionality to forms. The key difference being that the data passed to the Syntaq engine is directly provided by the user/system via an API call and not collected by a Syntaq provided form.

The data is expected to be in JSON form.

## Syntaq and Email

Syntaq also provides the ability for the generated documents to be emailed to a user specified location. The contents of the email itself may also be templated using the provided data.

SendGrid is the provider of the emailing functionality.