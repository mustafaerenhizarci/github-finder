import Logo from "../Logo";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full h-24 px-4 bg-base-300 border-b-2 border-gray-400 drop-shadow-2xl">
      <div className="container py-4 flex justify-between items-center h-full mx-auto">
        <Logo />
        <div className="btn-group ml-auto flex-nowrap">
          <Link to="/" className="btn btn-accent  font-semibold">
            Home
          </Link>
          <Link to="/about" className="btn btn-accent  font-semibold">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
