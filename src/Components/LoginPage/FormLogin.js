import React, { useEffect } from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Card,
  Typography,
  notification,
} from "antd";
import MTA from "../../Image/MTA.jpg";
import { Box } from "@chakra-ui/react";
// import axios from "axios";
import { useNavigate } from "react-router";
import { login } from "../../features/Auth/userSlice";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import StorageKeys from "../../constance/storage-key";
import truyvetAPI from "../../api/truyvetAPI";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const FormLogin = () => {
  useEffect(() => {
    // Clear local storage khi component được tải
    localStorage.clear();
  }, []);
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    try {
      const dataToSend = {
        username: values.username,
        password: values.password,
      };
      // console.log(dataToSend);
      const action = login(dataToSend);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      
      const dataTruyVet={
        username: user.code,
        role: user.role,
        tgDangNhap: new Date().toISOString()
      }
      await truyvetAPI.create(dataTruyVet)
      if (user.role === "admin") {
        nav("/daidoi");
      } else if (user.role === "user1") {
        nav("/home");
      } else if (user.role === "user2") {
        nav(`/${user.maHV}`);
      }
      
      window.location.reload();
      // console.log("New user", user.role);
    } catch (error) {
      notification.error({
        message: "Tài khoản không tồn tại",
        duration: 3,
      });
      console.log("Fail to login", error);
    }
  };
  const nav = useNavigate();
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
      <Card style={{ maxWidth: 600, width: "100%", textAlign: "left" }}>
        <Typography.Title level={3} style={{ textAlign: "center" }}>
          Đăng nhập
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
            label="Tài khoản:"
            name="username"
            style={{ position: "relative", textAlign: "left" }}
            rules={[
              {
                required: true,
                message: "Vui lòng nhập tài khoản!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mật khẩu!",
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
            <Checkbox>Ghi nhớ</Checkbox>
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
              Đăng nhập
            </Button>
            <Button
              style={{ position: "relative", left: "-100px", top: "40px" }}
              onClick={() => {
                nav("/register");
              }}
            >
              Bạn chưa có tài khoản? Đăng kí ngay
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Box>
  );
};

export default FormLogin;
