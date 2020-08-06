import React, { useState } from "react";
import { Modal, Button, Form, Input } from "antd";

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
                                name="name"
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
