import React from "react";
import { Link } from "react-router-dom";

function Error() {
    return (
        <div className="error custom-container">
            <h1>NO PAGE FOUND</h1>
            <Link href="Home" to={"/"}>
                Return to home
            </Link>
        </div>
    );
}

export default Error;
