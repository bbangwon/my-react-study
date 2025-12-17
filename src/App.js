import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h1>홈 페이지</h1>;
}

function About() {
  return <h1>소개 페이지</h1>;
}

function Contact() {
  return <h1>연락처 페이지</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">홈</Link>
        <Link to="/about">소개</Link>
        <Link to="/contact">연락처</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
