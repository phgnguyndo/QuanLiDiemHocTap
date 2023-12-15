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
  import React, { useState, useEffect } from "react";
  import dtbAPI from "../../api/dtbAPI"
  import hocvienAPI from "../../api/hocvienAPI";
  

  
const HvTBComponent = (props) => {
    
  const {hv_diem} = props;
  // const hv_diem = props.hv_diem;
  const [dsDTB, setdsDTB] = useState([]);
  const [dsHV,setdsHV] = useState([]);

  const namHoc = props.namHoc;
  const [trungBinh,setDsXS] = useState([]);

  useEffect(() => {
    fetchDsDTB();
  },[]);
  const fetchDsDTB = async () => {
    setdsDTB(await dtbAPI.getAll());
  };

  useEffect(() => {
    fetchDsHV();
  },[]);
  const fetchDsHV = async () => {
    setdsHV(await hocvienAPI.getAll(1,100));
  };
  //xét học viên có điểm trung bình năm xuất sắc
  useEffect(() => {
    const phanLoaiHocVienXS = (hv_diem, dsHV, namHoc) => {
      let len = dsHV.length;
      const trungBinh = new Array(len).fill(0).map(() => new Array(6).fill());

      let j = 0;
        switch (namHoc) {
          case "1":
            for (let i = 0 ;i< len ;i++) {
              if((7 > hv_diem[i][1]) && (hv_diem[i][1] >= 6)){
                trungBinh[j][0] = dsHV[i].maHV;
                trungBinh[j][1] = dsHV[i].tenHV;
                trungBinh[j][2] = dsHV[i].lopChuyenNganhId;
                trungBinh[j][3] = hv_diem[i][1]
                j++;
              }
            }
            break;
          case "2":
            for (let i = 0 ;i< len ;i++) {
              if((7 > hv_diem[i][1]) && (hv_diem[i][1] >= 6)){
                trungBinh[j][0] = dsHV[i].maHV;
                trungBinh[j][1] = dsHV[i].tenHV;
                trungBinh[j][2] = dsHV[i].lopChuyenNganhId;
                trungBinh[j][3] = hv_diem[i][2]
                j++;
              }
            }
            break;
          case "3":
            for (let i = 0 ;i< len ;i++) {
              if((7 > hv_diem[i][1]) && (hv_diem[i][1] >= 6)){
                trungBinh[j][0] = dsHV[i].maHV;
                trungBinh[j][1] = dsHV[i].tenHV;
                trungBinh[j][2] = dsHV[i].lopChuyenNganhId;
                trungBinh[j][3] = hv_diem[i][3]
                j++;
              }
            }
            break;
            case "4":
            for (let i = 0 ;i< len ;i++) {
              if((7 > hv_diem[i][1]) && (hv_diem[i][1] >= 6)){
                trungBinh[j][0] = dsHV[i].maHV;
                trungBinh[j][1] = dsHV[i].tenHV
                trungBinh[j][2] = dsHV[i].lopChuyenNganhId
                ;
                trungBinh[j][3] = hv_diem[i][4]
                j++;
              }
            }
            break;
            case "5":
            for (let i = 0 ;i< len ;i++) {
              if((7 > hv_diem[i][1]) && (hv_diem[i][1] >= 6)){
                trungBinh[j][0] = dsHV[i].maHV;
                trungBinh[j][1] = dsHV[i].tenHV;
                trungBinh[j][2] = dsHV[i].lopChuyenNganhId;
                trungBinh[j][3] = hv_diem[i][5]
                j++;
              }
            }
            break;
            default:
              console.log("It's something else.");
          }
        setDsXS(trungBinh);      
    };
    phanLoaiHocVienXS(hv_diem, dsHV, namHoc);
  },[namHoc])


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
                }}>Danh sách học viên trung bình
              </Tr>
              <Tr bg={"rgb(182, 187, 196)"}>
                <Th w={"3%"} textAlign={"center"}>
                  STT
                </Th>
                <Th w={"15%"} textAlign={"center"}>
                Mã học viên
                </Th>
                <Th w={"15%"} textAlign={"center"}>
                Tên học viên
                </Th>
                <Th w={"10%"} textAlign={"center"}>
                  Lớp chuyên ngành
                </Th>
                <Th w={"5%"} textAlign={"center"}>
                Điểm trung bình
                </Th>
                {/* <Th w={"10%"} textAlign={"center"}>
                  Thuộc học kỳ
                </Th>
                <Th w={"5%"} textAlign={"center"}>Sửa</Th>
                <Th w={"5%"} textAlign={"center"}>Xóa</Th> */}
              </Tr>
            </Thead>
            <Tbody>
                {trungBinh.map((item,i) => (
                  <Tr>
                    <Td position={"relative"} textAlign={"center"}>
                    {i+1}
                    </Td>
                    <Td position={"relative"} textAlign={"center"}>
                    {trungBinh[i][0]}
                    </Td>
                    <Td position={"relative"} textAlign={"center"}>
                    {trungBinh[i][1]}
                    </Td>
                    <Td position={"relative"} textAlign={"center"}>
                    {trungBinh[i][2]}
                    </Td>
                    <Td position={"relative"} textAlign={"center"}>
                    {trungBinh[i][3]}
                    </Td>
                  </Tr>
                ))}
          </Tbody>
          </Table>
        </>
    );
};

export default HvTBComponent;
