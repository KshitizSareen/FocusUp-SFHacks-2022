import React from "react";
import { useLocation } from "react-router-dom";

const FocusPosts = () => {
  const location = useLocation();

  let focusGroupId = location.state.focusGroupId;
  let focusGroupName = location.state.focusGroupName;

  console.log(focusGroupId, focusGroupName);

  return (
    <div style={{ padding: "4rem" }}>
      <div>This is the focus up posts page</div>
    </div>
  );
};

export default FocusPosts;
