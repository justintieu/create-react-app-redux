import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { render } from "react-dom";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import store, { history } from "store";
import App from "App";
import i18n from "i18n";

// import third party css
import "sanitize.css/sanitize.css";
// import own css file
import "index.css";

const target = document.querySelector("#root");

render(
    <Provider store={store}>
        <I18nextProvider i18n={i18n}>
            <ConnectedRouter history={history}>
                <div>
                    <App />
                </div>
            </ConnectedRouter>
        </I18nextProvider>
    </Provider>,
    target
);
