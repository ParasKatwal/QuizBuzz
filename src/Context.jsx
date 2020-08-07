import React, { useState, createContext, useEffect } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState();
    const [accounts, setAccounts] = useState([]);
    const [activeAcc, setActiveAcc] = useState([]);
    const [allScore, setAllScore] = useState([]);
    const [score, setScore] = useState(0);
    useEffect(() => {
        const accountsData = localStorage.getItem("users");
        if (accountsData) {
            setAccounts(JSON.parse(accountsData));
        }
        const activeData = localStorage.getItem("activeUser");
        if (activeData) {
            setActiveAcc(JSON.parse(activeData));
        }
        const allScoreData = localStorage.getItem("allScore");
        if (allScoreData) {
            setAllScore(JSON.parse(allScoreData));
        }
        const scoreData = localStorage.getItem("score");
        if (scoreData) {
            setScore(JSON.parse(scoreData));
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
        localStorage.setItem("allScore", JSON.stringify(allScore));
        localStorage.setItem("score", JSON.stringify(score));
    });

    return (
        <DataContext.Provider
            value={{
                isLoggedIn: [isLoggedIn, setIsLoggedIn],
                accounts: [accounts, setAccounts],
                activeAcc: [activeAcc, setActiveAcc],
                allScore: [allScore, setAllScore],
                score: [score, setScore],
            }}
        >
            {props.children}
        </DataContext.Provider>
    );
};
