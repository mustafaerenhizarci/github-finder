import { BsFillEmojiDizzyFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="animate-fadein transition-all container mx-auto flex flex-col justify-center items-center gap-y-8">
      <div className="text-5xl flex gap-x-8 justify-center items-center">
        <BsFillEmojiDizzyFill className="text-9xl text-center text-accent" />
        <h1 className="text-4xl text-center font-bold">Oops!</h1>
      </div>
      <p className="text-2xl text-center  font-light">404 - Page not found!</p>
      <Link to="/" className="btn btn-outline btn-accent mx-auto">
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
