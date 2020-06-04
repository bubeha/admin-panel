import React, { useContext } from 'react';
import {
  Card, Col, Row, Typography,
} from 'antd';
import { Redirect } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/currentUser';
import LoginForm from '../../components/LoginForm';
import useLocalStorage from '../../hooks/useLocalStorage';

const Login = () => {
  const [user, setCurrentUser] = useContext(CurrentUserContext);
  const [, setLocalStorage] = useLocalStorage('user');

  const submit = (values) => {
    const currentUser = {
      name: 'Admin Admin',
      ...values,
    };

    setLocalStorage(JSON.stringify(currentUser));
    setCurrentUser(currentUser);
  };

  if (user) {
    return (
      <Redirect to={{
        pathname: '/',
      }}
      />
    );
  }

  return (
    <Row align="middle" className="test">
      <Col span={24}>
        <Row justify="center">
          <Col span={4}>
            <Typography.Title level={4}>
              Login
            </Typography.Title>

            <Card>
              <LoginForm onFinish={submit} />
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Login;
