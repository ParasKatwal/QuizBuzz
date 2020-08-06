import React, { useState } from "react";
import { Modal, Button, Form, Input } from "antd";

import { Link } from "react-router-dom";
// COMPONENTS

export default function Signin() {
    const [modalVisible, setModalVisible] = useState(false);

    const handleModalVisible = (modalVisible) => {
        setModalVisible(modalVisible);
    };

    const onFinish = (values) => {
        console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    const forgotpassword = () => {
        setModalVisible(false);
    };

    return (
        <>
            <Button type="button" onClick={() => handleModalVisible(true)}>
                SIGNIN
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
                        <h1>Sign In</h1>
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
                                        message: "Please enter your user name!",
                                    },
                                ]}
                            >
                                <Input placeholder="Enter your user name" />
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
                                    SIGN IN
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </Modal>
        </>
    );
}
