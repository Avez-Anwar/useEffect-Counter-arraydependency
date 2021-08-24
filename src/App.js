import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(5);

  const incrementHandler = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };

  const decrementHandler = () => {
    setCountTwo((prevCount) => prevCount - 1);
  };

  useEffect(() => {
    console.log("render");
    return () => {
      console.log("unmount from the dom");
    };
  }, [count,countTwo]);

  return (
    <div>
      <button onClick={incrementHandler}>Increment</button>
      <h1>{count}</h1>
      <h1>{countTwo}</h1>
      <button onClick={decrementHandler}>Decrement</button>
    </div>
  );
}

export default App;

