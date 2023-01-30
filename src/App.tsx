import React from "react";
import "./App.css";
import Typography from "./components/common/Typography/Typography";
import Button from "./components/common/Button/Button";

function App() {
  return (
    <>
      <Button type="secondary">
        <Typography type="paragraph">GUARDAR</Typography>
      </Button>
      <Typography type="paragraph">PARRAFO 1</Typography>
      <Typography type="title">TITULO 2</Typography>
    </>
  );
}

export default App;
