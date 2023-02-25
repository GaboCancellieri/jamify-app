import React, { useState } from "react";
import "./App.css";
import { Button, Input, Typography } from "./components/common";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleCerrar = () => {
    console.log("CERRAR");
  };

  const handleChangeUsername = (event: any) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event: any) => {
    setPassword(event.target.value);
  };

  return (
    <div className={"appContainer"}>
      <Typography type="title">TITULO 1</Typography>
      <Typography type="paragraph">PARRAFO 1</Typography>
      <div className={"formContainer"}>
        <Input
          placeholder="username"
          value={username}
          onChange={handleChangeUsername}
        />
        <Input
          placeholder="password"
          type={"password"}
          value={password}
          onChange={handleChangePassword}
        />
        <div className={"buttonContainer"}>
          <Button type="primary" onClick={handleCerrar}>
            <Typography type="paragraph">LOGIN</Typography>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
