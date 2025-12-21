import useCounterStore from "../stores/useCounterStore";

export default function Counter() {
  const { count, increase, decrease } = useCounterStore();

  return (
    <div>
      <h1>카운트 : {count}</h1>
      <button onClick={increase}>증가</button>
      <button onClick={decrease}>감소</button>
    </div>
  );
}
