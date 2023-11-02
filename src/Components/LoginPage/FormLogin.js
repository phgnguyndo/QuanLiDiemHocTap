import React from 'react';
import { Button, Checkbox, Form, Input, Card, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import MTA from '../../Image/MTA.jpg'
import { Box } from '@chakra-ui/react';
const onFinish = (values) => {
  console.log('Success:', values);
  
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};


const FormLogin = (props) => {

  const navigate = useNavigate();
  const handleLogin = () =>  {
      navigate("/home");
  };
  return (
          <Box
       display={"flex"}
       justifyContent={"center"}
       alignItems={"center"}
       height={"100vh"}
       bgImage={MTA}
       bgSize={"cover"}
      >
      <Card style={{ maxWidth: 600, width: '100%' }}>
        <Typography.Title level={3} style={{ textAlign: 'center' }}>
          Login
        </Typography.Title>

        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="User ID:"
            name="ID"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit" onClick = {handleLogin}>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
      </Box>
  );
};

export default FormLogin;
