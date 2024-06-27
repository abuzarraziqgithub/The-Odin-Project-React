//* State: A Component's Memory
/*
 * Components often need to change what's on the screen as a result of an interaction.
 * Components need to remember things: the current input value, the current image, the shopping cart.
 * This kind of component-specific memory is called state.
 */

//! When a regular variable isn't enough
/*
 * We have a simple example of using a local variable for rendering.
 * Clicking the "Next" button should show the next sulpture by changing the index to 1, then 2 and so on.
 * However, this won't work.
 
? Why it won't work by using Local variable?
 * The handleClick event handler is updating a local variable, index.
 * But two things prevent that change from being visible.
 
?1 - Local variables don't persist between renders:
 * When React renders this component a second time, It renders it from scratch-- It doesn't consider any changes to the local variables.

?2 - Changes to local variables won't trigger renders:
 * React doesn't realize it needs to render the component again with the new data.

* To update a component with new data, two things need to happen:

* 1 - Maintain the data between the renders.
* 2 - Trigger(Start) React to render the component with new data(re-rendering)

? - The useSate Hook provides those two things:
 * 1 - A state variable to retain the data between renders
 * 2 - A state setter function to update the variable and trigger React to render the component again.

? Hooks:
 * Hooks are special functions that are only available while React is rendering
 * They let us "hook into" different React features.


? Anatomy of useState:
 * When we call useState, we are telling React that we want this component to remember something.
 */
const [index, setIndex] = useState(0);
//* In this case, we want React to remember index.
/*
 * The only argument to useState is the initial value of our state variable.
 * In this example, the index's initial value is set to 0 with useState(0).
 * Every time our component renders, useState give us an array containing two values:
 * The state variable(index) with the value we stored.
 * The state setter function (setIndex) which can update the state variable and trigger React to render component again.
 

? Here's how that happens in action:
 * 1 - Our component renders the first time:- Because we passed 0 to useState as the initial value for index, it will return [0, setIndex]. React remembers 0 is the latest state value.

 * 2 - We update the state:- When a user clicks the button, it calls setIndex(index + 1). index is 0, so it's setIndex(1). This tells React to remember index is 1 now, and triggers another render.
 
 * 3 - Our component's second render:- React still sees useState(0), but because React remembers that we set index to 1, it returns [1 , setIndex] instead.  And so on...



? Giving a component multiple state variables:
 * We can have as many state variables of as many types as we like in one component.
 * It is a good idea to have multiple state variables if thier state is unrelated, like index and showMore in the (React Docs) example.
 * But if we have a form with many fields, it's more convenient to have a single state variable that holds an object than state variable per field.


? State is isolated and private:
 * State is local to a component instance on the screen.
 * If we render the same component twice, each copy will have completely isolated state! Changing one of them will not affect the other.
 * This is what makes state different from regular variables that we might declare at the top of our module.
 * State is not tied to a particular function call or a place in the code, but it's "local" to the specific place on the screen.
 * We rendered two <Gallery/> components, so their state is stored separately.
 * State is fully private to the component declaring it, the parent can't change it.
 * This let's you add state to any component or remove it without impacting the rest of the components. 
 */

//! Recap
/*
 * We use a state variable when a component needs to "remember" some Information between renders.
 * State variables are declared by calling the useState Hook.
 * Hooks are special functions that start with the use. They let us "hook into" React features like state.
 * Hooks need to be called unconditionally. Calling Hooks, including useState, is only valid at the top level of a component or another Hook.
 * The useState Hook returns a pair of values: the current state and teh function to update it.
 * We can have more than one state variable. Internally, React matches them up by their order.
 * State is private to the component. If we render it in two places, each copy gets it's own state.
 */
