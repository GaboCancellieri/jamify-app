import React from "react";
import styles from "./App.module.scss";
import { Route, Routes } from "react-router-dom";
import { HomeScreen, LoginScreen } from "./screens";

function App() {
  return (
    <div className={styles.appContainer}>
      <Routes>
        <Route path={"/"} element={<HomeScreen />} />
        <Route path={"/login"} element={<LoginScreen />} />
      </Routes>
    </div>
  );
}

export default App;
