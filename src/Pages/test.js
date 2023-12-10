import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserAddOutlined,
  UserOutlined,
  RadarChartOutlined,
  HeatMapOutlined,
  ReadOutlined
} from "@ant-design/icons";
import { Dropdown, Layout, Menu, notification, theme } from "antd";
import { Button as AntdButton } from "antd";
import CardDaiDoi from "../Components/HomePage/CardDaiDoi";
import daidoiAPI from "../api/daidoiAPI";
import { useEffect } from "react";
import StorageKeys from "../constance/storage-key";
import { useNavigate } from "react-router";

const { Header, Sider, Content } = Layout;

const Test = () => {
    const nav=useNavigate()
  const [dsDaiDoi, setdsDaiDoi] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [collapsed, setCollapsed] = useState(false);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [quanSo, setQuanSo] = useState(0);
  const username = JSON.parse(localStorage.getItem(StorageKeys.USER));
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    fetchDaiDoi();
  }, []);
  const fetchDaiDoi = async () => {
    setdsDaiDoi(await daidoiAPI.getAll());
  };

  const handleLogout = () => {
    localStorage.clear();
    nav("/");
  };
  const menu = (
    <Menu onClick={handleLogout}>
      <Menu.Item key="logout">Logout</Menu.Item>
    </Menu>
  );
  const handleSubmit = async () => {
    try {
      const tenDaiDoi = initialRef.current.value;
      const daiDoiTruong = finalRef.current.value;
      // const quanSo = document.getElementById("quanSoInput").value;
      const formdata = new FormData();
      formdata.append("tenDaiDoi", tenDaiDoi);
      formdata.append("daiDoiTruong", daiDoiTruong);
      formdata.append("quanSo", quanSo);
      // formdata.append("file", imageDaiDoi);
      await daidoiAPI.create(formdata);
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Error submitting form:", error);
      notification.error({
        message: "Thêm thất bại, Đại đội đã tồn tại",
        duration: 3,
      });
    }
  };
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
              key: "0",
              icon: <HomeOutlined />,
              label: "Trang chủ",
              onClick:()=>{nav("/home")}
            },
            {
              key: "2",
              icon: <RadarChartOutlined />,
              label: "Khoa",
              onClick:()=>{nav("/khoa")}
            },
            {
              key: "3",
              icon: <HeatMapOutlined />,
              label: "Bộ môn",
              onClick:()=>{nav("/bomon")}
            },
            {
              key: "4",
              icon: <UserAddOutlined />,
              label: "Giảng viên",
              onClick:()=>{nav("/giangvien")}
            },
            {
              key: "5",
              icon: <ReadOutlined />,
              label: "Học phần",
              onClick:()=>{nav("/hocphan")}
            },
            {
              key: "6",
              icon: <ReadOutlined />,
              label: "aaaa",
              onClick:()=>{nav("/aaaa")}
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <AntdButton
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              border: "none",
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <i style={{ position: "relative", left: "78%", fontSize: "15px" }}>
            {username.code}
          </i>
          <Dropdown overlay={menu} placement="bottomRight" arrow>
          <UserOutlined
            style={{ position: "relative", left: "80%", fontSize: "20px", cursor:"pointer", onClick:{handleLogout} }}
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
          <Button
            variant="solid"
            bg="rgb(26,132,74)"
            color={"white"}
            left={"3%"}
            onClick={onOpen}
          >
            Thêm đại đội
          </Button>
          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Thêm đại đội</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Tên đại đội</FormLabel>
                  <Input
                    ref={initialRef}
                    type="text"
                    placeholder="tên đại đội"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Đại đội trưởng</FormLabel>
                  <Input
                    ref={finalRef}
                    type="text"
                    placeholder="đại đội trưởng"
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Quân số</FormLabel>
                  <Input
                    placeholder="quân số"
                    id="quanSoInput"
                    onChange={(e) => {
                      setQuanSo(parseInt(e.target.value));
                    }}
                  />
                </FormControl>
                {/* <FormControl mt={4}>
              <FormLabel>Ảnh</FormLabel>
              <Input
                type="file"
                name="file"
                onChange={(e) => {
                  setImageDaiDoi(e.target.files[0]);
                }}
              />
            </FormControl> */}
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          {dsDaiDoi?.map((item) => (
            <CardDaiDoi
              key={item.maDaiDoi}
              maDaiDoi={item.maDaiDoi}
              img={item.anhDaiDoi}
              name={item.tenDaiDoi}
              DaiDoiTruong={item.daiDoiTruong}
              QuanSo={item.quanSo}
              // id={++i}
            />
          ))}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Test;
