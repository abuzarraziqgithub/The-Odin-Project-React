/*
 * State variables might look like regular JavaScript variables that we can read and write.
 * However, state behaves more like a snapshot.
 * Setting it doesn't change the state variable we already have, but instead triggers a re-render.
 */

//! Setting state triggers renders
/*
 * We might think of a user Interface as changing directly in response to the user event like a click. (Using Vanilla JavaScript)
 * In React, it works a little differently from this mental model.
 * We saw that setting state requests/triggers re-render from React.
 * This means that for an interface to react to the specific event, we need to update the state first. (for example, check <SetStateTriggerRenders />)
 */
