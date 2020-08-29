import React from "react";
import { Store } from "rc-field-form/lib/interface";
import LoginForm from "../components/LoginForm";
import GuestLayout from "../layouts/GuestLayout";

const LoginPage: React.FC = () => {
  const submit = (values: Store) => {
    console.log(values);
  };

  return (
    <GuestLayout>
      <LoginForm onFinish={submit} />
    </GuestLayout>
  );
};

export default LoginPage;
