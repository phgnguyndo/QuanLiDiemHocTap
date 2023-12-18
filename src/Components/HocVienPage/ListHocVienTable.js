import {
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
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
  Flex,
  Tfoot,
} from "@chakra-ui/react";
import { Input } from "antd";
import HocVien from "./HocVienComponent";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import hocvienAPI from "../../api/hocvienAPI";
import PaginationComponent from "../Pagination/Pagenation";
import StorageKeys from "../../constance/storage-key";
const user = JSON.parse(localStorage.getItem(StorageKeys.USER));
const ListHocVienTable = (props) => {
  const isDaiDoi = user.role === "user1";
  const isAdmin = user.role === "admin";
  const isAdOrDd = user.role === "admin" || user.role === "user1";
  const capBacData = [
    "Binh nhất",
    "Binh nhì",
    "Hạ sĩ",
    "Trung sĩ",
    "Thượng sĩ",
  ];
  const provinceData = [
    "An Giang",
    "Bà Rịa-Vũng Tàu",
    "Bắc Giang",
    "Bắc Kạn",
    "Bạc Liêu",
    "Bắc Ninh",
    "Bến Tre",
    "Bình Định",
    "Bình Dương",
    "Bình Phước",
    "Bình Thuận",
    "Cà Mau",
    "Cần Thơ",
    "Cao Bằng",
    "Đà Nẵng",
    "Đắk Lắk",
    "Đắk Nông",
    "Điện Biên",
    "Đồng Nai",
    "Đồng Tháp",
    "Gia Lai",
    "Hà Giang",
    "Hà Nam",
    "Hà Nội",
    "Hà Tĩnh",
    "Hải Dương",
    "Hải Phòng",
    "Hậu Giang",
    "Hòa Bình",
    "Hưng Yên",
    "Khánh Hòa",
    "Kiên Giang",
    "Kon Tum",
    "Lai Châu",
    "Lâm Đồng",
    "Lạng Sơn",
    "Lào Cai",
    "Long An",
    "Nam Định",
    "Nghệ An",
    "Ninh Bình",
    "Ninh Thuận",
    "Phú Thọ",
    "Phú Yên",
    "Quảng Bình",
    "Quảng Nam",
    "Quảng Ngãi",
    "Quảng Ninh",
    "Quảng Trị",
    "Sóc Trăng",
    "Sơn La",
    "Tây Ninh",
    "Thái Bình",
    "Thái Nguyên",
    "Thanh Hóa",
    "Thừa Thiên-Huế",
    "Tiền Giang",
    "Trà Vinh",
    "Tuyên Quang",
    "Vĩnh Long",
    "Vĩnh Phúc",
    "Yên Bái",
  ];

  const { idLop } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [maHV, setMaHV] = useState("");
  const [hoTen, setHoTen] = useState("");
  const [ngaySinh, setNgaySinh] = useState("");
  const [gioiTinh, setGioiTinh] = useState(true);
  const [queQuan, setQueQuan] = useState("");
  const [capBac, setCapBac] = useState("");
  const [imageHV, setImageHV] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const handleSubmit = async () => {
    try {
      const lcnId = idLop;
      const formdata = new FormData();
      formdata.append("maHV", maHV);
      formdata.append("lopChuyenNganhId", lcnId);
      formdata.append("tenHV", hoTen);
      formdata.append("ngaySinh", ngaySinh);
      formdata.append("gioiTinh", gioiTinh);
      formdata.append("queQuan", queQuan);
      formdata.append("capBac", capBac);
      formdata.append("file", imageHV);
      await hocvienAPI.create(formdata);
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const [dsHV, setdsHV] = useState([]);
  useEffect(() => {
    fetchDsHV();
  }, []);
  const fetchDsHV = async () => {
    setdsHV(await hocvienAPI.get(idLop));
  };

  // useEffect(() => {
  //   fetchDsHVPage(currentPage, pageSize);
  // }, [currentPage, pageSize]);

  // const fetchDsHVPage = async (page, size) => {
  //   setdsHV(await hocvienAPI.getAll(page, 2));
  // };

  // const handlePageChange = (page) => {
  //   setCurrentPage(page);
  //   fetchDsHVPage(page, pageSize);
  // };

  return (
    <Box position={"relative"}>
      <Box
        variant="solid"
        color={"brown"}
        fontSize={"40px"}
        fontWeight={500}
        textAlign={"center"}
      >
        Danh sách học viên
      </Box>
      {isDaiDoi && (
        <>
          <Button
            variant="solid"
            bg="rgb(26,132,74)"
            color={"white"}
            left={"2%"}
            top={"30px"}
            onClick={onOpen}
          >
            Thêm
          </Button>
        </>
      )}

      <Modal
        size={"xl"}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Thêm học viên</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={7}>
            <Flex justify={"space-evenly"}>
              <Box w={"43%"}>
                <FormControl>
                  <FormLabel>Mã học viên</FormLabel>
                  <Input
                    ref={initialRef}
                    type="text"
                    placeholder="Mã HV"
                    onChange={(e) => {
                      setMaHV(e.target.value);
                    }}
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Tên học viên</FormLabel>
                  <Input
                    ref={finalRef}
                    type="text"
                    placeholder="Tên học viên"
                    onChange={(e) => {
                      setHoTen(e.target.value);
                    }}
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Ngày sinh</FormLabel>
                  <Input
                    placeholder="Ngày sinh"
                    id="ngaySinhInput"
                    onChange={(e) => {
                      setNgaySinh(e.target.value);
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
              </Box>
              <Box w={"48%"} marginTop={"-16px"}>
                <FormControl mt={4}>
                  <FormLabel>Quê quán</FormLabel>
                  <Select
                    size={"sm"}
                    placeholder="Quê quán"
                    id="queQuanInput"
                    onChange={(e) => {
                      setQueQuan(e.target.value);
                    }}
                  >
                    {provinceData.map((province, index) => (
                      <option key={index} value={province}>
                        {province}
                      </option>
                    ))}
                  </Select>
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Cấp bậc</FormLabel>
                  <Select
                    size={"sm"}
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
                {/* <FormControl mt={4}>
                  <FormLabel>Ảnh</FormLabel>
                  <Input
                    type="file"
                    name="file"
                    onChange={(e) => {
                      setImageHV(e.target.files[0]);
                    }}
                  />
                </FormControl> */}
              </Box>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Lưu
            </Button>
            <Button onClick={onClose}>Hủy</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <TableContainer>
        <Table
          variant="striped"
          size={"sm"}
          position={"relative"}
          top={"50px"}
          w={"95%"}
          left={"2%"}
        >
          <Thead background={"rgb(182, 187, 196)"}>
            <Tr>
              <Th w={"5%"}>Mã HV</Th>
              <Th w={"20%"} textAlign={"center"}>
                Họ tên
              </Th>
              <Th w={"9%"}>Ngày sinh</Th>
              <Th w={"8%"}>Giới tính</Th>
              <Th w={"17%"}>Quê quán</Th>
              <Th w={"8%"}>Cấp bậc</Th>
              <Th colSpan={"6"} w={"4%"} textAlign={"center"}>
                Tùy chọn
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {dsHV?.map((item) => (
              <HocVien
                key={item.maHV}
                maHV={item.maHV}
                hoTen={item.tenHV}
                img={item.anhHV}
                ngaySinh={item.ngaySinh}
                gioiTinh={item.gioiTinh}
                queQuan={item.queQuan}
                capBac={item.capBac}
              />
            ))}
          </Tbody>
          <br />
          {/* <Tfoot left={"35%"} position={"absolute"}>
            <PaginationComponent onPageChange={handlePageChange} />
          </Tfoot> */}
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ListHocVienTable;
