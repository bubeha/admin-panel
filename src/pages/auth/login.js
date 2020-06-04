import React, { useContext } from 'react';
import {
  Card, Col, Row, Typography,
} from 'antd';
import { CurrentUserContext } from '../../contexts/currentUser';
import LoginForm from '../../components/LoginForm';

const Login = () => {
  const [, setCurrentUser] = useContext(CurrentUserContext);

  const submit = (values) => {
    setCurrentUser({
      name: 'Admin Admin',
      ...values,
    });
  };

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
