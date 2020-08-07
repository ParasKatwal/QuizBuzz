import React from "react";
import { Row, Col, Card } from "antd";

function Quizz() {
    return (
        <div className="quizz">
            <div className="custom-container">
                <div className="quizz__question">
                    <h1>
                        who is the who, who meet who when who was eating in the
                        who place?
                    </h1>
                </div>
                <div className="quizz__options">
                    <Row gutter={[48, 24]}>
                        <Col xs={24} md={12}>
                            <Card hoverable bordered={true}>
                                He
                            </Card>
                        </Col>
                        <Col xs={24} md={12}>
                            <Card hoverable bordered={true}>
                                He
                            </Card>
                        </Col>
                        <Col xs={24} md={12}>
                            <Card hoverable bordered={true}>
                                He
                            </Card>
                        </Col>
                        <Col xs={24} md={12}>
                            <Card hoverable bordered={true}>
                                He
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default Quizz;
