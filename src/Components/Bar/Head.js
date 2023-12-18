import React, { useEffect, useState } from "react";
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
import logout from "../../Image/logout.png";
import { Image } from "@chakra-ui/react";
import { Form, InputGroup } from "react-bootstrap";
import hocvienAPI from "../../api/hocvienAPI";
const user = JSON.parse(localStorage.getItem(StorageKeys.USER));
const { Header, Sider, Content } = Layout;

const Head = ({ content }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const isDaiDoi = user.role === "user1";
  const isAdmin = user.role === "admin";
  const isAdOrDd = user.role === "admin" || user.role === "user1";

  const nav = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [hocVien, setHocVien] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    searchHocVien();
  }, [searchText]);
  const searchHocVien = async () => {
    setHocVien(await hocvienAPI.get(searchText));
  };
  // const handleSearch = (e) => {
  //   searchHocVien()
  // };

  const handleLogout = () => {
    localStorage.clear();
    nav("/");
  };

  const menu = (
    <Menu onClick={handleLogout}>
      <Menu.Item key="logout">Đăng xuất</Menu.Item>
    </Menu>
  );
  const menu2 = (
    <Menu>
      {hocVien?.map((hv) => (
        <Menu.Item
          key={hv.id}
          onClick={() => {
            nav(`/HocVien/${hv.maHV}`);
          }}
        >
          {hv.tenHV}
        </Menu.Item>
      ))}
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
            {user.code}
          </Menu.Item>
          <Menu.Item
            key="1"
            icon={<HomeOutlined />}
            onClick={() => {
              if (user.role === "admin") {
                nav("/daidoi");
              } else if (user.role === "user1") {
                nav("/home");
              } else if (user.role === "user2") {
                nav(`/${user.maHV}`);
              }
            }}
          >
            Trang chủ
          </Menu.Item>
          {/* {isAdOrDd && (
            <> */}
              <SubMenu key="-1" icon={<UserOutlined />} title="Cập nhật">
                {/* {isAdmin && (
                  <> */}
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
                {/* </>
                )} */}
                {isDaiDoi && (
                  <>
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
                  </>
                )}
              </SubMenu>
            {/* </>
          )} */}
          {isDaiDoi && (
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
                  window.location.reload();
                }}
              >
                Theo năm
              </Menu.Item>
              <Menu.Item
                key="12"
                icon={<HeatMapOutlined />}
                onClick={() => {
                  nav("/tktl");
                }}
              >
                Điểm tích lũy
              </Menu.Item>
            </SubMenu>
          )}

          {/* </>
          // )} */}
          {isAdmin && (
            <>
              <Menu.Item
                key="12"
                icon={<UserOutlined />}
                onClick={() => {
                  nav("/taotaikhoan");
                }}
              >
                Tạo tài khoản
              </Menu.Item>
              <Menu.Item
                key="13"
                icon={<UserOutlined />}
                onClick={() => {
                  nav("/truyvet");
                }}
              >
                Lịch sử đăng nhập
              </Menu.Item>
            </>
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
            <Image
              position={"absolute"}
              // onClick={handleLogout}
              w={"30px"}
              top={"18px"}
              left="90%"
              src={logout}
            ></Image>
          </Dropdown>

          {/* <i style={{position:"relative", left:"81%"}}>Đăng xuất</i> */}

          {isAdOrDd && (
            <>
              <Form
                style={{
                  position: "relative",
                  top: "-51px",
                  left: "70%",
                  width: "200px",
                  // border: "1px solid gray",
                  borderRadius: "6px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                }}
              >
                <Dropdown overlay={menu2} placement="bottomRight" arrow>
                  <InputGroup>
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      value={searchText}
                      onChange={(e) => {
                        const text = e.target.value;
                        setSearchText(text);
                      }}
                    />
                  </InputGroup>
                </Dropdown>
              </Form>
            </>
          )}
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
