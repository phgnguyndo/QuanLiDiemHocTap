import {
  useDisclosure,
  FormControl,
  FormLabel,
  Box,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Select,
} from "@chakra-ui/react";
import dtbAPI from "../../api/dtbAPI";
import React, { useState, useEffect } from "react";
import TkhkComponent from "./TkhkComponent";

const ListTkhk = (props) => {
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

  const [hocKy, setHocKy] = useState(0);
  const hocKyList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
      <Box>
        <FormControl position={"relative"} top={"30px"} w={"6%"} left={"170px"}>
          <FormLabel>Học kỳ</FormLabel>
          <Select
            borderColor={"blackAlpha.900"}
            size={"sm"}
            placeholder="Không"
            id="hocKyInput"
            onChange={(e) => {
              setHocKy(e.target.value);
            }}
          >
            {hocKyList.map((hocKy, index) => (
              <option key={index} value={hocKy}>
                {hocKy}
              </option>
            ))}
          </Select>
        </FormControl>
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
              {/* <Th w={"20%"} textAlign={"center"}>
                Lớp chuyên ngành
              </Th> */}
              <Th textAlign={"center"}>Điểm TB</Th>
              <Th textAlign={"center"}>Học kỳ</Th>
              <Th textAlign={"center"}>Ghi chú</Th>
            </Tr>
          </Thead>
          <Tbody>
            {dsThongKe?.map((item, i) => (
              <TkhkComponent
                key={item.id}
                stt={i + 1}
                hocKy={item.hocKy}
                tenHV={item.hocVien.tenHV}
                hocVienId={item.hocVienId}
                dtb={item.dtb}
                ghiChu={item.ghiChu}
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
