import { BrowserRouter as Router } from "react-router-dom";

// Components
import Navbar from "./components/Layout/Navbar";
import Content from "./components/Layout/Content";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-between items-center">
        <Router>
          <Navbar />
          <Content />
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
