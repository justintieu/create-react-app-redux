// @flow
import type { Action } from "common/util/types";
import {
    DECREMENT,
    DECREMENT_REQUESTED,
    INCREMENT,
    INCREMENT_REQUESTED
} from "counter/state/counterActions";

type CounterState = $ReadOnly<{|
    count: number,
    isDecrementing: boolean,
    isIncrementing: boolean
|}>;

const initialState = {
    count: 0,
    isDecrementing: false,
    isIncrementing: false
};

const counter = (state: CounterState = initialState, action: Action) => {
    switch (action.type) {
        case DECREMENT_REQUESTED:
            return Object.assign({}, state, {
                isDecrementing: true
            });

        case DECREMENT:
            return Object.assign({}, state, {
                count: state.count - 1,
                isDecrementing: !state.isDecrementing
            });

        case INCREMENT_REQUESTED:
            return Object.assign({}, state, {
                isIncrementing: true
            });

        case INCREMENT:
            return Object.assign({}, state, {
                count: state.count + 1,
                isIncrementing: !state.isIncrementing
            });

        default:
            return state;
    }
};

export default counter;
