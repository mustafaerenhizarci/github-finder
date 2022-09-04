import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../Pages/Home";
import About from "../Pages/About";

function Content() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default Content;
