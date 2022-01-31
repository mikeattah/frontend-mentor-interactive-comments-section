import React from "react";

function UserDetails(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.userLoggedIn}</p>
      <p>{props.time}</p>
    </div>
  );
}

export default UserDetails;
