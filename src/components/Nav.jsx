import React from "react";
// IMAGES
import logo from "../img/logo/logo.png";
// COMPONENTS
import SignIn from "../components/SingIn";
import SignUp from "../components/SignUp";

function Nav() {
    return (
        <header>
            <div className="custom-container">
                <nav>
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="nav__menu">
                        <SignIn />
                        <SignUp />
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Nav;
