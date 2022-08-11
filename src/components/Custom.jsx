import React from "react";
import { useState } from "react";
function Custom(props) {
  const [counter, setCounter] = useState(100);
  function increaseValue() {
    setCounter(counter + 200);
  }
  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={increaseValue}>Click me</button>;
    </div>
  );
}

export default Custom;
