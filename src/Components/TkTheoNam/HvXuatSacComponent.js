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
      let tcNam = 0;
      let temp = 0;
      for(let i=0; i<dsHV.length - 8; i++){
          hv_diem[i][0] = dsHV[i].maHV;
          for(let j=0; j < dsDTB.length; j = j + 10) {
            temp = (dsDTB[j].DTB * dsDTB[j].TC + dsDTB[j+1].DTB * dsDTB[j+1].TC);
            tcNam = dsDTB[j].TC + dsDTB[j+1].TC;
            hv_diem[i][1] = temp/tcNam;

            temp = (dsDTB[j+2].DTB * dsDTB[j+2].TC + dsDTB[j+3].DTB * dsDTB[j+3].TC);
            tcNam = dsDTB[j+2].TC + dsDTB[j+3].TC;
            hv_diem[i][2] = temp/tcNam;

            temp = (dsDTB[j+4].DTB * dsDTB[j+4].TC + dsDTB[j+5].DTB * dsDTB[j+5].TC);
            tcNam = dsDTB[j+4].TC + dsDTB[j+5].TC;
            hv_diem[i][3] = temp/tcNam;

            temp = (dsDTB[j+6].DTB * dsDTB[j+6].TC + dsDTB[j+7].DTB * dsDTB[j+7].TC);
            tcNam = dsDTB[j+6].TC + dsDTB[j+7].TC;
            hv_diem[i][4] = temp/tcNam;

            temp = (dsDTB[j+8].DTB * dsDTB[j+8].TC + dsDTB[j+9].DTB * dsDTB[j+9].TC);
            tcNam = dsDTB[j+8].TC + dsDTB[j+9].TC;
            hv_diem[i][5] = temp/tcNam;
          }
        };
      
      
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
