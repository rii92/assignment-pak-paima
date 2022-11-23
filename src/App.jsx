import { useEffect, useState } from "react";
import BoldContext from "./BoldContext";
import Post from "./Post";
import User from "./User";

function App() {
  const [userURL, setUserURL] = useState("/users");
  const [postURL, setPostURL] = useState("/posts");
  const [toggle, setToggle] = useState(false);
  const [bold, setBold] = useState(false);

  console.log("App called");
  console.log("Toggle:", toggle);
  console.log("Bold :", bold);

  useEffect(() => {
    console.log("APP MOUNTED");
    return () => {
      console.log("APP UNMOUNTED");
    };
  }, []);

  const handleUserRequest = (event) => {
    event.preventDefault();
    console.log("Toggle Clicked");
    setToggle((prev) => !prev);
  };

  const handleBoldRequest = (event) => {
    event.preventDefault();
    console.log("Bold Clicked");
    setBold((prev) => !prev);
  };

  return (
    <div>
      <BoldContext.Provider value={{ isBold: bold }}>
        <Post urlEnd={postURL} />
        <User urlEnd={userURL} />
      </BoldContext.Provider>
      {/* <User urlEnd={userURL} key={Math.floor(Math.random() * 101)} /> */}
      <div>
        <button onClick={handleUserRequest}>Toggle</button>
      </div>
      <div>
        <button onClick={handleBoldRequest}>
          {bold && <b>Bold</b>} {!bold && <p>no bold</p>}
        </button>
      </div>
    </div>
  );
}

export default App;
