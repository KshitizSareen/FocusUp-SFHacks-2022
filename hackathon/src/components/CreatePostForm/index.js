import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Paper, Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import axios from "axios";

const CreatePostForm = () => {
  const [uploaded_pic, setUploadedPic] = useState();
  const [nickName, setNickName] = useState();
  const [description, setDescription] = useState();

  const location = useLocation();
  const focusGroupId = location.state.focusGroupId;
  const focusGroupName = location.state.focusGroupName;

  const handlePhotoUpload = (event) => {
    setUploadedPic(event.target.files[0]);
    console.log(event.target.files[0]);
  };

  const handleFocusDescription = (event) => {
    setDescription(event.currentTarget.value);
  };

  const handleNickName = (event) => {
    setNickName(event.currentTarget.value);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      const formData = new FormData();
      formData.append("image", uploaded_pic);
      formData.append("nickName", nickName);
      formData.append("description", description);
      formData.append("focusGroupId", focusGroupId);

      const config = {
        headers: {
          "content-type": "multipart/form-data"
        }
      };

      //   axios
      //     .post(
      //       "https://photobook-server-khushboo1028.herokuapp.com/upload",
      //       formData,
      //       config
      //     )
      //     .then((response) => {
      //       console.log(response);

      //       alert("Succesfully uploaded image");
      //     })
      //     .catch((error) => {
      //       alert(error);
      //       console.log(error);
      //     });

      event.preventDefault();
    }
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 800,
            height: "auto"
          }
        }}
      >
        <Paper elevation={3} sx={{ padding: "1rem" }}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nick Name</Form.Label>
              <Form.Control
                onChange={handleNickName}
                type="text"
                placeholder="Anonymous..."
              />
            </Form.Group>

            <Form.Label>Upload an image</Form.Label>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Control
                onChange={handlePhotoUpload}
                type="file"
                accept="image/gif, image/jpeg, image/png"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
              <Form.Label>Share your thoughts!</Form.Label>
              <textarea
                onChange={handleFocusDescription}
                class="form-control"
                rows="5"
                id="comment"
              ></textarea>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Paper>
      </Box>
    </div>
  );
};

export default CreatePostForm;
