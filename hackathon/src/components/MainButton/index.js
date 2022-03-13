import React, { useState } from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";
// import ContactFormModal from "../ContactFormModal";
const MainButton = (props) => {
  const [show, setShow] = useState(false);
  const [commentInput, setCommentInput] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const shareComment = () => {
    console.log("comment is ", commentInput);
    handleClose();
  };

  const handleChange = (e) => {
    e.preventDefault();
    setCommentInput(e.target.value);
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        {props.text}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Comments</Modal.Title>
        </Modal.Header>
        <Modal.Body>Comment 1 here</Modal.Body>
        <hr />
        <Modal.Body>Comment 2 here</Modal.Body>
        <hr />
        <Modal.Body>Comment 3 here</Modal.Body>

        <Modal.Footer>
          <Form.Control
            type="text"
            placeholder="Write your comment!"
            onChange={handleChange}
          />
          <Button onClick={() => shareComment()}>Share</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MainButton;
