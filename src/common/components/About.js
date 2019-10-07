// @flow
import * as React from "react";
import { translate } from "react-i18next";

const About = (props): React.Node => {
    const { t } = props;
    return (
        <div>
            <h1>{t("about.about_title")}</h1>
            <p>{t("about.about_description")}</p>
        </div>
    );
};

export default translate()(About);
