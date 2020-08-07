import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Button } from "antd";
// DATA
import quizData from "../Data";
// CONTEXT
import { DataContext } from "../Context";

function Quizz() {
    const { score, allScore } = useContext(DataContext);
    const [presentScore, setPresentScore] = score;
    const [allScorePresent, setAllScorePresent] = allScore;

    const [question, setQuestion] = useState();
    const [options, setOptions] = useState([]);
    const [answer, setAnswer] = useState();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [proceedToNext, setProceedToNext] = useState(false);
    const [selectAnswer, setSelectAnswer] = useState();

    useEffect(() => {
        setQuestion(quizData[currentIndex].question);
        setOptions(quizData[currentIndex].options);
        setAnswer(quizData[currentIndex].answer);
    }, [currentIndex]);

    const selectOption = (option) => {
        setSelectAnswer(option);
    };

    const checkAnswer = () => {
        setProceedToNext(true);
        if (answer == selectAnswer) {
            setPresentScore(presentScore + 1);
        }
    };

    const nextQuestion = () => {
        setCurrentIndex(currentIndex + 1);
        setProceedToNext(false);
        setSelectAnswer();
        selectOption();
    };

    const stopQuiz = () => {
        setCurrentIndex(0);
        setProceedToNext(false);
        setSelectAnswer();
        selectOption();
        setAllScorePresent([...allScorePresent, presentScore]);
    };

    return (
        <div className="quizz">
            <div className="custom-container">
                <div className="quizz__question">
                    <h1>{question}</h1>
                </div>
                <div className="quizz__options">
                    <Row gutter={[48, 24]}>
                        {options.map((option) => (
                            <Col key={option} xs={24} md={12}>
                                <Card
                                    hoverable
                                    bordered={true}
                                    className={
                                        proceedToNext
                                            ? answer === option
                                                ? "correct"
                                                : selectAnswer === option
                                                ? "selected"
                                                : ""
                                            : selectAnswer === option
                                            ? "selected"
                                            : ""
                                    }
                                    onClick={() => selectOption(option)}
                                >
                                    {option}
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
                <div className="quizz__btn-wrap">
                    {proceedToNext ? (
                        currentIndex >= 3 ? (
                            <Link onClick={stopQuiz} to={"/leaderboard"}>
                                Show Final Score
                            </Link>
                        ) : (
                            <Button onClick={nextQuestion}>
                                Next Question
                            </Button>
                        )
                    ) : (
                        <Button onClick={checkAnswer}>
                            Submit your answer
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Quizz;
