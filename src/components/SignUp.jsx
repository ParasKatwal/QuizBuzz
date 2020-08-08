import React, { useState, useContext } from "react";
import { Modal, Button, Form, Input } from "antd";
// CONTEXT
import { DataContext } from "../Context";

export default function Signin() {
    const { isLoggedIn, accounts, activeAcc } = useContext(DataContext);
    const [log, setLog] = isLoggedIn;
    const [users, setUsers] = accounts;
    const [acc, setAcc] = activeAcc;

    const [modalVisible, setModalVisible] = useState(false);

    const handleModalVisible = (modalVisible) => {
        setModalVisible(modalVisible);
    };

    const onFinish = (values) => {
        setUsers([...users, values]);
        setAcc(values);
        setLog(true);
        setModalVisible(false);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <>
            <Button type="button" onClick={() => handleModalVisible(true)}>
                SIGNUP
            </Button>
            <Modal
                centered
                visible={modalVisible}
                onOk={() => setModalVisible(false)}
                onCancel={() => setModalVisible(false)}
                footer={null}
            >
                <div className="log__wrapper">
                    <div className="signin">
                        <h1>Sign Up</h1>
                        <Form
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >
                            <Form.Item
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please enter your name!",
                                    },
                                ]}
                            >
                                <Input placeholder="Enter your name" />
                            </Form.Item>

                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please enter your email!",
                                    },
                                ]}
                            >
                                <Input placeholder="Enter your email" />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please enter your password!",
                                    },
                                ]}
                            >
                                <Input.Password placeholder="Enter your password" />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Sign Up
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </Modal>
        </>
    );
}
