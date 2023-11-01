import { Button, Form} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Box, Image } from '@chakra-ui/react'
import logo from '../Image/Logo.png'
function ColorSchemesExample() {
  return (
    <Box fontFamily={"cursive"}>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          {/* <Navbar.Brand href="#home"><Image src='../Image/Logo.png'></Image></Navbar.Brand> */}
          <Image src={logo} width={"60px"} height={"60px"} borderRadius={"100%"} marginRight={"10px"}></Image>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
        </Container>
      </Navbar>
      
    </Box>
  );
}

export default ColorSchemesExample;