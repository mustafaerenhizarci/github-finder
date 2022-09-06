import { useContext } from "react";
import { GithubContext } from "./Context/GithubContext";
import UserCard from "./UserCard";

function UserResults() {
  const { users } = useContext(GithubContext);

  return (
    <div className="container my-8 mx-auto grid gap-y-4 gap-x-4 grid-cols-4 lg:grid-cols-2 sm:grid-cols-1">
      {users.map((user) => {
        return <UserCard key={user.id} user={user} />;
      })}
    </div>
  );
}

export default UserResults;
