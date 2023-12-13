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
  Box,
  Tbody,
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
    <Box position={"relative"}>
      <Box
        color={"brown"}
        variant="solid"
        fontSize={"40px"}
        fontWeight={500}
        textAlign={"center"}
      >
        Danh sách bộ môn
      </Box>
      <Button
        position={"relative"}
        top={"30px"}
        left={"172px"}
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
      <TableContainer>
        <Table
          variant="striped"
          size="sm"
          position={"relative"}
          top={"50px"}
          w={"70%"}
          align="center"
        >
          <Thead background={"rgb(182, 187, 196)"}>
            <Tr>
              <Th textAlign={"center"}>STT</Th>
              <Th w={"41%"}>Bộ môn</Th>
              <Th w={"41%"}>Khoa</Th>
              <Th textAlign={"center"}>Sửa</Th>
              <Th textAlign={"center"}>Xóa</Th>
            </Tr>
          </Thead>
          <Tbody>
            {dsBoMon?.map((item, i) => (
              <BoMon
                key={item.maBM}
                stt={i + 1}
                maBM={item.maBM}
                tenBM={item.tenBM}
                khoaId={item.khoaId}
                tenKhoa={item.khoa.tenKhoa}
              />
            ))}
          </Tbody>
          <br></br>
          <br></br>
          <br></br>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ListBoMonTable;
