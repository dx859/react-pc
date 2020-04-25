import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import classes from './index.less';
import apiFetch from '@/utils/apiFetch';
import { useDispatch } from 'react-redux';
import { userActions } from '@/reducers/user';
const Login = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      const response = (await apiFetch('/user/login', values)) as any;
      dispatch(userActions.setState({ ...response, isLogin: true }));
    } catch (error) {}
    setLoading(false);
  };

  return (
    <div className={classes.wrap}>
      <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: '请输入用户名!' }]}
        >
          <Input
            prefix={<UserOutlined className={classes.icon} />}
            placeholder="Username"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: '请输入密码!' }]}
        >
          <Input
            prefix={<LockOutlined className={classes.icon} />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" block htmlType="submit" loading={loading}>
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
