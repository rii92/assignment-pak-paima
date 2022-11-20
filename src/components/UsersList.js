import React from "react";
import "./Table.module.css";
import User from "./User";

const UsersList = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>username</th>
          <th>email</th>
          <th>address</th>
        </tr>
      </thead>
      <tbody>
        {props.users.map((user) => (
          <User
            key={user.id}
            id={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
            address={user.address}
          />
        ))}
      </tbody>
    </table>
  );
};

export default UsersList;
