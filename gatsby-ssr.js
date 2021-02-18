//Core
import React from "react";
import { Provider } from "react-redux";
// Instruments
import "normalize.css";
import "./src/styles/global.css";
// Store
import { store } from "./src/store";
import { Helmet } from "react-helmet";

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={store}>
      <Helmet>
        <script src="https://cdn.checkout.com/js/framesv2.min.js" />
      </Helmet>
      {element}
    </Provider>
  );
};
