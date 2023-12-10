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
import BoMon from "./BoMonComponent";
import bomonAPI from "../../api/bomonAPI";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import khoaAPI from "../../api/khoaAPI";

const ListBoMonTable = (props) => {
  const { idKhoa } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tenBoMon, setTenBoMon] = useState("");
  const [dsBoMon, setDsBoMon] = useState([]);
  const [dsKhoa, setDsKhoa] = useState([]);
  const [maKhoa, setMaKhoa] = useState("");
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  useEffect(() => {
    fetchBoMon();
  }, []);
  const fetchBoMon = async () => {
    setDsBoMon(await bomonAPI.getAll());
  };

  useEffect(() => {
    fetchKhoa();
  }, []);
  console.log(idKhoa);
  const fetchKhoa = async () => {
    setDsKhoa(await khoaAPI.getAll());
  };

  const handleSubmit = async () => {
    try {
      const tenBM = tenBoMon;
      const khoaId = maKhoa;
      const formdata = {
        tenBM,
        khoaId,
      };
      await bomonAPI.create(formdata);
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
        Danh sách bộ môn
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
          <ModalHeader>Thêm bộ môn</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl mt={4}>
              <FormLabel>Tên bộ môn</FormLabel>
              <Input
                ref={initialRef}
                type="text"
                placeholder="Tên bộ môn"
                onChange={(e) => {
                  setTenBoMon(e.target.value);
                }}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Khoa</FormLabel>
              <Select
                placeholder="Không"
                id="KhoaInPut"
                onChange={(e) => {
                  setMaKhoa(e.target.value);
                }}
              >
                {dsKhoa.map((item, index) => (
                  <option key={index} value={item.maKhoa}>
                    {item.tenKhoa}
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
        <Table
          variant="striped"
          size="lg"
          position={"relative"}
          top={"50px"}
          w={"90%"}
          left={"5%"}
        >
          <Thead background={"rgb(182, 187, 196)"}>
            <Tr>
              <Th textAlign={"center"}>#</Th>
              <Th>Bộ môn</Th>
              <Th>Khoa</Th>
              <Th textAlign={"center"}>Sửa</Th>
              <Th textAlign={"center"}>Xóa</Th>
            </Tr>
          </Thead>
          {dsBoMon?.map((item, i) => (
            <BoMon
              key={item.maBM}
              stt={i + 1}
              tenBM={item.tenBM}
              maBM={item.maBM}
              khoaId={item.khoaId}
            />
          ))}
          <br />
        </Table>
      </TableContainer>
    </div>
  );
};

export default ListBoMonTable;
