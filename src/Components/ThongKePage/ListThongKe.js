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
  import ThongKeComponent from "../../Components/ThongKePage/ThongKeComponent"
  import React, { useState, useEffect } from "react";
  
  const ListKhoaTable = (props) => {
    var i = 0;
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [dsThongKe, setDsThongKe] = useState([]);
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
  
    useEffect(() => {
      fetchThongKe();
    }, []);
    const fetchThongKe = async () => {
      setDsThongKe(await khoaAPI.getAll());
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
        {/* <Button
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
                    // setTenKhoa(e.target.value);
                  }}
                />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} 
            //   onClick={handleSubmit}
              >
                Lưu
              </Button>
              <Button onClick={onClose}>Hủy</Button>
            </ModalFooter>
          </ModalContent>
        </Modal> */}
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
                <Th w={"30%"} textAlign={"center"}>Tên học viên</Th>
                <Th w={"20%"} textAlign={"center"}>Lớp chuyên ngành</Th>
                <Th textAlign={"center"}>Điểm TB</Th>
                <Th textAlign={"center"}>Học kỳ</Th>
                <Th colSpan={"4"} textAlign={"center"}>Tùy chọn</Th>
              </Tr>
            </Thead>
            <Tbody>
              {dsThongKe?.map((item, i) => (
                <ThongKeComponent
                  key={item.maHV}
                  stt={i + 1}
                  tenHV={item.tenHV}
                  tenLcn={item.tenLcn}
                  diemTB={item.diemTB}
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
  
  export default ListKhoaTable;
  