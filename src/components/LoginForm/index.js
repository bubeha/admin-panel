import React from 'react';
import { Button, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

const LoginForm = ({ onFinish }) => (
  <Form
    layout="vertical"
    name="basic"
    onFinish={onFinish}
  >
    <Form.Item
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input prefix={<UserOutlined />} placeholder="Username or Email" />
    </Form.Item>

    <Form.Item
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password prefix={<LockOutlined />} placeholder="Password" />
    </Form.Item>

    <Form.Item>
      <Button type="primary" htmlType="submit" className="full-width-button">
        Submit
      </Button>
    </Form.Item>
  </Form>
);

LoginForm.propTypes = {
  onFinish: PropTypes.func.isRequired,
};

export default LoginForm;
