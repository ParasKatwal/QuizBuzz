import React, { useContext, useEffect, useState } from "react";
import { TrophyOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Row, Col, Card } from "antd";
// CONTEXT
import { DataContext } from "../Context";

function sortScore(allScores) {
    let scores = allScores;
    scores.sort();
    scores.sort(function (a, b) {
        return a - b;
    });
    return scores;
}

function LeaderBoard() {
    const { score, allScore } = useContext(DataContext);
    const [presentScore, setPresentScore] = score;
    const [allScores, setAllScores] = allScore;
    const [sortAllScores, setSortAllScores] = useState([]);

    const restart = () => {
        setPresentScore(0);
    };

    useEffect(() => {
        setSortAllScores(sortScore(allScores).reverse());
        console.log("sort");
    });

    return (
        <div className="leaderboard">
            <div className="custom-container">
                <div className="leaderboard__header">
                    <TrophyOutlined />
                    <h1>LEADER BOARD</h1>
                </div>
                <div className="leaderboard__body">
                    <Row justify="center">
                        <Col xs={24} md={12}>
                            <Card>
                                <h2>Your Final score {presentScore}</h2>
                                <Card title="Top 10 score">
                                    {sortAllScores.slice(0, 10).map((score) => (
                                        <ul key={"" + Math.random()}>
                                            <li>
                                                <TrophyOutlined />
                                                {score}
                                            </li>
                                        </ul>
                                    ))}
                                </Card>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <div className="play-again">
                    <Link onClick={restart} to={"/quizz"}>
                        Play Again
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LeaderBoard;
