import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store, { history } from "store";
import App from "App";

import "sanitize.css/sanitize.css";
import "index.css";

const target = document.querySelector("#root");

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <App />
            </div>
        </ConnectedRouter>
    </Provider>,
    target
);
