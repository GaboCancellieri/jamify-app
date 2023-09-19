import React, { createContext } from "react";
import { userInitialState, userReducer } from "./reducer";
import { UserProviderProps } from "./types";
import Provider from "../Store";

const UserStateContext = createContext(userInitialState);
UserStateContext.displayName = "UserStateContext";

const UserDispatchContext = createContext(undefined);
UserDispatchContext.displayName = "UserDispatchContext";

const UserProvider = ({ children }: UserProviderProps) => (
  <Provider
    stateContext={UserStateContext}
    dispatchContext={UserDispatchContext}
    reducer={userReducer}
    initialState={userInitialState}
  >
    {children}
  </Provider>
);

export { UserStateContext, UserDispatchContext, UserProvider };
