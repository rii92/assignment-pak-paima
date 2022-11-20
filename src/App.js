import React from "react";
import Posts from "./Posts";
import Users from "./Users";

function App() {
  return (
    <div>
      <Users urlEnd="/users" />
      <Posts urlEnd="/posts" />
    </div>
  );
}

export default App;
