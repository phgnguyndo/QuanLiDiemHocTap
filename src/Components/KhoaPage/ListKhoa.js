import {
  Button,
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
  Box,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
} from "@chakra-ui/react";
import { Input } from "antd";
import khoaAPI from "../../api/khoaAPI";
import KhoaComponent from "./KhoaComponent";
import React, { useState, useEffect } from "react";

const ListKhoaTable = (props) => {
  var i = 0;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tenKhoa, setTenKhoa] = useState("");
  const [dsKhoa, setDsKhoa] = useState([]);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  useEffect(() => {
    fetchKhoa();
  }, []);
  const fetchKhoa = async () => {
    setDsKhoa(await khoaAPI.getAll());
  };

  const handleSubmit = async () => {
    try {
      // const tenKhoa = initialRef.current.value;
      const formdata = new FormData();
      formdata.append("tenKhoa", tenKhoa);
      await khoaAPI.create(formdata);
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
        Danh sách Khoa
      </div>
      <Button
        position={"relative"}
        top={"30px"}
        left={"-225px"}
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
          <ModalHeader>Thêm khoa</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Tên khoa</FormLabel>
              <Input
                ref={initialRef}
                type="text"
                placeholder="Tên khoa"
                onChange={(e) => {
                  setTenKhoa(e.target.value);
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
      </Modal>
      <TableContainer w={"80vh"}>
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
              <Th>Khoa</Th>
              <Th textAlign={"center"}>Sửa</Th>
              <Th textAlign={"center"}>Xóa</Th>
            </Tr>
          </Thead>
          {dsKhoa?.map((item, i) => (
            <KhoaComponent
              key={item.maKhoa}
              maKhoa={item.maKhoa}
              stt={i + 1}
              tenKhoa={item.tenKhoa}
            />
          ))}
        </Table>
      </TableContainer>
    </div>
  );
};

export default ListKhoaTable;
