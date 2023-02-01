import React from "react";
import "./App.css";
import { Button, Typography } from "./components/common";

function App() {
  const handleGuardar = () => {
    console.log("GUARDAR");
  };

  const handleCerrar = () => {
    console.log("CERRAR");
  };

  return (
    <div className={"appContainer"}>
      <Typography type="title">TITULO 1</Typography>
      <Typography type="paragraph">PARRAFO 1</Typography>
      <div className={"buttonContainer"}>
        <Button type="secondary" onClick={handleGuardar}>
          <Typography type="paragraph">GUARDAR</Typography>
        </Button>
        <Button type="primary" onClick={handleCerrar}>
          <Typography type="paragraph">CERRAR</Typography>
        </Button>
      </div>
    </div>
  );
}

export default App;
