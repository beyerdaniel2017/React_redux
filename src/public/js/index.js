import "../less/master.less";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { store, history } from "./utils/store";

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

import App from "./app";

ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={store}>
            { /* ConnectedRouter will use the store from Provider automatically */ }
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById("app")
);