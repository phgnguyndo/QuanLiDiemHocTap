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
    ModalFooter,
    Select,
  } from "@chakra-ui/react";
  import { Input } from "antd";
  import { useParams } from "react-router-dom";
  import React, { useState, useEffect } from "react";
  import hocPhanAPI from "../../api/hocphanAPI.js"
import HocPhanComponent from "./HocPhanComponent.js";

  const ListHocPhanTable = (props) => {
    
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
  
    const [maHP, setMaHP] = useState("");
    const [tenHocPhan, setTenHP] = useState("");
    const [hocKy, setHocKy] = useState("");
    const [soTC, setTinChi] = useState("");
    const [soTiet, setSotiet] = useState("");
    const [boMonId, setBomon] = useState("");
  
    
    const handleSubmit = async () => {
        try {
          const formdata = {
            tenHocPhan,
            soTiet,
            soTC,
            hocKy,
            boMonId,
          };
          await hocPhanAPI.create(formdata);
          onClose();
          window.location.reload();
        } catch (error) {
          console.error("Error submitting form:", error);
        }
      };
      
      const [dsHP, setdsHP] = useState([]);
      useEffect(() => {
        fetchDsHP();
      }, []);
      const fetchDsHP = async () => {
        setdsHP(await hocPhanAPI.getAll());
      };
      console.log(dsHP);



  
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
        <h1 style={{ color: "GrayText" }}>Bộ môn ... </h1>
        <div
          style={{
            fontSize: "50px",
            fontFamily: "inherit",
            fontWeight: "bold",
            marginBottom: "80px",
            color: "rgb(91, 138, 114)",
          }}
        >
          Danh sách các học phần
        </div>
        
         <Button
            position={"relative"}
            top={"-40px"}
            left={"-513px"}
            variant="solid"
            bg="rgb(26,132,74)"
            color={"white"}
            onClick={onOpen}
            // position={"absolute"}
            >
            Thêm học phần
        </Button>
        <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Thêm Học phần</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Mã học phần</FormLabel>
              <Input
                ref={initialRef}
                type="text"
                placeholder="Mã HP"
                onChange={(e) => {
                  setMaHP(e.target.value);
                }}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Tên học phần</FormLabel>
              <Input
                ref={finalRef}
                type="text"
                placeholder="Tên học phần"
                onChange={(e) => {
                  setTenHP(e.target.value);
                }}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Nằm ở học kỳ thứ</FormLabel>
              <Input
                ref={finalRef}
                type="text"
                placeholder="Học kỳ"
                onChange={(e) => {
                  setHocKy(e.target.value);
                }}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Số tiết</FormLabel>
              <Input
                ref={finalRef}
                type="text"
                placeholder="Số tiết"
                onChange={(e) => {
                  setSotiet(e.target.value);
                }}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Số tín chỉ</FormLabel>
              <Input
                placeholder="Số tín chỉ"
                ref={finalRef}
                type="text"
                onChange={(e) => {
                  setTinChi(e.target.value);
                }}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Thuộc bộ môn</FormLabel>
              <Input
                ref={finalRef}
                type="text"
                placeholder="Mã bộ môn"
                onChange={(e) => {
                  setBomon(e.target.value);
                }}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Lưu
            </Button>
            <Button onClick={onClose}>Xóa</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>




        <TableContainer w={"150vh"}>
          <Table variant='striped' colorScheme='teal' size="sm">
            <Thead>
              <Tr bg={"rgb(157, 173, 127)"}>
                <Th w={"5%"} textAlign={"center"}>
                  Mã HP
                </Th>
                <Th w={"10%"} textAlign={"center"}>
                  Tên học phần
                </Th>
                <Th w={"5%"} textAlign={"center"}>
                  Số tiết
                </Th>
                <Th w={"10%"} textAlign={"center"}>
                  Số tín chỉ
                </Th>
                <Th w={"10%"} textAlign={"center"}>
                  Thuộc học kỳ
                </Th>
                <Th w={"5%"}></Th>
                <Th w={"5%"}></Th>
              </Tr>
            </Thead>
            <Tbody>
                {dsHP.map((item) => (
                <HocPhanComponent
                key={item.maHocPhan}
                maHP={item.maHocPhan}
                tenHP={item.tenHocPhan}
                soTC={item.soTC}
                hocKy={item.hocKy}
                soTiet={item.soTiet}
                boMonId={item.boMonId}
                />
                ))}
          </Tbody>
          </Table>
        </TableContainer>
      </div>
    );
  };
  
  export default ListHocPhanTable;