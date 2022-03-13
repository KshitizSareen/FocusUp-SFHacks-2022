import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Paper, Box } from "@mui/material";
import { useLocation, useHistory } from "react-router-dom";
import axios from "axios";
import storage from "../../Firebase";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { ThreeBounce } from "better-react-spinkit";

const CreatePostForm = () => {
  const [uploaded_pic, setUploadedPic] = useState();
  const [nickName, setNickName] = useState();
  const [description, setDescription] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  const location = useLocation();
  const history = useHistory();
  const focusGroupId = location.state.focusGroupId;
  const focusGroupName = location.state.focusGroupName;

  const handlePhotoUpload = async (event) => {
    setUploadedPic(event.target.files[0]);
  };

  const handleFocusDescription = (event) => {
    setDescription(event.currentTarget.value);
  };

  const handleNickName = (event) => {
    setNickName(event.currentTarget.value);
  };

  const handleIsLoadedToggle = (value) => {
    setIsLoaded(value);
  };

  const handleSubmit = async (event) => {
    setIsLoaded(true);
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      const formData = new FormData();
      let urls = [];
      if (uploaded_pic != null) {
        const imageRef = ref(storage, uploaded_pic.name);
        await uploadBytes(imageRef, uploaded_pic);
        const downloadUrl = await getDownloadURL(imageRef);
        urls.push(downloadUrl);
        formData.append("imageFile", downloadUrl);
      }
      formData.append("nickName", nickName);
      formData.append("description", description);
      formData.append("focusGroupId", focusGroupId);

      if (focusGroupId != null) {
        axios
          .post("https://focusup-sfhacks2022.uc.r.appspot.com/api/createpost", {
            focusGroupID: focusGroupId,
            description: description,
            urls: urls
          })
          .then((message) => {
            event.preventDefault();
            console.log(message);
            setIsLoaded(false);

            history.push({
              pathname: `/focusUp/${focusGroupName}/${focusGroupId}`,
              state: {
                focusGroupId: focusGroupId,
                focusGroupName: focusGroupName
              }
            });
          })
          .catch((err) => {
            event.preventDefault();
            setIsLoaded(false);
            console.log(err);
          });
      }
    }
  };

  return (
    <div>
      <div style={{ margin: "auto", width: "10%" }}>
        {isLoaded && <ThreeBounce size={20} color="green" />}
      </div>

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

            <Button onClick={handleSubmit} variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Paper>
      </Box>
    </div>
  );
};

export default CreatePostForm;
