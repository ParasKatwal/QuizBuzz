import React from "react";
import { Route, Switch } from "react-router-dom";
// Ant Design CSS
import "antd/dist/antd.css";
// COMPONENTS
import Nav from "./components/Nav";
// PAGES
import Home from "./pages/Home";
import Error from "./pages/Error";
// SASS
import "./style/common.scss";

function App() {
    return (
        <>
            <Nav />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact component={Error} />
            </Switch>
        </>
    );
}

export default App;
