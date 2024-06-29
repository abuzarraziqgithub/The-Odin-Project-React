import React, { useState } from "react";

function SetStateTriggerRenders() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState("Hi!");

  //* In React, setting a state triggers the component to update or request re-render from React.
  if (isSent) {
    return (
      <>
        <h1>Your message is on it's way!</h1>
      </>
    );
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsSent(true);
        //* For interface to react to the event, we need to update the state first, using setter state.
        setMessage(message);
      }}
    >
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button type="submit">send</button>
      {
        //
        /*
       * In this example, when we press "send", setIsSent(true) tells React to re-render the UI.

        ? Here's what happens when we click the button:

        * The onSubmit event handler executes.
        * setIsSent(true) sets isSent to true and queues a new render.
        * React re-renders the component according to the new isSent value.
       */
      }
    </form>
  );
}

export default SetStateTriggerRenders;
