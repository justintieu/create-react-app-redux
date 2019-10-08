// @flow
import * as React from "react";
import { Route, Link } from "react-router-dom";
import Home from "common/components/Home";
import About from "common/components/About";
import { ABOUT_US, HOME } from "common/util/paths";

const App = (): React.Node => (
    <div>
        <header>
            <Link to={HOME}>Home</Link>
            <Link to={ABOUT_US}>About</Link>
        </header>

        <main>
            <Route exact path={HOME} component={Home} />
            <Route exact path={ABOUT_US} component={About} />
        </main>
    </div>
);

export default App;
