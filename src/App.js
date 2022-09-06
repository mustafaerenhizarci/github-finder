import { BrowserRouter as Router } from "react-router-dom";

// Components
import Navbar from "./components/Layout/Navbar";
import Content from "./components/Layout/Content";
import Footer from "./components/Layout/Footer";
// Context
import GithubProvider from "./components/Context/GithubContext";

function App() {
  return (
    <GithubProvider>
      <div className="w-full h-screen flex flex-col justify-between items-center">
        <Router>
          <Navbar />
          <Content />
          <Footer />
        </Router>
      </div>
    </GithubProvider>
  );
}

export default App;
