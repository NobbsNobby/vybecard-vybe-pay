//Core
import React from "react";
import {Provider} from 'react-redux'
// Instruments
import 'normalize.css';
import './src/styles/global.css'
// Store
import {store} from './src/store'


export const wrapRootElement = ({ element }) => {
  return <Provider store={store}>{element}</Provider>;
};
