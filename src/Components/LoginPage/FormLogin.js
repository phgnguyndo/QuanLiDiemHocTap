import React from "react";
import { Button, Checkbox, Form, Input, Card, Typography, notification } from "antd";
import MTA from "../../Image/MTA.jpg";
import { Box } from "@chakra-ui/react";
// import axios from "axios";
import { useNavigate } from "react-router";
import { login } from "../../features/Auth/userSlice";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const FormLogin = () => {
  const dispatch=useDispatch()
  const onFinish = async (values) => {  
    try {
      const dataToSend = {
        username: values.username,
        password: values.password
      };
      console.log(dataToSend);

      const action = login(dataToSend);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      if(user.role){
        
      }
      nav("/home")
      // console.log("New user", user.role);
    } catch (error) {
      notification.error({
        message: "user name or password is invalid",
        duration: 3,
      });
      console.log("Fail to login", error);
    }
  }; 
  const nav= useNavigate()
  const handleSubmit = () => {
    alert(1);
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
      <Card style={{ maxWidth: 600, width: "100%" }}>
        <Typography.Title level={3} style={{ textAlign: "center" }}>
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
          onSubmit={handleSubmit}
        >
          <Form.Item
            label="Username:"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
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
                message: "Please input your password!",
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
            <Button
              type="primary"
              htmlType="submit"
              style={{ position: "relative", left: "60px" }}
            >
              Login
            </Button>
            <Button
              style={{ position: "relative", left: "-100px", top: "40px" }}
              onClick={()=>{nav("/register")}}
            >
              You don't have account? Register now
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Box>
  );
};

export default FormLogin;
