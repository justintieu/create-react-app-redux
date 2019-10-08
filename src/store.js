import { createStore, applyMiddleware, compose } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "reducers";
import browserHistory from "common/util/browserHistory";

const initialState = {};
const enhancers = [];
const middleware = [thunk, routerMiddleware(browserHistory)];

if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test") {
    // logger for redux - only in non-production mode
    const loggerMiddleware = createLogger();
    middleware.push(loggerMiddleware);
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

    if (typeof devToolsExtension === "function") {
        enhancers.push(devToolsExtension());
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);

export default createStore(
    connectRouter(browserHistory)(rootReducer),
    initialState,
    composedEnhancers
);
