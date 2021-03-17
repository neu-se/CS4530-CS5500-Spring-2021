---
layout: page
title: React Basics
permalink: /tutorials/week6-react
parent: Tutorials
nav_order: 6
---

This tutorial covers the basic concepts of react. By the end of this tutorial, you will be able to create a new react app, understand the basic concepts of react such as states and props, understand React hooks, using Chakra-ui with React, and connect a react frontend to a backend using axios.

Contents:
* [Creating a new React App](#create-react-app)
* [Understanding a React App](#understand-react)
* [React Hooks](#react-hooks)
* [Chakra UI](#chakra-ui)
* [Redux](#redux)
* [React Router](#react-router)
* [Demo App](#demo-app)

# Creating a new React App

Let us use [npx](https://www.npmjs.com/package/npx) and [create-react-app](https://www.npmjs.com/package/create-react-app) to create a new React project.

1. To install these npm packages, run the command:
   - `*$ npm install -g npx create-react-app*`
2. To create a new React project called *my-app* in typescript, use the below command:
   - `*$ npx create-react-app my-app --template typescript*`
3. Navigate to the project directory using the command:
   - `*$ cd my-app*`.
4. To start the development server for React, run the command:
   - `*$ npm start*`
5. Navigate to `http://localhost:3000/` to see the default react page.

# Understanding a React App

## Components

React follows a Component based architecture, which consists of various components and interactions between. A component can be considered a repeatable html element with built-in state, business logic, and a lifecycle. A component may be something as simple as a single html element such as an input box, or a button, or a complex entity made up of other components such as the Root (App) component.

From an implementation perspective, a component is a module (tsx/jsx file) which exports a function that returns a JSX element. The root component (generally called the App component) is located in App.tsx under the src directory and the contents are as shown below:
- ```tsx
  function App() {
    return (
      <div className="App">
        ...
      </div>
    );
  }
  ```

A few things to note about React components:
- The root (App) component is the entry point for the React App and all other components are nested in it.
- A function can return a single top level element.
    - `div` is the top level element in this case and other elements can be nested in it.
- The round brackets (`()`) after return are used to span a JSX/TSX element across multiple lines.
    - Elements on one line can be returned directly.
- Each instance of a component creates a new element independent of other instances on the component.
- Each component has it's own state, props, and lifecycle (which will be explored later in the tutorial).

## Application Bootstrap

Bootstrapping is the process of Initializing/starting a react app and linking it to some element in the html. Traditionally, most client side apps have `index.html` as the entry point, which then loads other dependencies such as style sheets and scripts. React apps follow a similar approach and the `index.html` file can be found in the public/ directory.
Looking at the contents of `index.html`, notice an empty div element with the contents:
- ```html
  <div id="root"></div>
  ```
This element is a placeholder for our React App. In order to bootstrap the App to this element, we use the `ReactDOM.render()` method which is present in `src/index.tsx`
- ```tsx
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
  ```
This function Initializes the React app in strict mode and bootstraps the App component to the div element with id "root".

## Displaying Hello World with the app component

Now that we have a basic idea of how a react component works, let us change the contents of the App Component to display "Hello, World!". Navigate to src/App.tsx. As we know, the element returned by the App function is rendered in the html. Lets us change the contents of the App component as below:

- ```tsx
  function App() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Hello, World!!
          </h1>
        </header>
      </div>
    );
  }
  ```

Run `*$ npm start*` and "Hello, World!!" will not be displayed in the browser!

## Props

React components are similar to JavaScript functions and can accept arbitrary arguments called props. Since components are reusable, props are especially useful to display different content in each instance of the component. Let us extract the header elements from the previous code snippet into a new component called `Header`. We can then use props to say "hello" to different users.

- Create a new file in `src/` directory called `Header.tsx`
- Create and export a function called Header in the file as below:
   - ```tsx
      function Header(props: {name?: string}) {

        return (
          <h1> Hello, {props.name} </h1>
        );

      }

      Header.defaultProps = {
        name: 'World'
      };

      export default Header;
      ```
- In App.tsx:
  - Remove the code in `h1` tags.
  - Import the Header component as below:
     - ```tsx
      import Header from './Header';
      ```
  - Update the contents of return as below:
     - ```tsx
        <header className="App-header">
          <Header />
          <Header name="John" />
          <Header name="Jane" />
        </header>
      ```
  - Save all files and run npm start.

A few things to note from the above example:
- Component.defaultProps can be used to specify default values for props.
- Curly braces ({}) in JSX/TSX are used for one-way data binding. 
   - In our example, `{props.name}` will display the value of `name` in the html.

# React Hooks

React hooks are built-in functions which you can hook into. The basic hooks are useState() to manage the state of the component, and useEffect() which is a lifecycle hook.

## State and Event binding

The state of a component can be considered as the data associated with the component. The component is updated/rerendered every time the state gets updated. React provides the hook `useState()`, to create a state variable. Let us understand the concept of state with a simple counter component which displays how many times a button was clicked.

- Create a new file in `src/` directory called `Counter.tsx`.
- We need to create a component with the following requirements:
   - The Counter component should have a Display of count and a button.
   - It should have a state called `count`.
   - On click of the button, the state variable count should be incremented by 1.
   - The change in state should automatically reflect in the UI.
- Let us create a simple component with a display and button in Counter.tsx as below:
   - ```tsx
      function Counter() {
      
        return (
          <div>
            <h1>Count: </h1>
            <button>Click me!</button>
          </div>
        );

      }

      export default Counter;
    ```
- Add this component to App.tsx similar to Header.tsx.
- Next, let us add state to this component.
   - Import useState from react as below:
     - ```tsx
        import { useState } from 'react';
      ```
   - Next, let us create a count state variable with a default value of 0 inside the Counter function.
     - ```tsx
        const [count, setCount] = useState(0);
       ```
     - `count` contains the actual value.
     - `setCount` is a function to update the value of count.
   - Now, we can display this count in the HTML as below:
     - ```tsx
        <h1>Count: {count}</h1>
       ```
- Finally, we need to write a function which will increment the count and bind it to a click event handler on the button.
   - Write a function to increment the count as below:
     - ```tsx
        function incrementCount() {
          setCount(count + 1);
        }
       ```
     - The component will not rerender if setCount is not used.
   - Now, bind this function to the click handler on the button as below:
     - ```tsx
        <button onClick={incrementCount}>Click me!</button>
       ```
- Run the code and tru clicking on the button. The count should be incremented.

## Lifecycle Hooks

Older versions of React consisted of different Lifecycle hooks that allowed a user to hook into various phases of component rendering such as componentDidMount, ComponentDidUpdate, etc. which have all been condensed into a single function called useEffect(). Let us observe how this hook behaves by printing out the count in browser console.

- Import the `useEffect` hook similar to useState.
- Add the below function to Counter:
   - ```tsx
      useEffect(() => {
        console.log(`The current count is ${count}`);
      });
    ```
- Save and run the code.
- Observe the count being printed in the console on each render of the component.

Optionally, a second argument can be passed to the useEffect() function to observe only changes related to a particular value, as below:
- ```tsx
    useEffect(() => {
      console.log(`The current count is ${count}`);
    }, [count]);
  ```

# Chakra UI

Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications. Chakra UI provides a set of customizable components which can be easily integrated into a React App. A full list of available component can be found [here](https://chakra-ui.com/docs/getting-started). Let us add Chakra UI to our project and use the Button component in out Counter component.

- Install chakra UI using npm with the below command:
   - `*$ npm i --save @chakra-ui/react @emotion/react @emotion/styled framer-motion*`
- import ChakraProvider in App.tsx.
   - ```tsx
      import { ChakraProvider } from '@chakra-ui/react';
    ```
- Add the ChakraProvider to the root (App) component as below:
   - ```tsx
      function App() {
        return (
          <ChakraProvider>
            <div className="App">
              <header className="App-header">
                <Counter />
                <Header />
                <Header name="John" />
                <Header name="Jane" />
              </header>
            </div>
          </ChakraProvider>
        );
      }
    ```
- Navigate to Counter.tsx
- Import the button component from Chakra UI as below:
   - ```tsx
      import { Button } from "@chakra-ui/react"
    ```
- Replace the existing button with the imported button and add a color teal as below:
  - ```tsx
      <Button colorScheme="teal" onClick={incrementCount}>Click me!</Button>
    ```
- Save and run the code, and you should now see a pretty team button in the UI.

# Redux

Redux is an open-source JavaScript library for managing application state. This is very useful for managing state in large applications or complex states. Redux is made up of a store, reducers, actions, effects, and selectors.
- *Store*: A store is a container which holds the state of the applications. It provides methods such as subscribe, dispatch, and getState.
- *Reducer*: A reducer is a pure function which returns an updated state based on "what happened" in the application.
- *Action*: An action describes "what happened" in the application and optionally sends the new state to the reducer.
- *Effects*: Effects are used to manage asynchronous actions such as network requests as part of state updates.
- *Selectors*: Selectors are accessors to different states in the store.

Let us try to implement Redux in our counter example.

- Let us install the dependencies required to implement redux with the command below:
   - `*$ npm install --save redux react-redux reselect*`
   - `*$ npm install --save-dev @types/react-redux @types/reselect*`
- Create a directory called `store` under the `src/` directory.
- Since we want to maintain state for count, create a directory called `count` under `src/store/`.
- Create a file called `reducers.ts` under `src/store/count/`.
- Let us implement a basic reducer for count as below:
   - The reducer will have state as the first argument and take a default value of 0.
   - The reducer will take an action as the second argument which contains 2 properties:
     - type: Specifying the action being performed (reason for state update)
     - payload: Specifying the updates to be performed on the state.
   - ```ts
      const defaultState = 0;

      export default function countReducer(state = defaultState, action: any) {
        switch(action.type) {
          default:
            return state;
        }
      }

     ```
- Next, let us initialize the store for our application.
   - Create a file called index.ts under the `src/store/` directory.
   - We need to combine all the reducers, and invoke the createStore function as below:
     - ```ts
        import { createStore, combineReducers } from 'redux';
        import countReducer from './count/reducers';

        const reducers = combineReducers({ count: countReducer });

        export default createStore(reducers);
       ```  
- Now, we need to provide this store to the React App in order to use it.
   - Import Provider from react-redux in index.tsx as below:
     - ```ts
        import { Provider } from 'react-redux';
       ```
   - Import the store in index.tsx as below:
     - ```ts
        import store from './store';
       ```
   - Update the render function in index.tsx as below:
     - ```ts
        ReactDOM.render(
          <React.StrictMode>
            <Provider store={store}>
              <App />
            </Provider>
          </React.StrictMode>,
          document.getElementById('root')
        );
       ```
- Let us create an action to increment the count.
   - Create a file called actions.ts in the directory `src/store/count`.
   - Create a new action in this file for incrementing the count as below:
     - ```ts
        export enum ActionTypes {
          'INCREMENT' = 'INCREMENT',
          'DECREMENT' = 'DECREMENT'
        };

        export function IncrementCount() {
          return { type: ActionTypes.INCREMENT };
        }

        export function DecrementCount() {
          return { type: ActionTypes.DECREMENT };
        }

        export type Actions = {
          type: ActionTypes,
          payload?: any
        };
       ```

- Now, let us update the code in reducer.ts to implement the logic for these actions as below:
   - ```ts
      import { Actions, ActionTypes } from './actions';

      const defaultState = 0;

      export default function countReducer(state = defaultState, action: Actions) {
        switch(action.type) {
          case ActionTypes.INCREMENT:
            return state + 1;
          case ActionTypes.DECREMENT:
            return state - 1;
          default:
            return state;
        }
      }
     ```
- Next let us create a selector to count
   - Create a file called selectors.ts under `src/store/count/`.
   - Add the below code to create a count selector:
     - ```ts
        import { createSelector } from 'reselect';

        const counterState = (state: any) => state.count;

        export const makeSelectCount = createSelector(counterState, (counter: any) => counter.count);
       ```
- Let us use this state in our Counter component as below:
   - ```tsx
      import { useEffect } from 'react';
      import { Button } from "@chakra-ui/react"
      import { makeSelectCount } from './store/count/selectors';
      import { useSelector } from 'react-redux';
      import { createSelector } from 'reselect';

      const stateSelector = createSelector(makeSelectCount, (count) => ({count}));

      function Counter() {
        
        const { count } = useSelector(stateSelector);

        useEffect(() => {
          console.log(`The current count is ${count}`);
        }, [count]);

        function incrementCount() {

        }

        return (
          <div>
            <h1>Count: {count}</h1>
            <Button colorScheme="teal" onClick={incrementCount}>Click me!</Button>
          </div>
        );

      }

      export default Counter;
     ```
- Now we have the state from Redux, but we need to implement the code to increment the count.
   - In order to increment the count, let us dispatch the Increment action in the onClick handler as below:
   - ```tsx    
      import { useEffect } from 'react';
      import { Button } from "@chakra-ui/react"
      import { makeSelectCount } from './store/count/selectors';
      import { useDispatch, useSelector } from 'react-redux';
      import { createSelector } from 'reselect';
      import { IncrementCount } from './store/count/actions';

      const stateSelector = createSelector(makeSelectCount, (count) => ({count}));
      const actionDispatch = (dispatch: any): any => ({
        incrementCount: () => dispatch(IncrementCount())
      });

      function Counter() {
        
        const { count } = useSelector(stateSelector);
        const { incrementCount } = actionDispatch(useDispatch());

        useEffect(() => {
          console.log(`The current count is ${count}`);
        }, [count]);

        function incrementCountHandler() {
          incrementCount();
        }

        return (
          <div>
            <h1>Count: {count}</h1>
            <Button colorScheme="teal" onClick={incrementCountHandler}>Click me!</Button>
          </div>
        );

      }

      export default Counter;
     ```
- Thus, we have implemented the counter using Redux.

# React Router

<<<<<<< HEAD
"React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL" - https://www.geeksforgeeks.org/reactjs-router/.
To demonstrate some basic usage of this library, let us implement 2 routes in our application, one for the header and another for counter. We can implement this as below:
=======
React Router lets us implement client side routing in React applications. Let us implement 2 routes in our application, 1 for header, and another for counter. We can implement this as below:
>>>>>>> 4fa4eb04adc3b8753ce5568d0d00a22c6300596d
- Install react router dom as below:
   - `*$ npm install --save react-router-dom*`
   - `*$ npm install --save-dev @types/react-router-dom*`
- Let us import the required dependencies to App.tsx as below:
   - ```tsx
      import {
        BrowserRouter as Router,
        Switch,
        Route,
        Link
      } from "react-router-dom";
     ```
- Now, we can add a static header and routing as below:
   - ```tsx
      function App() {
        return (
          <ChakraProvider>
            <Router>
              <Flex align="center" mr={5}>
                <Button colorScheme="twitter">
                  <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
                    <Link to="/header">Header</Link>
                  </Heading>
                </Button>
                <Button colorScheme="purple">
                  <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
                    <Link to="/counter">Counter</Link>
                  </Heading>
                </Button>
              </Flex>
              <div className="App">
                <Switch>
                  <Route path="/header" render={() => (
                    <header className="App-header">
                      <Header />
                      <Header name="John" />
                      <Header name="Jane" />
                    </header>
                  )}>
                  </Route>
                  <Route path="/counter">
                    <Counter />
                  </Route>
                </Switch>
              </div>
            </Router>
          </ChakraProvider>
        );
      }
     ```
- Save and run the code and now we have 2 working routes!
   - Note: The count will persist when navigating client side routes.

The completed app can be found [here](./assets/week6-react/my-app.zip).

# Demo App

This a demo application which implements a video streaming app using the Youtube API. It uses most of the features discussed above and can be used as a reference for implementing React code. You can download the code here (soon).
