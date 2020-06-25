import React from "react";
import { Switch, Route } from "react-router-dom";
import { HomeContainer, SignUpContainer, LoginContainer, ProfileContainer } from "../containers";

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/signup" component={SignUpContainer} />
      <Route exact path="/login" component={LoginContainer} />
      <Route exact path="/profile" component={ProfileContainer} />
    </Switch>
  );
};

export default RoutesView;
