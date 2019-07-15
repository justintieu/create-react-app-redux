export const DECREMENT = "DECREMENT";
export const DECREMENT_REQUESTED = "DECREMENT_REQUESTED";
export const INCREMENT = "INCREMENT";
export const INCREMENT_REQUESTED = "INCREMENT_REQUESTED";

export const decrement = () => {
    return dispatch => {
        dispatch({
            type: DECREMENT_REQUESTED
        });

        dispatch({
            type: DECREMENT
        });
    };
};

export const decrementAsync = () => {
    return dispatch => {
        dispatch({
            type: DECREMENT_REQUESTED
        });

        return setTimeout(() => {
            dispatch({
                type: DECREMENT
            });
        }, 3000);
    };
};

export const increment = () => {
    return dispatch => {
        dispatch({
            type: INCREMENT_REQUESTED
        });

        dispatch({
            type: INCREMENT
        });
    };
};

export const incrementAsync = () => {
    return dispatch => {
        dispatch({
            type: INCREMENT_REQUESTED
        });

        return setTimeout(() => {
            dispatch({
                type: INCREMENT
            });
        }, 3000);
    };
};
