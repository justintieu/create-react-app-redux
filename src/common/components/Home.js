// @flow
import * as React from "react";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import type { NoArgsHandler } from "common/util/types";
import {
    increment,
    incrementAsync,
    decrement,
    decrementAsync
} from "counter/state/counterActions";

type HomeStateProps = {|
    +count: number,
    +isDecrementing: boolean,
    +isIncrementing: boolean
|};

type HomeDispatchProps = {|
    +changePage: NoArgsHandler,
    +decrement: NoArgsHandler,
    +decrementAsync: NoArgsHandler,
    +increment: NoArgsHandler,
    +incrementAsync: NoArgsHandler
|};

type HomeProps = {|
    ...HomeStateProps,
    ...HomeDispatchProps
|};

const Home = (props: HomeProps): React.Node => {
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

const mapStateToProps = (props: Object): HomeStateProps => {
    const {
        counter: { count, isDecrementing, isIncrementing }
    } = props;
    return {
        count: count,
        isDecrementing: isDecrementing,
        isIncrementing: isIncrementing
    };
};

const mapDispatchToProps = (dispatch): HomeDispatchProps => {
    return {
        changePage: (): void => {
            dispatch(push("/about-us"));
        },
        decrement: (): void => {
            dispatch(decrement());
        },
        decrementAsync: (): void => {
            dispatch(decrementAsync());
        },
        increment: (): void => {
            dispatch(increment());
        },
        incrementAsync: (): void => {
            dispatch(incrementAsync());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
