import { useName } from "./NameContext";

export default function Child() {
  const { name } = useName();
  return (
    <div>
      <h2>자식 컴포넌트</h2>
      <p>이름 : {name}</p>
    </div>
  );
}
