//* Render and Commit
/*
* Before our components are displayed on the screen, they must be rendered by React.
* Understanding the steps in this process will help us think about how our code executes and explain it's behavior.

 * The process of requesting and serving UI has three steps:
 * 1 - Triggering(Begin) a render (delivering the guest's order to the kitchen)
 * 2 - Rendering the component (Preparing the order in the kitchen)
 * 3 - Committing(Executing) to the DOM (Placing the order on the table.)
*/

//! Step 1: Trigger a render:
/*
 * There are two reasons for a component to render:
 
 * 1 - It's the component's initial render.
 * 2 - The component's (or one of its ancestors') state has been updated.
 

? Initial render:
 * When our app starts, we need to trigger the initial render.
 * Frameworks sometimes hide this code, but it's done by calling createRoot with the target DOM node , and then calling it's render method with our component


? Re-renders when state updates
 * Once the component has been initially rendered, we can trigger further renders by updating it's state with the set function.
 * Updating our component's state automatically queues a render
 */

//! Step 2: React renders our Components
/*
* After trigger a render, React calls our components to figure out what to display on screen. "Rendering" is React calling our components.

* On initial render, React will call the root component.
* For subsequent renders, React will call the function component whose state update triggered the render.

 * This process is recursive: If the updated component returns some other component, React will render that component next.
 * If that component also returns something, it will render that component next, and so on.
 * This process will continue untill there are no more nested components and React knows exactly what should be displayed on screen.
 * During the initial render, in the example, React will create the DOM nodes fpr <section>,<h1> and three <img> tags.
 * During a re-render, React will calculate which of thier properties, if any, have changed since the previous render. It won't do anything with that information until the next step \, the commit phase.

*/

//! React commits changes to the DOM
/*
* After rendering(calling) our components, React will modify the DOM.

 * For the initial render:
   * React will use the appendChild() DOM API to put all the DOM nodes it has created on screen.
 * For re-renders:
   * React will apply the minimal necessary operations(calculated while rendering!) to make the DOM match the latest rendering output.

* React only changes the DOM nodes if there's a difference between renders.

export default function Clock({ time }) {
  return (
    <>
      <h1>{time}</h1>
      <input />
    </>
  );
}
  * For example, here is a component that re-renders with different props passed from it's parent every second.
 * Notice how we can add some text into the <input>, updating it's value, but the text doesn't disappear when the component re-renders.
 * This works because during the last step, React only updates the content of <h1> with the new time. It sees that the <input> appears in the JSX in the same place as last time, so React doesn't touch the <input> --or its value.
 */

//? Epilogue: Browser Paint
/*
 * After rendering is done and React updated the DOM, the browser will repaint the screen.
 * Although this process is known as "browser rendering", we'll refer to it as "painting" to avoid confusion throughout the docs.
 */

//! Recap
/*
 * Any screen update in a React app happens in three steps:
 * 1 - Trigger
 * 2 - Render
 * 3 - Commit

* React doesn't touch the DOM if the rendering result is the same as last time.
 */
