import React from 'react';
import { Form, Button } from 'antd';
export default () => {
  return (
    <Form>
      <Form.Item label="用户名"></Form.Item>
      <Form.Item label="密码"></Form.Item>
      <div>
        <Button>取消</Button>
        <Button>登录</Button>
      </div>
    </Form>
  );
};
