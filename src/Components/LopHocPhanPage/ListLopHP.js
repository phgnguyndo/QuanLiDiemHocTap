import {
  Button,
  Table,
  Thead,
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
} from "@chakra-ui/react";
import { Input } from "antd";
// import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import hocphanAPI from "../../api/hocphanAPI";
import lophocphanAPI from "../../api/lophocphanAPI";
import LopHPComponent from "./LopHocPhanComponent";
import giangVienAPI from "../../api/giangVienAPI";
import dayhocAPI from "../../api/dayhocAPI";

const ListLopHPTable = (props) => {
  const i = 0;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [soHV, setSoHV] = useState(0);
  const [dsLhp, setDsLhp] = useState([]);
  const [dsHocPhan, setDsHocPhan] = useState([]);
  const [maLopHocPhan, setMaLHP] = useState("");
  const [maHP, setMaHP] = useState("");
  const [diaDiem, setDiaDiem] = useState("");
  const [dsGV, setDsGV] = useState([]);
  const [maGV, setMaGV] = useState("");

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  useEffect(() => {
    fetchLhp();
  }, []);
  const fetchLhp = async () => {
    setDsLhp(await lophocphanAPI.getAll());
  };

  useEffect(() => {
    fetchHocPhan();
  }, []);
  const fetchHocPhan = async () => {
    setDsHocPhan(await hocphanAPI.getAll(1,100));
  };

  useEffect(() => {
    fetchGV();
  }, []);
  const fetchGV = async () => {
    setDsGV(await giangVienAPI.getAll());
  };

  const handleSubmit = async () => {
    try {
      const hocPhanId = maHP;
      const giangVienId = maGV;
      const lopHocPhanId=maLopHocPhan;
      const formdata = {
        maLopHocPhan,
        diaDiem,
        soHV,
        giangVienId,
        hocPhanId,
      };
      const formdataDayHoc = {
        giangVienId,
        lopHocPhanId
      };

      await lophocphanAPI.create(formdata);
      await dayhocAPI.create(formdataDayHoc);
      console.log(formdataDayHoc);
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
      <div
        style={{
          fontSize: "35px",
          fontWeight: "500",
          marginBottom: "80px",
          color: "brown",
        }}
      >
        Danh sách lớp học phần
      </div>
      <Button
        position={"relative"}
        top={"-40px"}
        left={"-400px"}
        variant="solid"
        bg="rgb(26,132,74)"
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
          <ModalHeader>Thêm lớp học phần</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl mt={4}>
              <FormLabel>Mã lớp học phần</FormLabel>
              <Input
                ref={initialRef}
                type="text"
                placeholder="Mã LHP"
                onChange={(e) => {
                  setMaLHP(e.target.value);
                }}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Địa điểm</FormLabel>
              <Input
                type="text"
                placeholder="Địa điểm"
                onChange={(e) => {
                  setDiaDiem(e.target.value);
                }}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Số học viên</FormLabel>
              <Input
                placeholder="Số học viên"
                onChange={(e) => {
                  setSoHV(parseInt(e.target.value));
                }}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Học phần</FormLabel>
              <Select
                placeholder="Chọn học phần"
                id="HPInPut"
                onChange={(e) => {
                  setMaHP(e.target.value);
                }}
              >
                {dsHocPhan.map((item, index) => (
                  <option key={index} value={item.maHocPhan}>
                    {item.tenHocPhan}
                  </option>
                ))}
              </Select>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Học phần</FormLabel>
              <Select
                placeholder="Chọn giảng viên"
                id="GVInPut"
                onChange={(e) => {
                  setMaGV(e.target.value);
                }}
              >
                {dsGV.map((item, index) => (
                  <option key={index} value={item.maGV}>
                    {item.tenGV}
                  </option>
                ))}
              </Select>
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
      <TableContainer w={"150vh"}>
        <Table variant="simple" size="sm">
          <Thead background={"rgb(182, 187, 196)"}>
            <Tr>
              <Th textAlign={"center"}>STT</Th>
              <Th textAlign={"center"}>Lớp học phần</Th>
              <Th textAlign={"center"}>Học phần</Th>
              <Th textAlign={"center"}>Địa điểm</Th>
              <Th textAlign={"center"}>Tùy chọn</Th>
              {/* <Th textAlign={"center"}>Xóa</Th> */}
            </Tr>
          </Thead>
          {dsLhp?.map((item, i) => (
            <LopHPComponent
              key={item.maLHP}
              stt={i + 1}
              diaDiem={item.diaDiem}
              maLHP={item.maLopHocPhan}
              tenHocPhan={item.hocPhan.tenHocPhan}
              soHV={item.soHV}
              hocPhanId={item.hocPhanId}
            />
          ))}
          <br />
        </Table>
      </TableContainer>
    </div>
  );
};

export default ListLopHPTable;
