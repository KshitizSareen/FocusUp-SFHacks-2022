import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Paper, Box } from "@mui/material";
import Navbar from "../components/Navbar";
import axios from "axios";

const { Form, Button } = require("react-bootstrap");

const Chat = (props) => {
  const location = useLocation();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  let focusGroupID = location.state.focusGroupId;
  let focusGroupName = location.state.focusGroupName;

  console.log(focusGroupID);

  useEffect(() => {
    getMessages();
    let interval = setInterval(() => {
      getMessages();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const getMessages = () => {
    axios
      .get(
        `https://backendservice-dot-focusup-sfhacks2022.uc.r.appspot.com/api/getchat/${focusGroupID}`
      )
      .then((res) => {
        setMessages(res.data);
      });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    console.log(focusGroupID);
    axios
      .post(
        "https://backendservice-dot-focusup-sfhacks2022.uc.r.appspot.com/api/sendchat/" +
          focusGroupID,
        {
          chat: message
        }
      )
      .then((result) => {
        console.log(result);
        setMessage("");
        getMessages();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Navbar title={`${focusGroupName} - let's chat`}></Navbar>
      <div style={{ margin: "auto", width: "50%" }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 800,
              height: "auto",
              marginTop: "4rem"
            }
          }}
        >
          <Paper elevation={3} sx={{ padding: "1rem" }}>
            <div>
              {messages.map((message) => {
                return (
                  <div>
                    <p>{message}</p>
                    <hr />
                  </div>
                );
              })}
            </div>

            <Form.Control
              type="text"
              placeholder="Write your message"
              onChange={handleChange}
              value={message}
            />

            <Button
              style={{ marginTop: "2rem", width: "48rem" }}
              onClick={() => sendMessage()}
              variant="primary"
              type="submit"
            >
              Send
            </Button>
          </Paper>
        </Box>
      </div>
    </div>
  );
};

export default Chat;
