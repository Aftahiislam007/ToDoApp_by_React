import React from "react";
import { Provider } from "react-redux";
import { store } from "./indexx";



const ReduxProvider = ({ children }) => {
  // console.log(props);
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
