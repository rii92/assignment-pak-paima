import { useContext, useEffect, useState } from "react";
import DialogContext from "./context/DialogProvider";
import Post from "./Post";
import User from "./User";

function App() {
  const [userURL, setUserURL] = useState("/users");
  const [postURL, setPostURL] = useState("/posts");

  const dialogCtx = useContext(DialogContext);

  console.log("App called");
  console.log("Ctx.dialog:", dialogCtx.dialog);

  useEffect(() => {
    console.log("APP MOUNTED");
    return () => {
      console.log("APP UNMOUNTED");
    };
  }, []);

  const handleUserRequest = (event) => {
    event.preventDefault();
    console.log("Toggle Clicked");
    dialogCtx.setDialog((prev) => !prev);
  };

  return (
    <div>
      <Post urlEnd={postURL} />
      <User urlEnd={userURL} />
      <div>
        <button onClick={handleUserRequest}>Toggle</button>
      </div>
    </div>
  );
}

export default App;
