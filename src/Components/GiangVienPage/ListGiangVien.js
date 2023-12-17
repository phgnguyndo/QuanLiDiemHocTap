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
  Box,
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
    "Thiếu úy",
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
        gioiTinh,
        capBac,
        sdt,
        boMonId,
      };
      console.log(formData);
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
  }, []);
  const fetchDsBoMon = async () => {
    setDsBomon(await bomonAPI.getAll());
  };

  return (
    <Box position={"relative"}>
      <Box
        color={"brown"}
        variant="solid"
        fontSize={"40px"}
        fontWeight={500}
        textAlign={"center"}
      >
        Danh sách giảng viên
      </Box>
      <Button
        position={"relative"}
        top={"30px"}
        left={"60px"}
        variant="solid"
        bg="rgb(80,132,74)"
        color={"white"}
        onClick={onOpen}
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
                  // Chuyển đổi giá trị từ chuỗi thành boolean
                  const gioiTinhValue =
                    e.target.value === "true" ? true : false;
                  setGioiTinh(gioiTinhValue);
                }}
              >
                <option value="true">Nam</option>
                <option value="false">Nữ</option>
              </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Thuộc bộ môn</FormLabel>
              <Select
                placeholder="Tên bộ môn"
                id="boMonInput"
                type="text"
                onChange={(e) => {
                  setBomonID(e.target.value);
                }}
              >
                {dsBomon.map((item, index) => (
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

      <TableContainer>
        <Table
          variant="striped"
          size="sm"
          position={"relative"}
          top={"50px"}
          w={"90%"}
          align="center"
        >
          <Thead>
            <Tr bg={"rgb(182, 187, 196)"}>
              <Th w={"5%"} textAlign={"center"}>
                STT
              </Th>
              <Th w={"10%"} textAlign={"center"}>
                Họ tên
              </Th>
              <Th w={"5%"} textAlign={"center"}>
                Giới tính
              </Th>
              <Th w={"10%"} textAlign={"center"}>
                Cấp bậc
              </Th>
              <Th w={"10%"} textAlign={"center"}>
                Số điện thoại
              </Th>
              <Th w={"10%"} textAlign={"center"}>
                Thuộc bộ môn
              </Th>
              <Th colSpan={"7"} w={"5%"} textAlign={"center"}>
                Tùy chọn
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {dsGV.map((item, i) => (
              <GiangVienComponent
                maGV={item.maGV}
                STT={i + 1}
                hoTen={item.tenGV}
                sdt={item.sdt}
                gioiTinh={item.gioiTinh}
                boMon={item.boMon}
                capBac={item.capBac}
              />
            ))}
          </Tbody>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ListGiangVienTable;
