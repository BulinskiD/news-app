import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./store";
import { Provider } from "react-redux";
import firebaseMiddleware from "./store/firebase/firebaseMiddleware";
import thunk from "redux-thunk";

const store = configureStore({
  reducer,
  middleware: [thunk, firebaseMiddleware],
});

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
