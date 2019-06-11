import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "../auth/Login";
import Register from "../auth/Register";
import NotFound from "../layouts/NotFound";
import Rents from "../rents/Rents";
import AddForm from "../rents/rentForm/AddForm";
import PrivateRoute from "../routing/PrivateRoute";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/barreiras" component={Rents} />
      <Route path="/lem" component={Rents} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/new" component={AddForm} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
