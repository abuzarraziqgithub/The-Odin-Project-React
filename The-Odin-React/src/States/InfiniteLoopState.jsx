import { useState } from "react";

function InfiniteLoopState() {
  const [count, setCount] = useState(0);

  //* It will lead to infinite loop:
  //* Because, It is not attached to any function call or event, so when the component render, it will update the value for the next render and so on.
  //* We should use the setState inside event or function.
  setCount(count + 1);
  return (
    <>
      <h1>{count}</h1>
    </>
  );
}

export default InfiniteLoopState;
