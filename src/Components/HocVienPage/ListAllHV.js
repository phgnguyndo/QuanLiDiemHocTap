import {
  Button,
  Table,
  Thead,
  Tr,
  Th,
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
  Tfoot,
  Tbody,
  Flex,
} from "@chakra-ui/react";
import { Input } from "antd";
import HocVien from "./HocVienComponent";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import hocvienAPI from "../../api/hocvienAPI";
import PaginationComponent from "../Pagination/Pagenation";
import lopcnAPI from "../../api/lopcnAPI";

const ListAllHocVien = (props) => {
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [maHV, setMaHV] = useState("");
  const [hoTen, setHoTen] = useState("");
  const [ngaySinh, setNgaySinh] = useState("");
  const [gioiTinh, setGioiTinh] = useState(true);
  const [queQuan, setQueQuan] = useState("");
  const [capBac, setCapBac] = useState("");
  // const [imageHV, setImageHV] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [dsLCN, setDsLCN] = useState([]);
  const [maLCN, setMaLCN] = useState("");

  const handleSubmit = async () => {
    try {
      const lcnId = maLCN;
      // const maHV= initialRef.current.value;
      // const tenHV = finalRef.current.value;
      const formdata = new FormData();
      formdata.append("maHV", maHV);
      formdata.append("lopChuyenNganhId", lcnId);
      formdata.append("tenHV", hoTen);
      formdata.append("ngaySinh", ngaySinh);
      formdata.append("gioiTinh", gioiTinh);
      formdata.append("queQuan", queQuan);
      formdata.append("capBac", capBac);
      // formdata.append("file", imageHV);
      await hocvienAPI.create(formdata);
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const [dsHV, setdsHV] = useState([]);
  // useEffect(() => {
  //   fetchDsHV();
  // }, []);
  // const fetchDsHV = async () => {
  //   setdsHV(await hocvienAPI.getAll(1, 10));
  // };
  useEffect(() => {
    fetchDsHV(currentPage, pageSize);
  }, [currentPage, pageSize]);

  const fetchDsHV = async (page) => {
    setdsHV(await hocvienAPI.getAll(page, 10));
  };

  useEffect(() => {
    fetchLCN();
  }, []);
  const fetchLCN = async () => {
    setDsLCN(await lopcnAPI.getAll());
  };
  // console.log(dsHV);
  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Implement actions when the page changes (e.g., fetching data)
    fetchDsHV(page, pageSize);
  };

  // const handleSizeChange = (size) => {
  //   setPageSize(size);
  //   // Implement actions when the page size changes (e.g., fetching data)
  //   fetchDsHV(currentPage, size);
  // };
  return (
    <Box position={"relative"}>
      <Box
        color={"brown"}
        fontSize={"35px"}
        fontWeight={500}
        textAlign={"center"}
      >
        Danh sách học viên
      </Box>
      <Button
        variant="solid"
        bg="rgb(26,132,74)"
        color={"white"}
        left={"5%"}
        top={"30px"}
        onClick={onOpen}
      >
        Thêm
      </Button>
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
                  <FormLabel>Lớp chuyên ngành</FormLabel>
                  <Select
                    placeholder="Lớp chuyên ngành"
                    size={"sm"}
                    id="lcnInput"
                    onChange={(e) => {
                      setMaLCN(e.target.value);
                    }}
                  >
                    {dsLCN.map((item) => (
                      <option value={item.maLopChuyenNganh}>
                        {item.tenLopChuyenNganh}
                      </option>
                    ))}
                  </Select>
                </FormControl>
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
                    size={"sm"}
                    id="gioiTinhInput"
                    onChange={(e) => {
                      setGioiTinh(e.target.value);
                    }}
                  >
                    <option value={true}>Nam</option>
                    <option value={false}>Nữ</option>
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
      {/* <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Thêm học viên</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
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
                  setGioiTinh(e.target.value);
                }}
              >
                <option value={true}>Nam</option>
                <option value={false}>Nữ</option>
              </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Quê quán</FormLabel>
              <Select
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
              <FormLabel>Ảnh</FormLabel>
              <Input
                type="file"
                name="file"
                onChange={(e) => {
                  setImageHV(e.target.files[0]);
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
      </Modal> */}
      {/* <TableContainer w={"150vh"}> */}
      <Table
        variant="striped"
        size="sm"
        position={"relative"}
        top={"50px"}
        w={"90%"}
        left={"5%"}
      >
        <Thead background={"rgb(182, 187, 196)"}>
            <Tr>
              <Th w={"5%"} textAlign={"center"}>Mã HV</Th>
              <Th w={"20%"} textAlign={"center"} >Họ tên</Th>
              <Th w={"9%"} textAlign={"center"}>Ngày sinh</Th>
              <Th w={"8%"} textAlign={"center"}>Giới tính</Th>
              <Th w={"10%"} textAlign={"center"}>Quê quán</Th>
              <Th w={"8%"} textAlign={"center"}>Cấp bậc</Th>
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
        <Tfoot position={"absolute"} left={"35%"}>
          <PaginationComponent
            onPageChange={handlePageChange}
            // onSizeChange={handleSizeChange}
          />
        </Tfoot>
      </Table>
    </Box>
  );
};

export default ListAllHocVien;
