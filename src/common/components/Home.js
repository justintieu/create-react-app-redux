// @flow
import * as React from "react";
import { push } from "connected-react-router";
import { translate } from "react-i18next";
import { connect } from "react-redux";
import { compose } from "redux";
import type { NoArgsHandler } from "common/util/types";
import {
    increment,
    incrementAsync,
    decrement,
    decrementAsync
} from "counter/state/counterActions";

type HomeStateProps = $ReadOnly<{|
    count: number,
    isDecrementing: boolean,
    isIncrementing: boolean
|}>;

type HomeDispatchProps = $ReadOnly<{|
    changePage: NoArgsHandler,
    decrement: NoArgsHandler,
    decrementAsync: NoArgsHandler,
    increment: NoArgsHandler,
    incrementAsync: NoArgsHandler
|}>;

type HomeProps = $ReadOnly<{|
    ...HomeStateProps,
    ...HomeDispatchProps
|}>;

const Home = (props: HomeProps): React.Node => {
    const {
        changePage,
        count,
        decrement,
        decrementAsync,
        increment,
        incrementAsync,
        isDecrementing,
        isIncrementing,
        t
    } = props;
    return (
        <div>
            <h1>{t("home.home_title")}</h1>
            <p>
                {t("general.count_x", {
                    count
                })}
            </p>

            <p>
                <button onClick={increment}>{t("home.increment")}</button>
                <button onClick={incrementAsync} disabled={isIncrementing}>
                    {t("home.increment_async")}
                </button>
            </p>

            <p>
                <button onClick={decrement}>{t("home.decrement")}</button>
                <button onClick={decrementAsync} disabled={isDecrementing}>
                    {t("home.decrement_async")}
                </button>
            </p>

            <p>
                <button onClick={changePage}>{t("home.go_to_about")}</button>
            </p>
        </div>
    );
};

const mapStateToProps = (state: Object): HomeStateProps => {
    const {
        counter: { count, isDecrementing, isIncrementing }
    } = state;
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

const enhance = compose(
    translate(),
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
);

export default enhance(Home);
