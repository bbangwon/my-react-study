import Child from "./Child";
import { useName } from "./NameContext";

export default function Parent() {
  const { setName } = useName();

  function onClickHandler() {
    setName("React");
  }
  return (
    <div>
      <h1>부모 컴포넌트</h1>
      <button onClick={onClickHandler}>이름 변경</button>
      <Child></Child>
    </div>
  );
}
