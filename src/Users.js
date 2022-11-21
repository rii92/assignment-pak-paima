import React, {useEffect, useState } from "react";

import "./App.css";
import UsersList from "./components/UsersList";

const Users = (props) => {
  const [users, setUsers] = useState([]);
  const url =`https://jsonplaceholder.typicode.com/${props.urlEnd}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          url
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
        console.log(error.message);
      }
    }
  fetchData(); 
  });

  let content = <p>Found no users.</p>;

  if (users.length > 0) {
    content = <UsersList users={users} />;
  }

  return (
    <React.Fragment>
      <section>{content}</section>
    </React.Fragment>
  );
};

export default Users;
