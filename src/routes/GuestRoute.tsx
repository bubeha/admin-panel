import React from "react";
import { Redirect, Route, RouteComponentProps, RouteProps } from "react-router-dom";
import { getToken } from "../helpers/auth";
import { DASHBOARD_URL } from "../contstants/routes";

interface Props {
  path: string;
  renderComponent: React.ComponentType<RouteComponentProps> | React.ComponentType;
}

const GuestRoute: React.FC<Props & RouteProps> = ({ path, renderComponent: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props: RouteComponentProps) =>
        !getToken() ? <Component {...props} /> : <Redirect to={{ pathname: DASHBOARD_URL }} />
      }
    />
  );
};

export default GuestRoute;
