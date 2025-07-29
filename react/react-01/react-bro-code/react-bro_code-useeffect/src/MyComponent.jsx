// useEffect - React Hook that tels React to DO SOME CODE WHEN (pick up one):
// This component re-renders
// This component mounts
// The state of value

// useEffect(function, [dependencies]);

// 1. useEffect(() => {})           // Runs after every re-render
// 2. useEffect(() => {}, [])       // Runs only on mount
// 3. useEffect(() => {}, [value])  // Runs on mount + when value changes

// USES
// #1 Event listener
// #2 DOM manipulation
// #3 Subscription (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when component unmounts



import React, {useState, useEffect} from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  function addCount() {
    setCount(cnt => cnt + 1);
  }

  function decCount() {
    setCount(cnt => cnt - 1);
  }

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={decCount}>Decrease</button>
    </>
  );
}

export default MyComponent;
