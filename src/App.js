import { useEffect, useState } from "react";

function Counter() {
  const [count, setCounter] = useState(0);

  useEffect(() => {
    console.log(`카운트가 ${count}로 변경되었습니다.`);
  }, [count]);

  function increase() {
    setCounter(count + 1);
  }

  return (
    <div>
      <h1>카운트 : {count}</h1>
      <button onClick={increase}>클릭하면 올라가요</button>
    </div>
  );
}

function Profile() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    console.log(`이름: ${name}, 나이 ${age}`);
  }, [name, age]);

  function handleChangeName(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="이름을 입력하세요"
        value={name}
        onChange={handleChangeName}
      />
      <input
        type="text"
        placeholder="나이를 입력하세요"
        value={age}
        onChange={(event) => setAge(event.target.value)}
      />
    </div>
  );
}

function App() {
  return (
    <div>
      <Counter></Counter>
      <hr />
      <Profile></Profile>
    </div>
  );
}

export default App;
