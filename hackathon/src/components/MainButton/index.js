import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";

const MainButton = (props) => {
  const [show, setShow] = useState(false);
  const [commentInput, setCommentInput] = useState("");
  const [comments, setComments] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let postID = props.id;

  // //get comments
  // useEffect(() => {
  //   console.log("i am here");
  //   axios
  //     .get(
  //       `https://focusup-sfhacks2022.uc.r.appspot.com/api/getpost/${postID}`
  //     )
  //     .then((data) => {
  //       console.log(data);
  //       setComments(data.data);
  //     });
  // }, []);

  const shareComment = (event) => {
    console.log("comment is ", commentInput);

    // event.preventDefault();

    let url = `https://focusup-sfhacks2022.uc.r.appspot.com/api/createcomment/${postID}`;

    axios
      .post(url, {
        comment: commentInput
      })
      .then((message) => {
        console.log(message);
        handleClose();
      })
      .catch((err) => {
        console.log(err);
      });
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
        {comments.map((e) => {
          return (
            <div>
              <Modal.Body>{e.comment}</Modal.Body>
              <hr />
            </div>
          );
        })}
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
