import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "../auth/Login";
import Register from "../auth/Register";
import NotFound from "../layouts/NotFound";
import Rents from "../rents/Rents";
import PrivateRoute from "../routing/PrivateRoute";

const Routes = () => {
  return (
    <section className="container">
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/rents" component={Rents} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </section>
  );
};

export default Routes;
