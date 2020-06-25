import React from "react";

export default function ProfileView(props) {
  return (
    <div>
      <h1>Username: {props.userInfo.username}</h1>
    </div>
  );
}
