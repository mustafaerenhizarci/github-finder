import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../Pages/Home";
import About from "../Pages/About";
import NotFound from "../Pages/NotFound";

function Content() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default Content;
