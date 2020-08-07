import React, { useContext } from "react";
import { TrophyOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Row, Col, Card } from "antd";
// CONTEXT
import { DataContext } from "../Context";

function LeaderBoard() {
    const { score, allScore } = useContext(DataContext);
    const [presentScore, setPresentScore] = score;
    const [allScores, setAllScores] = allScore;
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
                                <Card>
                                    <h3>Top 10 score</h3>
                                </Card>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <div className="play-again">
                    <Link onClick={() => setPresentScore(0)} to={"/quizz"}>
                        Play Again
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LeaderBoard;
