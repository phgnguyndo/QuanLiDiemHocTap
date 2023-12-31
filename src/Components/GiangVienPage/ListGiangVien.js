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
  Tfoot,
} from "@chakra-ui/react";
import { Input } from "antd";
//   import HocVien from "./HocVienComponent";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import GiangVienComponent from "./GiangVienComponent";
import giangVienAPI from "../../api/giangVienAPI";
import bomonAPI from "../../api/bomonAPI";
import StorageKeys from "../../constance/storage-key";
import PaginationComponent from "../Pagination/Pagenation";
const ListGiangVienTable = (props) => {
  const user = JSON.parse(localStorage.getItem(StorageKeys.USER));
  const isAdmin = user.role === "admin";
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
  const i = 0;

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
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
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
    fetchDsGV(currentPage, pageSize);
  }, [currentPage, pageSize]);
  const fetchDsGV = async (page) => {
    setdsGV(await giangVienAPI.getAll(page,10));
  };
  console.log(dsGV);

  useEffect(() => {
    fetchDsBoMon();
  }, []);
  const fetchDsBoMon = async () => {
    setDsBomon(await bomonAPI.getAll(1, 100));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    fetchDsBoMon(page, pageSize);
  };

  const handleSizeChange = (size) => {
    setPageSize(size);
    fetchDsBoMon(currentPage, size);
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
          fontSize: "35px",
          fontWeight: "500",
          marginBottom: "80px",
          color: "brown",
        }}
      >
        Danh sách giảng viên
      </div>

      {isAdmin && (
        <>
          <Button
            position={"relative"}
            top={"-50px"}
            left={"-513px"}
            variant="solid"
            bg="rgb(26,132,74)"
            color={"white"}
            onClick={onOpen}
          >
            Thêm
          </Button>
        </>
      )}
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
                  setGioiTinh(parseInt(e.target.value));
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

      <TableContainer w={"150vh"} position={"relative"} top={"-20px"}>
        <Table variant="striped" size="sm">
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
              <Th w={"5%"} textAlign={"center"}>
                Sửa
              </Th>
              <Th w={"5%"} textAlign={"center"}>
                Xóa
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
          <br/>
          
          <Tfoot left={"35%"} position={"absolute"}>
            <PaginationComponent onPageChange={handlePageChange} />
          </Tfoot>
          <br/>
          <br/><br/>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ListGiangVienTable;
