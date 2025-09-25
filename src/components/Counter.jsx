import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const counter = () => {
    setCount(count + 1);
  };

  const counterr = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>Basic counter :{count} using React</h1>
      <button onClick={counter}>Add value: {count}</button> {""}
      <button onClick={counterr}>Remove value: {count}</button>
    </>
  );
}

export default Counter;
