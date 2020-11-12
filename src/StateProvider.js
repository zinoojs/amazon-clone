import React, { createContext, useContext, useReducer } from "react";
// prepare the dataLayer
export const StateContext = createContext();
// Wrap our app and provide the dataLayer
export const StateProvider = ({ reducer, children, initialState }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// pull info from dataLayer
export const useStateValue = () => useContext(StateContext);
