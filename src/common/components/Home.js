// @flow
import * as React from "react";
import { translate } from "react-i18next";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { ABOUT_US } from "common/util/paths";
import type { HasI18n, NoArgsHandler } from "common/util/types";
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
    decrement: NoArgsHandler,
    decrementAsync: NoArgsHandler,
    increment: NoArgsHandler,
    incrementAsync: NoArgsHandler
|}>;

type HomeProps = $ReadOnly<{|
    ...HomeStateProps,
    ...HomeDispatchProps,
    ...HasI18n
|}>;

const Home = (props: HomeProps): React.Node => {
    const {
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
                <button onClick={increment} disabled={isIncrementing}>
                    {t("home.increment")}
                </button>
                <button onClick={incrementAsync} disabled={isIncrementing}>
                    {t("home.increment_async")}
                </button>
            </p>

            <p>
                <button onClick={decrement} disabled={isDecrementing}>
                    {t("home.decrement")}
                </button>
                <button onClick={decrementAsync} disabled={isDecrementing}>
                    {t("home.decrement_async")}
                </button>
            </p>

            <p>
                <Link to={ABOUT_US}>
                    <button>{t("home.go_to_about")}</button>
                </Link>
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
