import React from "react";
import styles from "./App.module.scss";
import { Route, Routes } from "react-router-dom";
import { FeedScreen, HomeScreen, LoginScreen } from "./screens";

function App() {
  return (
    <div className={styles.appContainer}>
      <Routes>
        <Route path={"/"} element={<HomeScreen />} />
        <Route path={"/login"} element={<LoginScreen />} />
        <Route path={"/feed"} element={<FeedScreen />} />
      </Routes>
    </div>
  );
}

export default App;
