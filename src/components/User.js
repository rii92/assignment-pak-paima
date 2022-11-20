import React from "react";

const User = (props) => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.username}</td>
      <td>{props.email}</td>
      <td>{props.address}</td>
    </tr>
  );
};

export default User;
