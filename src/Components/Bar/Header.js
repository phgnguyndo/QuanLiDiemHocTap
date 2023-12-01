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
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const nav=useNavigate()
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
    nav("/")
  };
  const menu = (
    <Menu onClick={handleLogout}>
      <Menu.Item key="logout">Logout</Menu.Item>
    </Menu>
  );
  return (
    <Box fontFamily={"cursive"}>
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        style={{
          height: "60px",
          paddingTop: "70px",
          position: "fixed",
          width: "100%",
          zIndex: 1000,
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
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="features">Features</Nav.Link>
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
    </Box>
  );
}

export default Header;
