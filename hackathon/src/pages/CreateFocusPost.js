import React, { useEffect } from "react";
import CreatePostForm from "../components/CreatePostForm";
import Navbar from "../components/Navbar";
import { useHistory, useLocation } from "react-router-dom";
import { Row, Col } from "react-bootstrap";


const CreateFocusPostPage = () => {
  const history = useHistory();
  const location = useLocation();
  const focusGroupId = location.state.focusGroupId;
  const focusGroupName = location.state.focusGroupName;

  return (
    <div>
      <Navbar title={`${focusGroupName} is Temporary`}></Navbar>
      <div style={{ marginTop: "8rem", width: "110%%" }}>
        <Row>
          <Col></Col>
          <Col>
            <CreatePostForm />
          </Col>
          <Col></Col>
        </Row>
      </div>
    </div>
  );
};

export default CreateFocusPostPage;
