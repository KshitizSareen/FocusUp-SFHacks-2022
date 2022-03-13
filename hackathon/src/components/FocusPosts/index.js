import React from "react";
import { Typography, Paper, Box } from "@mui/material";
import MainButton from "../MainButton";

import { Button } from "react-bootstrap";

const FocusPosts = (props) => {
  return (
    <div style={{ marginTop: "1rem" }}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: "50rem",
            height: "auto"
          }
        }}
      >
        <Paper elevation={3} sx={{ padding: "1rem" }}>
          <div>
            <img
              style={{
                width: "45rem",
                borderRadius: "1rem",
                marginLeft: "1.5rem"
              }}
              src={props.image}
            />
          </div>

          <div style={{ marginTop: "1rem" }}>
            {/* Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. */}
            {props.description}
          </div>

          <MainButton text="View Comments" focusGroupID={props.focusGroupID} />
        </Paper>
      </Box>
    </div>
  );
};

export default FocusPosts;
