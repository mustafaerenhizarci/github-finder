import { MdBlockFlipped } from "react-icons/md";

import { useContext, useState } from "react";
import { GithubContext } from "../Context/GithubContext";
import UserResults from "../UserResults";
import Loading from "../Shared/Loading";

function Home() {
  const {
    query,
    setQuery,
    fetchProfiles,
    clearProfiles,
    users,
    isLoading,
    setIsLoading,
  } = useContext(GithubContext);

  const [isValid, setisValid] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();

    if (query.trim() !== "") {
      setIsLoading(true);
      fetchProfiles(query);
      setisValid(true);
    } else {
      setisValid(false);
      setTimeout(() => {
        setisValid(true);
      }, 3000);
    }
    setQuery("");
  }

  return (
    <div className="container my-4 px-8 mx-auto animate-fadein transition-all">
      <form>
        {/**Alert */}
        {!isValid && (
          <div className="alert animate-fadein alert-error my-4 rounded-md min-w-[30%] max-w-max whitespace-nowrap">
            <p className="text-black/70 text-lg text-left font-bold">
              <MdBlockFlipped className="text-4xl mx-2" />
              Please enter something!
            </p>
          </div>
        )}

        <div className="input-group input-group-lg">
          <input
            autoComplete="off"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            className="input w-2/6 sm:w-4/6 input-primary input-lg"
            placeholder="Search"
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-accent btn-lg font-bold"
          >
            GO
          </button>
          {users.length > 0 && (
            <button
              onClick={clearProfiles}
              className="btn btn-lg font-bold btn-accent"
            >
              CLEAR
            </button>
          )}
        </div>
      </form>

      {!isLoading ? <UserResults /> : <Loading/>}
    </div>
  );
}

export default Home;
