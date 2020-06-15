import React, { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";

import model from "./model";

import { reducer } from "./reducer";

const StateManagementContext = createContext(null);

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, model);
  const value = { state, dispatch };
  return (
    <StateManagementContext.Provider value={value}>
      {children}
    </StateManagementContext.Provider>
  );
};

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const StateManagementConsumer = StateManagementContext.Consumer;

export const useStateManagement = () => {
  const contextValue = useContext(StateManagementContext);

  return contextValue;
};
