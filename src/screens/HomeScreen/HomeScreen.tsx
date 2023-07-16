import React, { useState } from "react";
import { Button, LoginModal, Typography } from "../../components/common";

const HomeScreen = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <>
      <Typography type="smallTextPrimary">TITULO 1</Typography>
      <Typography type="smallTextPrimary">PARRAFO 1</Typography>
      <LoginModal onCancel={handleClose} isActive={showModal}></LoginModal>
      <Button type="primary" onClick={() => setShowModal(true)}>
        <Typography type="buttonTextPrimary">Login</Typography>
      </Button>
    </>
  );
};

export default HomeScreen;
