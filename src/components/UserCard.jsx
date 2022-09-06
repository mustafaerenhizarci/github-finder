import { Link } from "react-router-dom";

function UserCard({ user }) {
  return (
    <div className="container h-24 rounded-xl flex justify-start items-center bg-neutral-focus drop-shadow-2xl">
      <div className="avatar">
        <div className="w-24 rounded-l-xl">
          <img src={user.avatar_url} alt="avatar" />
        </div>
      </div>
      <div className="pl-8 h-24 flex flex-col justify-center">
          <h1 className="text-xl text-left font-bold">{user.login}</h1>
          <Link to={`/user/${user.login}`} className="link no-underline font-light text-md text-left">
            Visit Profile
          </Link>
        </div>
    </div>
  );
}

export default UserCard;
