<!-- @format -->

# Lab-34-d49

[live deployment](https://startling-alpaca-250bea.netlify.app/)

## Project: todo-app

![image](https://user-images.githubusercontent.com/105423307/212228062-0d549600-806e-4ddb-95d3-50a7b312ba82.png)

## Problem Domain

Integrate a live API with the to-do list manager application to connect the application to live servers for login, authorization, and data access.

> Note: There are some known bugs:  Upon signup, the user is not redirected to the home route.  
> Refreshing the page while logged in does not change the loggout button back to login or maintain the state of the user being logged in.

## Feater 1: Phase 4

- [x] Alter the Add, Toggle Complete, and Delete functions within your to-do application to use the API instead of in-memory state.
- [x] Fetch the current list of items from the database on application start.
- [x] Refresh the state whenever you add/update/delete an item so the user can instantly see the change.
- [x] Alter the Login Context to use the server to login users instead of the mock users list.
- [x] Store the token in state as well as in a cookie so you can reference it later.

## Feature 2 : Technical Requirements

Perform actual HTTP requests with an Authenticated API server.

- [x] Use deployed API Server, which implements a to-do item data model:
  - GET /todo: Gets a list of all items.
  - POST /todo: Adds an item.
  - PUT /todo: Updates an item (you’ll use this to mark them as complete).
  - DELETE /todo/:id: Deletes an item.
- [x] Use a deployed Authenticated API Server, which supports:
  - Registration (/signup).
  - Login (/signin).
  - Authorization (via Bearer Token).
  - ACL (using user roles).
- [x] Make sure you have created the user roles and permissions lists that your front-end is expecting to tap into.
- [x] To Do data model for storing the actual to-do items.

## Lab-33-d49

[live deployment](https://startling-alpaca-250bea.netlify.app/)

## Project: todo-app

![image](https://user-images.githubusercontent.com/105423307/211973543-70527371-a99c-426c-a65c-617e8252caea.png)

## Problem Domain

Implement an Authentication/Authorization React Context to protect the To Do application by restricting access to various application features based on the user's login status and capabilities.

## Feature 1 Login/Auth Context

- [x] Define a function that can simulate a login event.
- [x] Parameters: username and password as strings.
- [x] Sets a User on the auth context, and changes login status to true.
- [x] Define a function that can simulate a logout event.
- [x] Resets the User object and changes login status to false.
- [x] Define a function that can authorize a User based on a capability.
- [x] Parameters: a capability as a string.
- [x] Returns a boolean whether the user has the capability parameter.

## Feature 2 <Auth /> Component

- [x] Given a capability prop of type string, conditionally render components based on the user stored in context.
- [x] Hide the entire interface until the user has logged in.
- [x] Implement the following RBAC rules:
- [x] Logged In Users with 'update' permissions can click the records to mark them as complete.
- [x] Logged In Users with 'create' permissions can create new items.
- [x] Logged In Users with 'delete' permissions can delete items.
- [x] Logged In Users with 'read' permissions can see the list of To Do Items.

## Feature 3 <Login /> Component

Available users for login:
(username/password)

- user/USER
- editor/EDITOR
- writer/WRITER
- admin/ADMIN
- [x] Accepts Username and Password.
- [x] On successful login, store the token as a cookie.
- [x] If a user returns and has a valid login cookie, hide the login form and consider them "Logged In".
- [x] Display a logout button instead of a form if they are "Logged In".

## Feature 4 Convert to Function Components

- [x] Convert the Auth/Context.js Context Provider to be a function, rather than a class.
- [x] Convert the <Login /> and <Auth /> components to be implemented as 'function' components instead of 'class' components.

## Feature 5 Incorporate into To Do Application

- [x] Extract the Login Context and relevant components from the provided sample application and incorporate them into the To Do application.
- [x] Implement Authentication and Authorization as described in the requirements above.

## Lab-32-d49

## Project: todo-app

[Link to Netlify](https://coruscating-dodol-e735f1.netlify.app)

## Problem Domain

Extend the existing context provider by adding new features such as application settings management, saving user preferences to local storage, reading from local storage on application load, and utilizing context values in different components to show/hide completed items, limit number of items per screen and navigate through a long list of items using pagination component. State should be stringified before saving to local storage and parsed when retrieved.

## Feature 1 Application Setup

- [x] Create a context for managing application settings and provide it at the application level.
- [x] Create a function in the context that saves user preferences to local storage.
- [x] Implement a useEffect() in the context to read from local storage and set the values for state properties on application load
- [x] Utilize the context values in different components
- [x] Implement unit testing

![image](https://user-images.githubusercontent.com/105423307/211718500-a4aae9e3-3cf3-4ac0-95e2-c0832a404458.png)

## Lab-31-d49

## Project: todo-app

[Link to Netlify](https://splendorous-biscotti-5db19c.netlify.app/)

## Problem Domain

Implement the React Context API to define global settings that can be accessed by multiple components. Create a context provider that manages application display settings, and provide it at the application level. Add default values to the context provider's state, including the number of items to display, a boolean to hide completed items, and a default sort word. Consume and use the context values throughout the components, including the <List /> component, which now shows a maximum of three items per screen by default and uses the Mantine Pagination component to allow users to navigate a list of items. Also add the ability to hide completed items in the list by default.

## Feature 1 Application Setup

- [x] Implement the React Context API to define global settings that can be accessed by multiple components.
- [x] Create a context provider that manages application display settings, and provide it at the application level.
- [x] Add default values to the context provider's state, including the number of items to display, a boolean to hide completed items, and a default sort word.
- [x] Consume and use the context values throughout the components, including the <List /> component, which now shows a maximum of three items per screen by default and uses the Mantine Pagination component to allow users to navigate a list of items.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Requirements

To run the application locally:

1. clone down the repo

2. CD into the local todo-app folder thats created

3. `npm install`

4 `npm start`

### Application

The `useForm` hook is a custom hook that you can use to manage form state and handle form submissions in a React app. It takes two arguments: a callback function that will be called when the form is submitted, and an optional object containing default values for the form fields.

The hook returns an object with three properties: handleSubmit, handleChange, and values. The handleSubmit function is called when the form is submitted and prevents the default refresh behavior. It calls the callback function passed to the hook, passing in the current form values as an argument. The handleChange function is called when a form field value is changed, and updates the form values in the hook's state. The values property is an object containing the current form values.

![image](https://user-images.githubusercontent.com/105423307/211463663-9457b20c-c896-436e-89e5-941af3ef32f2.png)

### Testing

`npm test`

Launches the test runner in the interactive watch mode.\
