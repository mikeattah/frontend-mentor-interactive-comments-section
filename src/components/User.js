import React from "react";
import Avatar from "./Avatar";
import UserDetails from "./UserDetails";

function User({ ...props }) {
  return (
    <div>
      <Avatar url={props.avatar} />
      <UserDetails name={props.name} userLoggedIn="" time={props.createdAt} />
    </div>
  );
}

export default User;
