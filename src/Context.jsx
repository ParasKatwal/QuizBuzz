import React, { useState, createContext, useEffect } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState();
    const [accounts, setAccounts] = useState([]);
    const [activeAcc, setActiveAcc] = useState([]);
    useEffect(() => {
        const accountsData = localStorage.getItem("users");
        if (accountsData) {
            setAccounts(JSON.parse(accountsData));
        }
        const activeData = localStorage.getItem("activeUser");
        if (activeData) {
            setActiveAcc(JSON.parse(activeData));
        }
        const status = localStorage.getItem("status");
        if (status) {
            if (status == "true") {
                setIsLoggedIn(true);
            } else setIsLoggedIn(false);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("status", JSON.stringify(isLoggedIn));
    }, [isLoggedIn]);

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(accounts));
        localStorage.setItem("activeUser", JSON.stringify(activeAcc));
    });

    return (
        <DataContext.Provider
            value={{
                isLoggedIn: [isLoggedIn, setIsLoggedIn],
                accounts: [accounts, setAccounts],
                activeAcc: [activeAcc, setActiveAcc],
            }}
        >
            {props.children}
        </DataContext.Provider>
    );
};
