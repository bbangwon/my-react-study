import { useEffect, useState } from "react";

function LoadingMessage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return <div>{loading ? <h1>로딩 중...</h1> : <h1>로딩 완료</h1>}</div>;
}

function App() {
  return (
    <div>
      <LoadingMessage />
    </div>
  );
}

export default App;
