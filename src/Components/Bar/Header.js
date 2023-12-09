import {
  Form,
  InputGroup,
  Container,
  Navbar,
  Nav,
} from "react-bootstrap";
import { Dropdown, Menu } from "antd";
import { useEffect, useState } from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import logo from "../../Image/Logo.png";
import logoUser from "../../Image/logoUser2.png";
import hocvienAPI from "../../api/hocvienAPI";
import StorageKeys from "../../constance/storage-key";
import { useNavigate } from "react-router-dom";

function Header() {
  const [searchText, setSearchText] = useState("");
  const nav = useNavigate();
  // const [maHV, setMaHV]= useState("")
  const username = JSON.parse(localStorage.getItem(StorageKeys.USER));
  console.log(username.name);
  const [hocVien, setHocVien] = useState([]);
  useEffect(() => {
    searchHocVien();
  }, []);
  const searchHocVien = async () => {
    setHocVien(await hocvienAPI.get(searchText));
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
  const menu1 = (
    <Menu>
      <Menu.Item
        key="logout"
        onClick={() => {
          nav("/khoa");
        }}
      >
        Khoa
      </Menu.Item>
      <Menu.Item
        key="bm"
        onClick={() => {
          nav("/bomon");
        }}
      >
        Bộ môn
      </Menu.Item>
      <Menu.Item
        key="gv"
        onClick={() => {
          nav("/giangvien");
        }}
      >
        Giảng viên
      </Menu.Item>
      <Menu.Item
        key="hp"
        onClick={() => {
          nav("/hocphan");
        }}
      >
        Học phần
      </Menu.Item>
      <Menu.Item
        key="lhp"
        onClick={() => {
          nav("/lophocphan");
        }}
      >
        Lớp học phần
      </Menu.Item>
      <Menu.Item
        key="dh"
        onClick={() => {
          nav("/dayhoc");
        }}
      >
        Dạy học
      </Menu.Item>
      <Menu.Item
        key="ht"
        onClick={() => {
          nav("/hoctap");
        }}
      >
        Học tập
      </Menu.Item>
    </Menu>
  );
  const menu2 = (
    <Menu>
      {hocVien.map((hv) => (
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
    <Box display={"flex"} flexDirection="column">
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        style={{
          height: "60px",
          paddingTop: "70px",
          position: "fixed",
          width: "100%",
          zIndex: 998,
          top: "0",
        }}
      >
        <Container>
          <Image
            src={logo}
            width={"60px"}
            height={"60px"}
            borderRadius={"100%"}
            marginRight={"10px"}
          ></Image>
          <Nav className="me-auto">
            <Nav.Link href="/home">Trang chủ</Nav.Link>

            <Dropdown overlay={menu1} placement="bottomRight" arrow>
              <Nav.Link>Features</Nav.Link>
            </Dropdown>
            <Nav.Link href="pricing">Pricing</Nav.Link>
          </Nav>
          <Form
            style={{ position: "relative", width: "200px", left: "-100px" }}
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
                    // handleSearch(text);
                  }}
                />
              </InputGroup>
            </Dropdown>
          </Form>

          <Text position={"relative"} left={"-10px"} top={"7px"} color={"gray"}>
            {username.code}
          </Text>
          <Dropdown overlay={menu} placement="bottomRight" arrow>
            <Image
              src={logoUser}
              width={"30px"}
              height={"30px"}
              borderRadius={"100%"}
              marginRight={"10px"}
            >
              {/* <DownOutlined /> */}
            </Image>
          </Dropdown>
        </Container>
      </Navbar>

      <div style={{ height: "80px" }}></div>
    </Box>
  );
}

export default Header;
