import React from "react";
import MTA from "../../Image/MTA.jpg";
import {
  Button,
  Col,
  Form,
  Select,
  Input,
  Row,
  Card,
  Typography,
  notification,
} from "antd";
import { Box } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { register } from "../../features/Auth/userSlice";
import { useNavigate } from "react-router";
const { Option } = Select;
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const Register = () => {
  const nav = useNavigate();
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    try {
      const dataToSend = {
        code: values.Username,
        password: values.password,
        role: values.role,
      };
      const action = register(dataToSend);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      notification.success({
        message: "Đăng ký thành công",
        duration: 3,
      });
      nav("/")
      console.log("New user", user);
    } catch (error) {
      console.log("Fail to register", error);
      notification.error({
        message: "Đăng ký thất bại, tài khoản đã tồn tại",
        duration: 3,
      });
    }
  };

  return (
    <Box
      bgImage={MTA}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
    >
      {/* {registrationStatus !==null && noticeRegister()} */}
      <Card style={{ maxWidth: 600, width: "100%" }}>
        <Form
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            residence: ["zhejiang", "hangzhou", "xihu"],
            prefix: "86",
          }}
          style={{
            maxWidth: 600,
          }}
          scrollToFirstError
        >
          <Typography.Title level={3} style={{ textAlign: "center" }}>
            Register
          </Typography.Title>
          <Form.Item
            name="Username"
            label="Username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
                hasFeedback
              >
                <Input.Password style={{ left: "4px", width: "150px" }} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("The passwords do not match!")
                      );
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <Form.Item
                name="role"
                label="Role"
                rules={[
                  {
                    required: true,
                    message: "Please select a role!",
                  },
                ]}
              >
                <Select
                  placeholder="Select a role"
                  style={{ left: "34px", width: "150px" }}
                >
                  <Option value="admin">admin</Option>
                  <Option value="user1">user1</Option>
                  <Option value="user2">user2</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Form.Item {...tailFormItemLayout}>
            <Button
              type="primary"
              htmlType="submit"
              style={{ position: "relative", left: "55px" }}
            >
              Register
            </Button>
            <Button
              style={{ position: "relative", top: "40px", left: "-100px" }}
              onClick={() => {
                nav("/");
              }}
            >
              You have an account? Login now
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Box>
  );
};
export default Register;
