import React, { useState } from "react";
import { Modal, Button } from "antd";

export default function Signin() {
    const [modalVisible, setModalVisible] = useState(false);

    const handleModalVisible = (modalVisible) => {
        setModalVisible(modalVisible);
    };

    return (
        <>
            <Button type="button" onClick={() => handleModalVisible(true)}>
                Play Now
            </Button>
            <br />
            <br />
            <span>Note: Sign In or Sign Up to play</span>
            <Modal
                centered
                visible={modalVisible}
                onOk={() => setModalVisible(false)}
                onCancel={() => setModalVisible(false)}
                footer={null}
            >
                <div className="notifyLog">
                    <h2>Please Sign in or Sign up to play</h2>
                </div>
            </Modal>
        </>
    );
}
