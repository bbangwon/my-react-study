import { useState } from "react";

function Counter() {
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

function NameInput() {
  const [name, setName] = useState("");

  function handleChange(event) {
    console.log(event);
    setName(event.target.value);
  }
  return (
    <div>
      <input
        type="text"
        placeholder="이름을 입력하세요"
        value={name}
        onChange={handleChange}
      />
      <h1>안녕하세요, {name}님!</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <NameInput></NameInput>
    </div>
  );
}

export default App;
