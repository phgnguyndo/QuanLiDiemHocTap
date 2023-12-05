import {
  Form,
  InputGroup,
  ListGroup,
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
  const [showMenu, setShowMenu] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
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
  console.log(hocVien);
  const handleSearch = (text) => {
    const results = hocVien.map((hv) => hv.tenHV);

    // Giới hạn chỉ trả về 3 kết quả
    const limitedResults = results.slice(0, 3);
    setSearchResults(limitedResults);
    setShowResults(!!text && limitedResults.length > 0); // Hiển thị kết quả khi có nội dung và kết quả tồn tại
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
      <Menu.Item key="logout" onClick={()=>{nav("/khoa")}}>Khoa</Menu.Item>
      <Menu.Item key="bm" onClick={()=>{nav("/bomon")}}>Bộ môn</Menu.Item>
      <Menu.Item key="gv" onClick={()=>{nav("/giangvien")}}>Giảng viên</Menu.Item>
      <Menu.Item key="hp" onClick={()=>{nav("/hocphan")}}>Học phần</Menu.Item>
      <Menu.Item key="lhp" onClick={()=>{nav("/lophocphan")}}>Lớp học phần</Menu.Item>
      <Menu.Item key="dh" onClick={()=>{nav("/dayhoc")}}>Dạy học</Menu.Item>
      <Menu.Item key="ht" onClick={()=>{nav("/hoctap")}}>Học tập</Menu.Item>
    </Menu>
  );

  return (
    <Box fontFamily={"cursive"} display={"flex"} flexDirection= "column">
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
            <Nav.Link onClick={() => setShowMenu(!showMenu)}>Home</Nav.Link>

            <Dropdown overlay={menu1} placement="bottomRight" arrow>
              <Nav.Link>Features</Nav.Link>
            </Dropdown>
            <Nav.Link href="pricing">Pricing</Nav.Link>
          </Nav>
          <Form
            style={{ position: "relative", width: "200px", left: "-100px" }}
          >
            <InputGroup>
              <Form.Control
                type="search"
                placeholder="Search"
                value={searchText}
                onChange={(e) => {
                  const text = e.target.value;
                  setSearchText(text);
                  handleSearch(text);
                }}
              />
            </InputGroup>
            {/* <Button variant="outline-success">Search</Button> */}
            {showResults && (
              <ListGroup className="position-absolute" style={{ top: "58px" }}>
                {searchResults.map((result, index) => (
                  <ListGroup.Item key={index}>{result}</ListGroup.Item>
                ))}
              </ListGroup>
            )}
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

      {/* {showMenu && (
        <div
          style={{
            position: "fixed",
            top: "0px", // Điều chỉnh vị trí của menu
            left: "180px",
            width: "200px",
            height:"70vh", // Điều chỉnh kích thước của menu
            backgroundColor: "rgb(33,37,41)", // Màu nền của menu
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Hiệu ứng bóng đổ
            zIndex: "999",
            color:"gray",
            // opacity:"80%"
          }}
        >
          Quản lí điểm học viên */}
          {/* Thêm các tùy chọn của menu vào đây */}
          {/* <Nav className="flex-column">
            <Nav.Link href="/khoa">Khoa</Nav.Link>
            <Nav.Link href="/bomon">Bộ môn</Nav.Link>
          </Nav>
        </div>
      )} */}
    </Box>
  );
}

export default Header;
