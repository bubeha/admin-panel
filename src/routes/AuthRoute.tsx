import React from "react";
import { Redirect, Route, RouteComponentProps, RouteProps } from "react-router-dom";
import { getToken } from "../helpers/auth";
import { LOGIN_URL } from "../contstants/routes";

interface Props {
  path: string;
  renderComponent: React.ComponentType<RouteComponentProps> | React.ComponentType;
}

const PrivateRoute: React.FC<Props & RouteProps> = ({ path, renderComponent: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props: RouteComponentProps) =>
        getToken() ? <Component {...props} /> : <Redirect to={{ pathname: LOGIN_URL, state: { from: path } }} />
      }
    />
  );
};

export default PrivateRoute;
