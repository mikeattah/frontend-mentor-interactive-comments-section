import React from "react";
import Avatar from "../avatar/avatar";
import UserDetails from "../UserDetails";

function User({ ...props }) {
  return (
    <div>
      <Avatar url={props.avatar} />
      <UserDetails name={props.name} userLoggedIn="" time={props.createdAt} />
    </div>
  );
}

export default User;
