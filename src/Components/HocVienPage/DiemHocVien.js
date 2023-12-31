import {
  Table,
  TableContainer,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  Td,
  Tr,
  Box,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";

import React, { useState, useEffect } from "react";
import DiemHocKyComponent from "./DiemHocKyComponent";
import { useParams } from "react-router-dom";
import phieuDiemAPI from "../../api/PhieuDiem";
import hocPhanAPI from "../../api/hocphanAPI";
import hocvienAPI from "../../api/hocvienAPI"
import StorageKeys from "../../constance/storage-key";
import { notification } from "antd";

const DiemHocVien = (props) => {
  const user = JSON.parse(localStorage.getItem(StorageKeys.USER));
  const isDaiDoi = user.role === "user1";
  const { idHV } = useParams();
  const [diemCC, setDiemCC] = useState(0);
  const [diemTX, setDiemTX] = useState(0);
  const [diemThi, setDiemThi] = useState(0);
  // const [diemThiLai, setDiemThiLai] = useState(0);
  // const [lanThi, setLanThi] = useState(0);
  const [maHocPhan, setMaHocPhan] = useState("");
  const [dsHocPhan, setDsHocPhan] = useState([]);
  const [phieuDiem, setPhieuDiem] = useState([]);
  const [hV, setHV]=useState([]);
  const hocVienId = idHV;
  const handleSubmit = async () => {
    try {
      const hocPhanId = maHocPhan;
      const formData = {
        hocPhanId,
        hocVienId,
        diemCC,
        diemTX,
        diemThi
      };
      console.log(formData);
      await phieuDiemAPI.create(formData);
      onClose();
      window.location.reload();
    } catch (error) {
      notification.error({
        message: "Phiếu điểm đã tồn tại",
        duration: 3,
      });
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPhieuDiem();
  }, []);
  const fetchPhieuDiem = async () => {
    setPhieuDiem(await phieuDiemAPI.get(idHV));
  };

  useEffect(() => {
    fetchHV();
  }, []);
  const fetchHV = async () => {
    setHV(await hocvienAPI.get(idHV));
  };
  console.log(hV);
  useEffect(() => {
    fetchHocPhan();
  }, []);

  const fetchHocPhan = async () => {
    setDsHocPhan(await hocPhanAPI.getAll(1,100));
  };
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const getUniqueSemesters = () => {
    const semesters = new Set();
    dsHocPhan.forEach((item) => {
      semesters.add(item.hocKy);
    });
    return Array.from(semesters);
  };

  const uniqueSemesters = getUniqueSemesters();

  return (
    <Box position={"relative"}>
      <Box
        color={"brown"}
        fontSize={"35px"}
        fontWeight={500}
        textAlign={"center"}
      >
        Bảng điểm của học viên {hV.tenHV}
      </Box>
      {isDaiDoi && (
        <Button
          variant="solid"
          bg="rgb(26,132,74)"
          color={"white"}
          left={"5%"}
          top={"20px"}
          onClick={onOpen}
        >
          Thêm thông tin
        </Button>
      )}
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Thêm điểm</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl mt={4}>
              <FormLabel>Tên học phần</FormLabel>
              <Select
                placeholder="Tên học phần"
                id="hpInput"
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
            <FormControl>
              <FormLabel>Điểm Chuyên cần</FormLabel>
              <Input
                ref={finalRef}
                type="text"
                placeholder="Trên 0 dưới 10"
                onChange={(e) => {
                  setDiemCC(parseFloat(e.target.value));
                }}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Điểm thường xuyên</FormLabel>
              <Input
                placeholder="Trên 0 dưới 10"
                id="quanSoInput"
                onChange={(e) => {
                  setDiemTX(parseFloat(e.target.value));
                }}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Điểm Thi Kết thúc môn</FormLabel>
              <Input
                placeholder="VD: Giải tích"
                onChange={(e) => {
                  setDiemThi(parseFloat(e.target.value));
                }}
              />
            </FormControl>
            {/* <FormControl>
              <FormLabel>Điểm Thi Lại</FormLabel>
              <Input
                placeholder="VD: Giải tích"
                onChange={(e) => {
                  setDiemThiLai(parseFloat(e.target.value));
                }}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Số lần thi lại</FormLabel>
              <Input
                placeholder="VD: Giải tích"
                onChange={(e) => {
                  setLanThi(parseInt(e.target.value));
                }}
              />
            </FormControl> */}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {uniqueSemesters.map((semester, index) => (
        <DiemHocKyComponent
          key={index}
          tenHV={hV.tenHV}
          semester={semester}
          phieuDiem={phieuDiem}
          HocKy={index + 1}
        />
      ))}
    </Box>
  );
};

export default DiemHocVien;
