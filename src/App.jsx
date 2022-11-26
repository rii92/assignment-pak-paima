import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useContext, useEffect, useState } from "react";
import DialogContext from "./context/DialogProvider";
import Post from "./Post";
import User from "./User";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

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
      {/* <User urlEnd={userURL} key={Math.floor(Math.random() * 101)} /> */}
      <div>
        <button onClick={handleUserRequest}>Toggle</button>
      </div>
      <Modal
        open={dialogCtx.dialog}
        onClose={handleUserRequest}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 1000 }}>
          <h1>Users</h1>
          <Post urlEnd={postURL} />
        </Box>
      </Modal>
    </div>
  );
}

export default App;
