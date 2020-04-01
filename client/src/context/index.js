import React, { useReducer } from "react";
import jwt from "jsonwebtoken";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "setJwt":
      return { ...state, profile: action.payload };
    default:
      return state;
  }
};
export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    profile: {}
  });

  const setJwt = async token => {
    const profile = await jwt.decode(token);
    dispatch({ type: "setJwt", payload: profile });
  };

  return (
    <Context.Provider
      value={{
        profile: state.profile,
        setJwt
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
