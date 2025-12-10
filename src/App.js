import { useState } from "react";

function CounterWithState() {
  const [count, setCount] = useState(0);
  function increase() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={increase}>Click me!</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <CounterWithState></CounterWithState>
    </div>
  );
}

export default App;
