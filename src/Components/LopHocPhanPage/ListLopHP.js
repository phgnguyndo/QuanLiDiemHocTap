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
import hocphanAPI from "../../api/hocphanAPI";
import lophocphanAPI from "../../api/lophocphanAPI";
import LopHPComponent from "./LopHocPhanComponent";

const ListLopHPTable = (props) => {
  const i = 0;
  const { idHocPhan } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [soHVien, setSoHV] = useState(0);
  const [dsLhp, setDsLhp] = useState([]);
  const [dsHocPhan, setDsHocPhan] = useState([]);
  const [maHocPhan, setMaHocPhan] = useState("");
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
    setDsHocPhan(await hocphanAPI.getAll());
  };

  const handleSubmit = async () => {
    try {
      const soHV = soHVien;
      const hocPhanId = idHocPhan;
      const formdata = {
        soHV,
        hocPhanId,
      };
      await lophocphanAPI.create(formdata);
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
          fontSize: "50px",
          fontFamily: "inherit",
          fontWeight: "bold",
          marginBottom: "80px",
          color: "rgb(91, 138, 114)",
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
              <FormLabel>Tên học phần</FormLabel>
              <Input
                ref={initialRef}
                type="text"
                placeholder="Tên bộ môn"
                onChange={(e) => {
                  setSoHV(parseInt(e.target.value));
                }}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Khoa</FormLabel>
              <Select
                placeholder="Không"
                id="KhoaInPut"
                onChange={(e) => {
                  setMaHocPhan(e.target.value);
                }}
              >
                {dsHocPhan.map((item, index) => (
                  <option key={index} value={item.maHocPhan}>
                    {item.tenHocPhan}
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
      <TableContainer w={"120vh"}>
        <Table variant="simple" size="lg">
          <Thead background={"rgb(182, 187, 196)"}>
            <Tr>
              <Th textAlign={"center"}>#</Th>
              <Th>Lớp học phần</Th>
              <Th>Học phần</Th>
              <Th textAlign={"center"}>Sửa</Th>
              <Th textAlign={"center"}>Xóa</Th>
            </Tr>
          </Thead>
          {dsLhp?.map((item, i) => (
            <LopHPComponent
              key={item.maLHP}
              stt={i + 1}
              soHV={props.soHV}
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
