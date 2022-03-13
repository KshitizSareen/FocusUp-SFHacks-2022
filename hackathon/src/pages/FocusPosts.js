import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Row, Button, Container } from "react-bootstrap";
import styles from "./index.module.css";
import FocusPostsComponent from "../components/FocusPosts";
import axios from "axios";
import samplePost from "../images/samplePost.jpg";

const FocusPosts = () => {
  const [posts, setPosts] = useState([]);
  const history = useHistory();
  const location = useLocation();
  const focusGroupId = location.state.focusGroupId;
  const focusGroupName = location.state.focusGroupName;

  useEffect(() => {
    axios
      .get(
        "https://backendservice-dot-focusup-sfhacks2022.uc.r.appspot.com/api/getpost/" +
          focusGroupId
      )
      .then((data) => {
        console.log(data.data);
        setPosts(data.data);
      });
  }, []);

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
              {posts.map((post) => {
                return (
                  <FocusPostsComponent
                    image={post.media[0]}
                    description={post.description}
                    id={post.id}
                    comments={post.comments}
                    focusGroupId={focusGroupId}
                  />
                );
              })}
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default FocusPosts;
