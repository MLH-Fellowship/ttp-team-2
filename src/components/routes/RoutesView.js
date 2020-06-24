import React from "react";
import { Switch, Route } from "react-router-dom";
import { HomeContainer } from "../containers";

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeContainer} />
    </Switch>
  );
};

export default RoutesView;