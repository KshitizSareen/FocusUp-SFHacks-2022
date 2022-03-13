import React from "react";
import { Typography, Paper, Box } from "@mui/material";
import { COLORS } from "../../colors/colors";

const FocusCard = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 250,
          height: 320
        }
      }}
    >
      <Paper elevation={3} sx={{ padding: "1rem" }}>
        <img src={props.image} alt={props.title} />
        <Typography
          style={{
            fontFamily: "MarkerFelt",
            color: COLORS.primary,
            marginTop: "1rem",
            textAlign: "center"
          }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {props.title}
        </Typography>
      </Paper>
    </Box>
  );
};

export default FocusCard;
