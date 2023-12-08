import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  ModalFooter,
  Box,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
} from "@chakra-ui/react";
import { Input } from "antd";
import khoaAPI from "../../api/khoaAPI";
import KhoaComponent from "./KhoaComponent";
import React, { useState, useEffect } from "react";

const ListKhoaTable = (props) => {
  var i = 0;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tenKhoa, setTenKhoa] = useState("");
  const [dsKhoa, setDsKhoa] = useState([]);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  useEffect(() => {
    fetchKhoa();
  }, []);
  const fetchKhoa = async () => {
    setDsKhoa(await khoaAPI.getAll());
  };

  const handleSubmit = async () => {
    try {
      // const tenKhoa = initialRef.current.value;
      const formdata = new FormData();
      formdata.append("tenKhoa", tenKhoa);
      await khoaAPI.create(formdata);
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    // <Box position={"relative"} w={"75%"} left={"12.5%"}>
    //   <Box
    //     w={"100%"}
    //     height={"50px"}
    //     //    bg={"brown"}
    //     margin={"10px 0px 50px 0px"}
    //     fontWeight={"600"}
    //     fontSize={"35px"}
    //     textAlign={"center"}
    //     alignItems={"center"}
    //     color={"brown"}
    //     fontFamily={"cursive"}
    //   >
    //     Danh sách các khoa
    //   </Box>
    //   {/* <ButtonGroup spacing="2"> */}
    //   <Button
    //     variant="solid"
    //     bg="rgb(26,132,74)"
    //     color={"white"}
    //     left={"2%"}
    //     onClick={onOpen}
    //   >
    //     Thêm khoa
    //   </Button>
    //   <Modal
    //     initialFocusRef={initialRef}
    //     finalFocusRef={finalRef}
    //     isOpen={isOpen}
    //     onClose={onClose}
    //   >
    //     <ModalOverlay />
    //     <ModalContent>
    //       <ModalHeader>Thêm khoa</ModalHeader>
    //       <ModalCloseButton />
    //       <ModalBody pb={6}>
    //         {/* <FormControl>
    //           <FormLabel>Mã đại đội</FormLabel>
    //           <Input ref={initialRef} placeholder="Mã đại đội" />
    //         </FormControl> */}

    //         <FormControl>
    //           <FormLabel>Tên khoa</FormLabel>
    //           <Input
    //             type="text"
    //             placeholder="Tên khoa"
    //             onChange={(e) => 
    //               setTenKhoa(e.target.value)}
    //           ></Input>
    //         </FormControl>
    //       </ModalBody>
    //       <ModalFooter>
    //         <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
    //           Lưu
    //         </Button>
    //         <Button onClick={onClose}>Cancel</Button>
    //       </ModalFooter>
    //     </ModalContent>
    //   </Modal>
    //   <br />
    //   {dsKhoa?.map((item) => (
    //     <KhoaComponent
    //       key={item.maKhoa}
    //       maKhoa={item.maKhoa}
    //       tenKhoa={item.tenKhoa}
    //     />
    //   ))}
    //   <br />
    // </Box>

    <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "40vh",
        }}
      >
        <h1 style={{color:"GrayText"}}>Khoa {}</h1>
        <div
          style={{
            fontSize: "50px",
            fontFamily: "inherit",
            fontWeight: "bold",
            marginBottom: "80px",
            color: "rgb(91, 138, 114)",
          }}
        >
          Danh sách Khoa
        </div>
        <Button
          marginTop={"30px"}
          marginBottom={"70px"}
          variant="solid"
          bg="rgb(26,132,74)"
          color={"white"}
          left={"170px"}
          onClick={onOpen}
          position={"absolute"}
        >
          Thêm
        </Button>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Thêm khoa</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl mt={4}>
                <FormLabel>Tên khoa</FormLabel>
                <Input ref={initialRef} type="text" placeholder="Tên khoa" 
                  onChange={(e) => {
                    setTenKhoa(e.target.value);
                  }}
                />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
                Lưu
              </Button>
              <Button onClick={onClose}>Hủy</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <TableContainer w={"80vh"}>
          <Table variant="simple" size="sm">
            {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
            <Thead>
              <Tr bg={"rgb(157, 173, 127)"}>
                <Th w={"5%"} textAlign={"center"}>
                  STT
                </Th>
                <Th w={"10%"} textAlign={"center"}>
                  Khoa
                </Th>
                <Th w={"2%"} textAlign={"center"}></Th>
                <Th w={"2%"} textAlign={"center"}></Th>
              </Tr>
            </Thead>
            <br />
            {dsKhoa?.map((item, i) => (
              <KhoaComponent key={item.maKhoa} stt = {i+1} tenKhoa={item.tenKhoa} maKhoa={item.maKhoa}/>
            ))}
            <br />
          </Table>
        </TableContainer>
      </div>

    // <div
    //   style={{
    //     display: "flex",
    //     flexDirection: "column",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     minHeight: "40vh",
    //   }}
    // >
    //   <div
    //     style={{
    //       fontSize: "50px",
    //       fontFamily: "inherit",
    //       fontWeight: "bold",
    //       marginBottom: "80px",
    //       color: "rgb(91, 138, 114)",
    //     }}
    //   >
    //     Danh sách khoa
    //   </div>
    //   <Button
    //     marginTop={"30px"}
    //     marginBottom={"70px"}
    //     variant="solid"
    //     bg="rgb(26,132,74)"
    //     color={"white"}
    //     left={"170px"}
    //     onClick={onOpen}
    //     position={"absolute"}
    //   >
    //     Thêm
    //   </Button>
    //   <Modal
    //     initialFocusRef={initialRef}
    //     finalFocusRef={finalRef}
    //     isOpen={isOpen}
    //     onClose={onClose}
    //   >
    //     <ModalOverlay />
    //     <ModalContent>
    //       <ModalHeader>Thêm khoa</ModalHeader>
    //       <ModalCloseButton />
    //       <ModalBody pb={6}>
    //         <FormControl mt={4}>
    //           <FormLabel>Tên khoa</FormLabel>
    //           <Input ref={initialRef} type="text" placeholder="Tên khoa"
    //             onChange={(e) => {
    //               setTenKhoa(e.target.value);
    //             }}
    //           />
    //         </FormControl>
    //       </ModalBody>
    //       <ModalFooter>
    //         <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
    //           Lưu
    //         </Button>
    //         <Button onClick={onClose}>Hủy</Button>
    //       </ModalFooter>
    //     </ModalContent>
    //   </Modal>
    //   <TableContainer w={"80vh"}>
    //     <Table variant="simple" size="sm">
    //       {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
    //       <Thead>
    //         <Tr bg={"rgb(157, 173, 127)"}>
    //           <Th w={"5%"} textAlign={"center"}>
    //             STT
    //           </Th>
    //           <Th w={"10%"} textAlign={"center"}>
    //             Khoa
    //           </Th>
    //           <Th w={"2%"} textAlign={"center"}></Th>
    //           <Th w={"2%"} textAlign={"center"}></Th>
    //         </Tr>
    //       </Thead>
    //       <br />
    //       {dsKhoa?.map((item) => (
    //         <Khoa key={++i} tenKhoa={item.tenKhoa} />
    //       ))}
    //       <br />
    //     </Table>
    //   </TableContainer>
    // </div>
  );
};

export default ListKhoaTable;
