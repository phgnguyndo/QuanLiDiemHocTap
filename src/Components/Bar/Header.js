import { Form, InputGroup, ListGroup, Container, Navbar, Nav} from "react-bootstrap";
import { useEffect, useState } from "react";
import { Box, Image } from "@chakra-ui/react";
import logo from "../../Image/Logo.png";
import hocvienAPI from "../../api/hocvienAPI";

function Header() {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  // const [maHV, setMaHV]= useState("")
  const [hocVien, setHocVien]=useState([])


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

  return (
    <Box fontFamily={"cursive"}>
      <Navbar bg="dark" data-bs-theme="dark">
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
          <Form className="d-flex">
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
        </Container>
      </Navbar>
    </Box>
  );
}

export default Header;
