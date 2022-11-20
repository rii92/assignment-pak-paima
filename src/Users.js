import React, { useCallback, useEffect, useState } from "react";

import "./App.css";
import UsersList from "./components/UsersList";

const Users = (props) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsersHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com" + props.urlEnd
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const transformedUsers = data.map((userData) => {
        return {
          id: userData.id,
          name: userData.name,
          username: userData.username,
          email: userData.email,
          address: userData.address.street,
        };
      });
      setUsers(transformedUsers.splice(0, 5));
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchUsersHandler();
  }, [fetchUsersHandler]);

  let content = <p>Found no movies.</p>;

  if (users.length > 0) {
    content = <UsersList users={users} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchUsersHandler}>Fetch Users</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
};

export default Users;
