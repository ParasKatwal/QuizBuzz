import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
// Ant Design CSS
import "antd/dist/antd.css";
// COMPONENTS
import Nav from "./components/Nav";
// PAGES
import Home from "./pages/Home";
import Quizz from "./pages/Quizz";
import Error from "./pages/Error";
// SASS
import "./style/common.scss";
// CONTEXT
import { DataProvider } from "./Context";

function App() {
    return (
        <>
            <DataProvider>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/quizz" component={Quizz} />
                    <Route exact component={Error} />
                </Switch>
            </DataProvider>
        </>
    );
}

export default App;
