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
import HocVien from "./HocVienComponent";
import { useParams } from "react-router-dom";
import hocVienAPI from "../../api/hocVienAPI";
import React, { useState, useEffect } from "react";
import hocvienAPI from "../../api/hocVienAPI";


const ListHocVienTable = (props) => {
  var LopChuyenNganh = "Bảo đảm An toàn thông tin";
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

  const handleSubmit = async () => {
    try {
      const lcnId = idLop;
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
      formdata.append("file", imageHV);
      await hocVienAPI.create(formdata);
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
  console.log(dsHV);
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
      <h1 style={{ color: "GrayText" }}>Lớp {LopChuyenNganh}</h1>
      <div
        style={{
          fontSize: "50px",
          fontFamily: "inherit",
          fontWeight: "bold",
          marginBottom: "80px",
          color: "rgb(91, 138, 114)",
        }}
      >
        Danh sách học viên
      </div>
      <Button
        marginTop={"30px"}
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
          <ModalHeader>Thêm học viên</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Mã học viên</FormLabel>
              <Input
                ref={initialRef}
                type="text"
                placeholder="Mã HV"
                onChange={(e)=>{setMaHV(e.target.value)}}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Tên học viên</FormLabel>
              <Input
                ref={finalRef}
                type="text"
                placeholder="Tên học viên"
                onChange={(e)=>{setHoTen(e.target.value)}}
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
              <Input
                placeholder="Quê quán"
                id="queQuanInput"
                onChange={(e) => {
                  setQueQuan(e.target.value);
                }}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Cấp bậc</FormLabel>
              <Input
                placeholder="Cấp bậc"
                id="capBacInput"
                onChange={(e) => {
                  setCapBac(e.target.value);
                }}
              />
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
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <TableContainer w={"150vh"}>
        <Table variant="simple" size="sm">
          {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
          <Thead>
            <Tr bg={"rgb(157, 173, 127)"}>
              <Th w={"10%"} textAlign={"center"}>
                Mã HV
              </Th>
              <Th w={"20%"} textAlign={"center"}>
                Họ tên
              </Th>
              <Th w={"10%"} textAlign={"center"}>
                Ngày sinh
              </Th>
              <Th w={"5%"} textAlign={"center"}>
                Giới tính
              </Th>
              <Th w={"10%"} textAlign={"center"}>
                Quê quán
              </Th>
              <Th w={"10%"} textAlign={"center"}>
                Cấp bậc
              </Th>
              <Th w={"5%"}></Th>
              <Th w={"5%"}></Th>
            </Tr>
          </Thead>
          <br />
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
      <br />
        </Table>
      </TableContainer>
    </div>
  );
};

export default ListHocVienTable;
