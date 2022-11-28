import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Slide from "@mui/material/Slide";
import React, { useContext, useState } from "react";
import DialogContext from "./context/DialogProvider";
import Post from "./Post";

const style = {
  position: "absolute",
  top: "10%",
  left: "10%",
  transform: "translate(-100%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const ModalBox = () => {
  const [postURL, setPostURL] = useState("/posts");
  const dialogCtx = useContext(DialogContext);

  const handleUserRequest = (event) => {
    event.preventDefault();
    console.log("Toggle Clicked");
    dialogCtx.setDialog((prev) => !prev);
  };

  return (
    <Modal
      open={dialogCtx.dialog}
      onClose={handleUserRequest}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Slide in={dialogCtx.dialog}>
        <Box sx={{ ...style, width: 1000 }}>
          <h1>Post</h1>
          <Post urlEnd={postURL} />
        </Box>
      </Slide>
    </Modal>
  );
};

export default ModalBox;
