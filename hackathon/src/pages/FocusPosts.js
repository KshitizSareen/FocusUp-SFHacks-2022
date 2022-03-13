import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Row, Button, Container } from "react-bootstrap";
import styles from "./index.module.css";
import FocusPostsComponent from "../components/FocusPosts";

import samplePost from "../images/samplePost.jpg";

const FocusPosts = () => {

  useEffect(()=>{
    
  },[]);
  const history = useHistory();
  const location = useLocation();
  const focusGroupId = location.state.focusGroupId;
  const focusGroupName = location.state.focusGroupName;

  const goToCreatePost = () => {
    console.log("Button clicked");
    history.push({
      pathname: `/focusUp/createPost/${focusGroupName}/${focusGroupId}`,
      state: {
        focusGroupId: focusGroupId,
        focusGroupName: focusGroupName
      }
    });
  };

  return (
    <div>
      <Navbar title={`${focusGroupName} is Temporary`}></Navbar>
      <div style={{ padding: "4rem", marginRight: "4rem" }}>
        <Container>
          <Row>
            <Button className={styles.buttons} onClick={() => goToCreatePost()}>
              Create a Post and Share your Thoughts
            </Button>
          </Row>
          <Row>
            <div style={{ margin: "auto", width: "60%" }}>
              <FocusPostsComponent
                image={samplePost}
                description="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum."
              />
              <FocusPostsComponent
              image={null}
                description="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum."
              />
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default FocusPosts;
