<!-- @format -->

# Lab-31-d49

## Project: todo-app

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

![image](https://user-images.githubusercontent.com/105423307/211463663-9457b20c-c896-436e-89e5-941af3ef32f2.png)


### Testing

`npm test`

Launches the test runner in the interactive watch mode.\
