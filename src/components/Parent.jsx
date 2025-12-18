import Child from "./Child";
import { useTheme } from "../contexts/ThemeContext";

export default function Parent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`parent ${theme}`}>
      <h1>부모 컴포넌트</h1>
      <button onClick={toggleTheme}>테마 변경</button>
      <p>현재 테마 : {theme === "light" ? "라이트 모드" : "다크 모드"}</p>
      <Child></Child>
    </div>
  );
}
