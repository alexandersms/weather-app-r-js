import React from "react";
import ReactDOM from "react-dom"
import App from "./components/App";
//--importation du Provider
import { Provider } from 'react-redux';
//-- importation du Store
import {store} from "./store";
import './assets/main.css';


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
);