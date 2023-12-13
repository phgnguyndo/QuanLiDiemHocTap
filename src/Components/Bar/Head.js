import React, { useState } from "react";
// import './index.css';
import {
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserAddOutlined,
  LogoutOutlined,
  RadarChartOutlined,
  HeatMapOutlined,
  ReadOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Dropdown, Layout, Menu, Button, theme, notification } from "antd";
import { useNavigate } from "react-router-dom";
import StorageKeys from "../../constance/storage-key";
import SubMenu from "antd/es/menu/SubMenu";
const username = JSON.parse(localStorage.getItem(StorageKeys.USER));
const { Header, Sider, Content } = Layout;

const Head = ({ content }) => {
  const nav = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const handleLogout = () => {
    localStorage.clear();
    nav("/");
  };

  const isAdmin = username.role === "admin";

  const menu = (
    <Menu onClick={handleLogout}>
      <Menu.Item key="logout">Logout</Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          width="300px"
          defaultSelectedKeys={["1"]}
        >
          <Menu.Item key="0" icon={<UserOutlined />}>
            {username.code}
          </Menu.Item>
          <Menu.Item
            key="1"
            icon={<HomeOutlined />}
            onClick={() => {
              nav("/home");
            }}
          >
            Trang chủ
          </Menu.Item>
          <SubMenu key="-1" icon={<UserOutlined />} title="Cập nhật">
            <Menu.Item
              key="2"
              icon={<RadarChartOutlined />}
              onClick={() => {
                nav("/khoa");
              }}
            >
              Khoa
            </Menu.Item>
            <Menu.Item
              key="3"
              icon={<HeatMapOutlined />}
              onClick={() => {
                nav("/bomon");
              }}
            >
              Bộ môn
            </Menu.Item>
            <Menu.Item
              key="4"
              icon={<UserAddOutlined />}
              onClick={() => {
                nav("/giangvien");
              }}
            >
              Giảng viên
            </Menu.Item>
            <Menu.Item
              key="5"
              icon={<ReadOutlined />}
              onClick={() => {
                nav("/hocphan");
              }}
            >
              Học phần
            </Menu.Item>
            <Menu.Item
              key="6"
              icon={<ReadOutlined />}
              onClick={() => {
                nav("/lophocphan");
              }}
            >
              Lớp học phần
            </Menu.Item>
            <Menu.Item
              key="7"
              icon={<ReadOutlined />}
              onClick={() => {
                nav("/hocvien");
              }}
            >
              Học viên
            </Menu.Item>
            <Menu.Item key="8" icon={<ReadOutlined />}>
              Giảng dạy
            </Menu.Item>
          </SubMenu>
          <SubMenu key="-2" icon={<UserOutlined />} title="Thống kê">
            <Menu.Item
              key="10"
              icon={<RadarChartOutlined />}
              onClick={() => {
                nav("/tkhk");
              }}
            >
              Theo học kỳ
            </Menu.Item>
            <Menu.Item
              key="11"
              icon={<HeatMapOutlined />}
              onClick={() => {
                nav("/tkn");
              }}
            >
              Theo năm
            </Menu.Item>
          </SubMenu>
          {isAdmin && (
            <Menu.Item
              key="12"
              icon={<UserOutlined />}
              onClick={() => {
                nav("/taotaikhoan");
              }}
            >
              Tạo tài khoản
            </Menu.Item>
          )}
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          {/* <i style={{ position: "relative", left: "78%", fontSize: "15px" }}>
            {username.code}
          </i> */}
          <Dropdown overlay={menu} placement="bottomRight" arrow>
            <LogoutOutlined
              style={{
                position: "relative",
                left: "80%",
                fontSize: "20px",
                cursor: "pointer",
                color: "red",
                onClick: { handleLogout },
              }}
            />
          </Dropdown>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {content}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Head;
