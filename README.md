<!-- @format -->

# Lab-32-d49

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
