import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>My Website</h1>
        <nav>
          <Link to="/">홈</Link>
          <Link to="/about">소개</Link>
          <Link to="/contact">연락처</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
