//* States And Effects

/* 
? What is "State" in Programming?
* -  State is just the current snapshot of your program or of a part of it.
* - It's the combination all those individual states (like "modal is open" and "user is not authenticated") that makes up the overall program state.
* - We can also translate "State" with "Data", "Data that controls what the program is doing".

* - "State" is just "Data" - "Data which controls how the program is behaving" or "Data which has an effect on the result and output of a program".
*/

//! Introduction
/*
 * React Provides primitives to manipulate the state of our components, to make them dynamic.
 * Any application we build is likely to change over the time the user is exploring it.
 * The changes could be as basic as togglong a dropdown menu or as compkec as fetching an API.
 */

//! What is state in React?
/*
 * We write a lot of components in React, and many times want them to experience visual changes as a result of user or computer interactions.
 * For this purpose, a component needs to "remember" things about itself.
 * This is where state comes in.
 * State is a component's memory.
 

 ? The useState hook
 * The useState hook is a built-in hook in React that allow us to define state in a functional component.
 * It takes an initial value as a parameter and returns an array with two elements that we can destructure to get:
 * The current state value
 * A function to update the state value.
 */

//! How does state work in React?
/*
 * In React, when a component's state or props change, the component is destroyed and recreated from scratch.
 * This includes the variables, functions, and React nodes.
 * The entire component is recreated but this time the latest state value will be returned from useState.
 * This process is called rerendering.
 * Rerendering is a key feature of React that enables it to effeciently update the user interface in response to changes in the underlying data.
 
 
? React reconcilliation(Restoration) algorithm
 * The process of reRendering generates a new virtual DOM tree.
 * The virtual DOM is a lightweight representation of the actual DOM that React uses to keep track of the current state of the UI.\
 * React then compares the new virtual DOM tree to the previous one and calculates the minimal set of changes needed to update the actual DOM.
 * You can see it Visually in essential folder.
 
 ? Explaining Rendering with the examples
 * Whenever setBackgroundColor is called, our App component is rerendered.
 * Essentially, the component is recreated which means the onButtonClick function and our div and button's are recreated as well.
 * We might wonder, shouldn't the backgroundColor state be recreated as well?
 * Well, React takes responsibility of keeping track of the latest state and providing it to the component.
 * The initial state value is only used for the component's first render and is ignored on subsequent renders.
 
 * This is just a brief overview of a portion of React internals.
 */

//! Hooks
/*
* Hooks are functions that let us use React features.
* All hooks are recognizable by the use prefix.
* For example, useState is a hook.

? Hooks have rules that we need to abide by:
* Hooks can only be called from the top level(Parent) of a functional component.
* Hooks can't be called from inside loops or conditions.
*/

//* Summary :
// - State is just  the current snapshot of our program.
// - Sate is just a Data - "Data that controls how the program is behaving".

// - React Provides primitives to manipulate the state of our components.
// - State is a component' memory.
// - The useState hook is a built-in hook in React that allow us to define a state in a function component.
// - It takes an initial value as a parameter and returns an array with two elements.
// - The current Element
// - The function to update the state value.

// - In React, when a component state, props change, the component is destroyed and recreated from scratch.
// - The entire component is recreated, but this time with the latest state value will be returned from the useState.
// - This process is called re-rendering.
