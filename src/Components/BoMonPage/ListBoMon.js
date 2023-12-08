import {
    Button,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    FormControl,
    FormLabel,
    ModalFooter
  } from "@chakra-ui/react";
  import { Input } from "antd";
  import BoMon from "./BoMonComponent";
  import bomonAPI from "../../api/bomonAPI";
  import { useParams } from "react-router-dom";
  import React, { useState, useEffect } from "react";
  
  const ListBoMonTable = (props) => {
    const i = 0;
    const { idKhoa } = useParams();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [tenBoMon, setTenBoMon] = useState("");
    const [dsBoMon, setDsBoMon] = useState([]);
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
    
    useEffect(() => {
      fetchBoMon();
    }, []);
    const fetchBoMon = async () => {
      setDsBoMon(await bomonAPI.get(idKhoa));
    };

    console.log(idKhoa);
    
    const handleSubmit = async () => {
      try {
        const khoaId = idKhoa;
        const formdata = new FormData();
        formdata.append("tenBM", tenBoMon);
        formdata.append("khoaId", khoaId)
        await bomonAPI.create(formdata);
        onClose();
        window.location.reload();
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    };
  
    return (
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
          Danh sách bộ môn
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
            <ModalHeader>Thêm bộ môn</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl mt={4}>
                <FormLabel>Tên bộ môn</FormLabel>
                <Input ref={initialRef} type="text" placeholder="Tên bộ môn" 
                  onChange={(e) => {
                    setTenBoMon(e.target.value);
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
                  Bộ môn
                </Th>
                <Th w={"2%"} textAlign={"center"}></Th>
                <Th w={"2%"} textAlign={"center"}></Th>
              </Tr>
            </Thead>
            <br />
            {dsBoMon?.map((item, i) => (
              <BoMon key={item.maBM} stt = {i+1} tenBM={item.tenBM} maBM={item.maBM}/>
            ))}
            <br />
          </Table>
        </TableContainer>
      </div>
    );
  };
  
  export default ListBoMonTable;
  