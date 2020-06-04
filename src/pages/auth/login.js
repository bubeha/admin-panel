import React from 'react';
import {
  Card, Col, Row, Typography,
} from 'antd';
import LoginForm from '../../components/LoginForm';

const Login = () => (
  <Row align="middle" className="test">
    <Col span={24}>
      <Row justify="center">
        <Col span={4}>
          <Typography.Title level={4}>
            Login
          </Typography.Title>

          <Card>
            <LoginForm />
          </Card>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default Login;
