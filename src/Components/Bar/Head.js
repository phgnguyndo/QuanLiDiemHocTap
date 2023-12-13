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
  UserOutlined
} from "@ant-design/icons";
import {
  Dropdown,
  Layout,
  Menu,
  Button,
  theme,
  notification,
} from "antd";
import { useNavigate } from "react-router-dom";
import StorageKeys from "../../constance/storage-key";
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
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "-1",
              icon:<UserOutlined/>,
              label: username.code,
            },
            {
              key: "0",
              icon: <HomeOutlined />,
              label: "Trang chủ",
              onClick: () => {
                nav("/home");
              },
            },
            {
              key: "2",
              icon: <RadarChartOutlined />,
              label: "Khoa",
              onClick: () => {
                nav("/khoa");
              },
            },
            {
              key: "3",
              icon: <HeatMapOutlined />,
              label: "Bộ môn",
              onClick: () => {
                nav("/bomon");
              },
            },
            {
              key: "4",
              icon: <UserAddOutlined />,
              label: "Giảng viên",
              onClick: () => {
                nav("/giangvien");
              },
            },
            {
              key: "5",
              icon: <ReadOutlined />,
              label: "Học phần",
              onClick: () => {
                nav("/hocphan");
              },
            },
            {
              key: "6",
              icon: <ReadOutlined />,
              label: "Lớp học phần",
              onClick: () => {
                nav("/lophocphan");
              },
            },
            {
              key: "7",
              icon: <ReadOutlined />,
              label: "Học viên",
              onClick: () => {
                nav("/hocvien");
              },
            },
            // {
            //   key: "8",
            //   icon: <ReadOutlined />,
            //   label: "Giảng dạy ",
            //   onClick: () => {
            //     nav("/giangday");
            //   },
            // },
          ]}
        />
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
                color:"red",
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
