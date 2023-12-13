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
import dtbAPI from "../../api/dtbAPI";
import React, { useState, useEffect } from "react";
import TkhkComponent from "./TkhkComponent";

const ListTkhk = (props) => {
  var i = 0;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [dsThongKe, setDsThongKe] = useState([]);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  useEffect(() => {
    fetchThongKe();
  }, []);
  const fetchThongKe = async () => {
    setDsThongKe(await dtbAPI.getAll());
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
        Thống kê theo học kỳ
      </Box>
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
              <Th w={"30%"} textAlign={"center"}>
                Tên học viên
              </Th>
              <Th w={"20%"} textAlign={"center"}>
                Lớp chuyên ngành
              </Th>
              <Th textAlign={"center"}>Điểm TB</Th>
              <Th textAlign={"center"}>Học kỳ</Th>
              <Th colSpan={"4"} textAlign={"center"}>
                Tùy chọn
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {dsThongKe?.map((item, i) => (
              <TkhkComponent
                key={item.maHV}
                stt={i + 1}
                dtb={item.dtb}
                hocKy={item.hocKy}
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

export default ListTkhk;
