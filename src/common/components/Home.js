import React from "react";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import {
    increment,
    incrementAsync,
    decrement,
    decrementAsync
} from "counter/state/counterActions";

const Home = props => {
    const {
        changePage,
        count,
        decrement,
        decrementAsync,
        increment,
        incrementAsync,
        isDecrementing,
        isIncrementing
    } = props;
    return (
        <div>
            <h1>Home</h1>
            <p>Count: {count}</p>

            <p>
                <button onClick={increment}>Increment</button>
                <button onClick={incrementAsync} disabled={isIncrementing}>
                    Increment Async
                </button>
            </p>

            <p>
                <button onClick={decrement}>Decrement</button>
                <button onClick={decrementAsync} disabled={isDecrementing}>
                    Decrement Async
                </button>
            </p>

            <p>
                <button onClick={changePage}>Go to about page via redux</button>
            </p>
        </div>
    );
};

const mapStateToProps = ({
    counter: { count, isDecrementing, isIncrementing }
}) => ({
    count: count,
    isDecrementing: isDecrementing,
    isIncrementing: isIncrementing
});

const mapDispatchToProps = dispatch => {
    return {
        changePage: () => {
            dispatch(push("/about-us"));
        },
        decrement: () => {
            dispatch(decrement());
        },
        decrementAsync: () => {
            dispatch(decrementAsync());
        },
        increment: () => {
            dispatch(increment());
        },
        incrementAsync: () => {
            dispatch(incrementAsync());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
