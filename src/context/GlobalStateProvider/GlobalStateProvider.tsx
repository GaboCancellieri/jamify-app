import React from "react";
import { GlobalStateProviderProps } from "./types";
import { UserProvider } from "../UserContext/UserContext";

const GlobalStateProvider = ({ children }: GlobalStateProviderProps) => {
  return <UserProvider>{children}</UserProvider>;
};

export default GlobalStateProvider;
