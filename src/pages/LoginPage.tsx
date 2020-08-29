import React from "react";
import { Store } from "rc-field-form/lib/interface";
import { inject } from "mobx-react";
import PropTypes from "prop-types";
import { History } from "history";
import LoginForm from "../components/LoginForm";
import GuestLayout from "../layouts/GuestLayout";
import { IAppStore } from "../stores";
import { DASHBOARD_URL } from "../contstants/routes";

interface LoginValues {
  username: string;
  password: string;
}

interface Props {
  history: History;
  store?: IAppStore;
}

const LoginPage: React.FC<Props> = ({ history, store }) => {
  const submit = (values: Store | LoginValues) => {
    store?.authStore.login(values.username, values.password).finally(() => {
      history.push(DASHBOARD_URL);
    });
  };

  return (
    <GuestLayout>
      <LoginForm onFinish={submit} />
    </GuestLayout>
  );
};

LoginPage.propTypes = {
  history: PropTypes.any,
  store: PropTypes.any,
};

export default inject("store")(LoginPage);
