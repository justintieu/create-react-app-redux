// @flow
import * as React from "react";
import { Route, Link } from "react-router-dom";
import Home from "common/components/Home";
import About from "common/components/About";

const App = (): React.Node => (
    <div>
        <header>
            <Link to="/">Home</Link>
            <Link to="/about-us">About</Link>
        </header>

        <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/about-us" component={About} />
        </main>
    </div>
);

export default App;
