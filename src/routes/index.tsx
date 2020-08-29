import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import AuthRoute from "./AuthRoute";
import DashboardPage from "../pages/DashboardPage";
import GuestRoute from "./GuestRoute";
import LoginPage from "../pages/LoginPage";
import { DASHBOARD_URL, LOGIN_URL } from "../contstants/routes";

const Routes: React.FC = () => (
  <Switch>
    <AuthRoute path={DASHBOARD_URL} renderComponent={DashboardPage} exact />
    <GuestRoute path={LOGIN_URL} renderComponent={LoginPage} />

    <Route component={NotFoundPage} />
  </Switch>
);

export default Routes;
