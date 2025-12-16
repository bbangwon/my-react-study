import { useEffect, useState } from "react";

function WelcomeMessage() {
  const [name, setName] = useState("react");

  useEffect(() => {
    console.log("컴포넌트가 화면에 나타났어요!");
  }, []);

  function changeName() {
    setName("react master");
  }
  return (
    <div>
      <h1>안녕하세요, {name}님!</h1>
      <button onClick={changeName}>이름 변경하기</button>
    </div>
  );
}

function NameLogger() {
  const [name, setName] = useState("");

  useEffect(() => {
    console.log(`이름이 ${name}으로 변경되었습니다.`);
  }, [name]);

  function handleChange(event) {
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
      <h1>안녕하세요 {name}님!</h1>
    </div>
  );
}

function TitleChanger() {
  const [title, setTitle] = useState("Home");

  useEffect(() => {
    document.title = title;
  }, [title]);

  function handleChange(event) {
    setTitle(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="페이지 제목을 입력하세요"
        value={title}
        onChange={handleChange}
      />
      <h1>현재 제목: {title}</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <TitleChanger></TitleChanger>
    </div>
  );
}

export default App;
