import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.scss";

//redux
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./reducer";

const store = configureStore({ reducer: rootReducer, devTools: true });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
