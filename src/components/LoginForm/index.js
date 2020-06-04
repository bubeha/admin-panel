import React from 'react';
import { Button, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

const LoginForm = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  return (
    <Form
      layout="vertical"
      name="basic"
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input prefix={<UserOutlined />} placeholder="Username Or Email" />
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
};

export default LoginForm;
