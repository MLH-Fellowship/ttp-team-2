import React from "react";
import { Redirect } from "react-router-dom";

export default function ProfileView(props) {
  if (!props.isLoggedIn) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <h1>Username: {props.userInfo.username}</h1>
    </div>
  );
}
