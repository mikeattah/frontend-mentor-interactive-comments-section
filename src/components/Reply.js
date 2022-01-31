import React from "react";
import Avatar from "./Avatar";
import Button from "./Button";

function Reply(props) {
  return (
    <div>
      <Avatar avatar={props.avatar} />
      <textarea></textarea>
      <Button name="Reply" />
    </div>
  );
}

export default Reply;
