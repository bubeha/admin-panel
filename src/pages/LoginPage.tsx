import React from "react";
import { Store } from "rc-field-form/lib/interface";
import LoginForm from "../components/LoginForm";

const LoginPage: React.FC = () => {
  const submit = (values: Store) => {
    console.log(values);
  };

  return <LoginForm onFinish={submit} />;
};

export default LoginPage;
