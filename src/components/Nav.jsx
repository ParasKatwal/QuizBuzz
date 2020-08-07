import React, { useState, useEffect, useContext } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
// IMAGES
import logo from "../img/logo/logo.png";
// COMPONENTS
import SignIn from "../components/SingIn";
import SignUp from "../components/SignUp";
// CONTEXT
import { DataContext } from "../Context";

function Nav() {
    const { isLoggedIn, activeAcc } = useContext(DataContext);
    const [log, setLog] = isLoggedIn;
    const [acc, setAcc] = activeAcc;

    return (
        <header>
            <div className="custom-container">
                <nav>
                    <div className="logo">
                        <Link to={"/"}>
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    {log ? (
                        <div className="user-wrap">
                            <h3>{acc.username}</h3>
                            <Button
                                onClick={() => {
                                    setLog(false);
                                }}
                            >
                                log Out
                            </Button>
                        </div>
                    ) : (
                        <div className="nav__menu">
                            <SignIn />
                            <SignUp />
                        </div>
                    )}
                </nav>
            </div>
        </header>
    );
}

export default Nav;
