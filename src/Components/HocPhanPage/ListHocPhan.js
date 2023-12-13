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
  import bomonAPI from "../../api/bomonAPI";
  import hocPhanAPI from "../../api/hocphanAPI.js"
import HocPhanComponent from "./HocPhanComponent.js";

  const ListHocPhanTable = (props) => {
    const i = 0;

    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
  
    const [maHP, setMaHP] = useState("");
    const [tenHocPhan, setTenHP] = useState("");
    const [hocKy, setHocKy] = useState("");
    const [soTC, setTinChi] = useState("");
    const [soTiet, setSotiet] = useState("");
    const [boMonId, setBomonID] = useState("");
    const [dsBomon, setDsBomon] = useState([]);
  
    
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
      
      useEffect(() => {
        fetchDsBoMon();
      });
      const fetchDsBoMon = async () => {
        setDsBomon(await bomonAPI.getAll());
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
              <Select
                placeholder="Tên bộ môn"
                id="boMonInput"
                onChange={(e) => {
                  setBomonID(e.target.value);
                }}
                > 
                {dsBomon.map((item,index) => (
                  <option key={index} value={item.maBM}>
                    {item.tenBM}
                  </option>
                ))}
              </Select>
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
          <Table variant='striped' size="sm">
            <Thead>
              <Tr bg={"rgb(182, 187, 196)"}>
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
                <Th w={"5%"} textAlign={"center"}>Sửa</Th>
                <Th w={"5%"} textAlign={"center"}>Xóa</Th>
              </Tr>
            </Thead>
            <Tbody>
                {dsHP.map((item,i) => (
                <HocPhanComponent
                maHP={item.maHocPhan}
                STT={i+1}
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