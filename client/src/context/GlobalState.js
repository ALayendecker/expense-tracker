import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";
//initial state
const initialState = {
  transactions: [],
  error: null,
  loading: true
};

//
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  //actions
  async function getTransactions() {
    try {
      const res = await axios.get("/api/v1/transactions");
      dispatch({ type: "GET_TRANSACTIONS", payload: res.data.data });
    } catch (err) {}
  }
  function deleteTransaction(id) {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  }
  function addTransaction(transaction) {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
