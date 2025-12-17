import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./Profile";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>My Website</h1>
        <nav>
          <Link to="/">홈</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/profile/:id" element={<Profile></Profile>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
