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
    Switch,
  } from "@chakra-ui/react";
  import React, { useState, useEffect } from "react";
  import dtbAPI from "../../api/dtbAPI"
  import hocvienAPI from "../../api/hocvienAPI";
  

const HvXuatSacComponent = (props) => {


  const [dsDTB, setdsDTB] = useState([]);
  const [dsHV,setdsHV] = useState([]);



  useEffect(() => {
    fetchDsDTB();
  },[]);
  const fetchDsDTB = async () => {
    setdsDTB(await dtbAPI.getAll());
  };
  console.log(dsDTB);
  console.log(props.namHoc);

  useEffect(() => {
    fetchDsHV();
  },[]);
  const fetchDsHV = async () => {
    setdsHV(await hocvienAPI.getAll());
  };
  console.log(dsHV);


  //xét học viên có điểm trung bình năm xuất sắc
  useEffect(() => {
    const tinhDiemTrungBinhNamHoc = () =>{
      const hv_diem = [[]];

      // dsHV.forEach(item => (
      //     dsDTB.forEach(item2 => (

      //       )
      //     )
      //   )
      // );
      
      
      // dsHV.map(function (item, index) {
      //   dsDTB
        
      // });

      switch (props.namHoc) {
        case 1:
          // Code to execute if expression equals value1
          break;
        case 2:
          // Code to execute if expression equals value2
          break;
        case 3:
            // Code to execute if expression equals value2
            break;
        case 4:
          // Code to execute if expression equals value2
          break;
        case 5:
          // Code to execute if expression equals value2
          break;
        default:
          // Code to execute if none of the cases match
          break;
      }
      
    };
  })

    return(
        <>
            <Table variant='striped' size="sm"
            position={"relative"}
            marginTop={"50px"}
            w={"90%"}
            left={"5%"}
            >
            <Thead>
              <Tr style={{
                fontSize: "20px",
                fontFamily: "inherit",
                fontWeight: "bold",
                color: "rgb(91, 138, 114)",
                }}>Danh sách học viên xuất sắc
              </Tr>
              <Tr bg={"rgb(182, 187, 196)"}>
                <Th w={"5%"} textAlign={"center"}>
                  STT
                </Th>
                <Th w={"15%"} textAlign={"center"}>
                Tên học viên
                </Th>
                <Th w={"10%"} textAlign={"center"}>
                  Lớp chuyên ngành
                </Th>
                <Th w={"5%"} textAlign={"center"}>
                Đạt học bổng
                </Th>
                {/* <Th w={"10%"} textAlign={"center"}>
                  Thuộc học kỳ
                </Th>
                <Th w={"5%"} textAlign={"center"}>Sửa</Th>
                <Th w={"5%"} textAlign={"center"}>Xóa</Th> */}
              </Tr>
            </Thead>
            <Tbody>
                {/* {dsHP.map((item,i) => (
                <HocPhanComponent
                key={item.maHocPhan}
                STT={i+1}
                tenHP={item.tenHocPhan}
                soTC={item.soTC}
                hocKy={item.hocKy}
                soTiet={item.soTiet}
                boMonId={item.boMonId}
                />
                ))} */}
          </Tbody>
          </Table>
        </>
    );
};

export default HvXuatSacComponent;
