import { createContext, useState } from "react";

export const GithubContext = createContext({});

function GithubProvider({ children }) {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  async function fetchProfiles(query) {
    const data = await fetch(
      `${process.env.REACT_APP_GITHUB_API_URL}/search/users?q=${query}`,
      {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_API_TOKEN}`,
        },
      }
    ).then((res) => res.json());

    setUsers(data.items);
    setIsLoading(false);
  }

  function clearProfiles(e) {
    e.preventDefault();
    setUsers([]);
  }

  return (
    <GithubContext.Provider
      value={{
        users,
        query,
        setQuery,
        fetchProfiles,
        clearProfiles,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
}

export default GithubProvider;
