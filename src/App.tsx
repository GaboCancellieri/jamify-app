import React, { useState } from "react";
import styles from "./App.module.scss";
import { Button, LoginModal, Typography } from "./components/common";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.appContainer}>
      <Typography type="title">TITULO 1</Typography>
      <Typography type="paragraph">PARRAFO 1</Typography>
      <LoginModal onCancel={handleClose} isActive={showModal}></LoginModal>
      <Button type="primary" onClick={() => setShowModal(true)}>
        <Typography type="buttonTextWhite">Login</Typography>
      </Button>
    </div>
  );
}

export default App;
