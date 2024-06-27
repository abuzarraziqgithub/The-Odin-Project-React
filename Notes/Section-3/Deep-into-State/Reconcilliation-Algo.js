//* Reconciliation Algorithm

/*
  * Reconciliation(restoration) Algorithm is the process by which React upadtes it's UI that make changes in the component state.
  * The reconciliation algorithm is the set of rules that React uses to determine how to update the UI in the most effecient way possible.


* React uses a vitual DOM to update the UI.
  * The virtual DOM is a lightweight in-memory representation of the real DOM, which allows React to make changes to the UI without manipulating the actual DOM.
  * This makes updates faster, as changing the virtual DOM is less expensive than changing the real DOM.


? Techniques used in Algorithm:
 * The algorithm uses two main techniques to optimized updates:

? Tree diffing(compare file diffs): 
  * React compares the current virtual DOM tree with the updated virtual DOM tree, and identifies the minimum number of changes necessary to bring the virtual DOM in line with th updated state.

? Batching(Arrange things in sets/groups): 
  * React batches multiple changes into a single update, reducing the number of updates to the virtual DOM and, in turn, the real DOM.



* The reconciliation algorithm is a critical part of React's performance and helps make React one of the fastest and most efficient JavaScript libraries for building user interfaces.

* After the reconciler compares the current and updated virtual DOM, it identifies the differences and makes the necessary changes to the virtual DOM to bring it in line with the updated state.


? In summary, the reconciler updates the virtual DOM after the reconciliation process to keep it accurate, optimize updates to the real DOM, and ensure that the UI remains in sync with the state of the components.
*/
