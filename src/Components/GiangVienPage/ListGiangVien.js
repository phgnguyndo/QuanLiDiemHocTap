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
//   import HocVien from "./HocVienComponent";
  import { useParams } from "react-router-dom";
  import React, { useState, useEffect } from "react";
import GiangVienComponent from "./GiangVienComponent";
import giangVienAPI from "../../api/giangVienAPI";
import bomonAPI from "../../api/bomonAPI";
  const ListGiangVienTable = (props) => {
    const capBacData = [
      "Đại tá",
      "Thượng tá",
      "Trung tá",
      "Thiếu tá",
      "Đại úy",
      "Thượng úy",
      "Trung úy",
      "Thiếu úy"
    ];
    
  
    const { idLop } = useParams();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
  
    const [maGV, setMaGV] = useState("");
    const [tenGV, setTenGV] = useState("");
    const [sdt, setSdt] = useState("");
    const [gioiTinh, setGioiTinh] = useState(true);
    const [capBac, setCapBac] = useState("");
    const [boMonId, setBomonID] = useState("");
    const [dsBomon, setDsBomon] = useState([]);
    
    const handleSubmit = async () => {
        try {
          const formData = {
            tenGV,
            boMonId,
            sdt,
          };
          await giangVienAPI.create(formData);
          onClose();
          window.location.reload();
        } catch (error) {
          console.error("Error submitting form:", error);
        }
      };
      
      const [dsGV, setdsGV] = useState([]);
      useEffect(() => {
        fetchDsGV();
      }, []);
      const fetchDsGV = async () => {
        setdsGV(await giangVienAPI.getAll());
      };
      console.log(dsGV);

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
          Danh sách giảng viên
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
          <ModalHeader>Thêm Giảng viên</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl mt={4}>
              <FormLabel>Tên giảng viên</FormLabel>
              <Input
                ref={finalRef}
                type="text"
                placeholder="Tên giảng viên"
                onChange={(e) => {
                  setTenGV(e.target.value);
                }}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Giới tính</FormLabel>
              <Select
                id="gioiTinhInput"
                onChange={(e) => {
                  setGioiTinh(e.target.value);
                }}
              >
                <option value={true}>Nam</option>
                <option value={false}>Nữ</option>
              </Select>
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

            <FormControl mt={4}>
              <FormLabel>Cấp bậc</FormLabel>
              <Select
                placeholder="Cấp bậc"
                id="capBacInput"
                onChange={(e) => {
                  setCapBac(e.target.value);
                }}
              >
                {capBacData.map((capbac, index) => (
                  <option key={index} value={capbac}>
                    {capbac}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Số điện thoại</FormLabel>
              <Input
                ref={finalRef}
                type="text"
                placeholder="VD : 0834883697"
                onChange={(e) => {
                  setSdt(e.target.value);
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
            {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
            <Thead>
              <Tr bg={"rgb(157, 173, 127)"}>
                <Th w={"5%"} textAlign={"center"}>
                  Mã GV
                </Th>
                <Th w={"10%"} textAlign={"center"}>
                  Họ tên
                </Th>
                <Th w={"5%"} textAlign={"center"}>
                  Giới tính
                </Th>
                <Th w={"10%"} textAlign={"center"}>
                  Số điện thoại
                </Th>
                <Th w={"10%"} textAlign={"center"}>
                  Thuộc bộ môn
                </Th>
                <Th w={"5%"}></Th>
                <Th w={"5%"}></Th>
              </Tr>
            </Thead>
            <Tbody>
                {dsGV.map((item) => (
                <GiangVienComponent
                key={item.maGV}
                maGV={item.maGV}
                hoTen={item.tenGV}
                sdt={item.sdt}
                gioiTinh={item.gioiTinh}
                boMon={item.boMon}
                capBac={item.capBac}
                />
                ))}
          </Tbody>
          </Table>
        </TableContainer>
      </div>
    );
  };
  
  export default ListGiangVienTable;