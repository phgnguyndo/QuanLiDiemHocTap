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
  
  
const HvGioiComponent = (props) => {

  const {hv_diem} = props;
  // const hv_diem = props.hv_diem;
  const [dsDTB, setdsDTB] = useState([]);
  const [dsHV,setdsHV] = useState([]);

  const namHoc = props.namHoc;
  const [gioi,setDsGioi] = useState([]);

  console.log("jdf")
  console.log(hv_diem)

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
    const phanLoaiHocVienGioi = (hv_diem, dsHV, namHoc) => {
      let len = dsHV.length;
      const gioi = new Array(len).fill(0).map(() => new Array(6).fill());
      // const gioi = new Array(len).fill(0).map(() => new Array(6).fill(0));
      // const kha = new Array(len).fill(0).map(() => new Array(6).fill(0));
      // const trungBinh = new Array(len).fill(0).map(() => new Array(6).fill(0));
      // const kem = new Array(len).fill(0).map(() => new Array(6).fill(0));

      let j = 0;
      console.log("Năm Học " + namHoc)
      console.log(hv_diem);
      console.log(dsHV);
        switch (namHoc) {
          case "1":
            console.log("nhap vao")
            for (let i = 0 ;i< len ;i++) {
              console.log("checking")
              console.log(hv_diem[i][1])
              if((9 > hv_diem[i][1]) && (hv_diem[i][1] >= 8)){
                gioi[j][0] = dsHV[i].maHV;
                gioi[j][1] = dsHV[i].tenHV;
                gioi[j][2] = dsHV[i].lopChuyenNganhId;
                gioi[j][3] = hv_diem[i][1]
                j++;
              }
            }
            break;
          case "2":
            for (let i = 0 ;i< len ;i++) {
              if((9 > hv_diem[i][2]) && (hv_diem[i][2] >= 8)){
                gioi[j][0] = dsHV[i].maHV;
                gioi[j][1] = dsHV[i].tenHV;
                gioi[j][2] = dsHV[i].lopChuyenNganhId;
                gioi[j][3] = hv_diem[i][2]
                j++;
              }
            }
            break;
          case "3":
            for (let i = 0 ;i< len ;i++) {
              if((9 > hv_diem[i][3]) && (hv_diem[i][3] >= 8)){
                gioi[j][0] = dsHV[i].maHV;
                gioi[j][1] = dsHV[i].tenHV;
                gioi[j][2] = dsHV[i].lopChuyenNganhId;
                gioi[j][3] = hv_diem[i][3]
                j++;
              }
            }
            break;
            case "4":
            for (let i = 0 ;i< len ;i++) {
              if((9 > hv_diem[i][4]) && (hv_diem[i][4] >= 8)){
                gioi[j][0] = dsHV[i].maHV;
                gioi[j][1] = dsHV[i].tenHV
                gioi[j][2] = dsHV[i].lopChuyenNganhId
                gioi[j][3] = hv_diem[i][4]
                j++;
              }
            }
            break;
            case "5":
            for (let i = 0 ;i< len ;i++) {
              if((9 > hv_diem[i][5]) && (hv_diem[i][5] >= 8)){
                gioi[j][0] = dsHV[i].maHV;
                gioi[j][1] = dsHV[i].tenHV;
                gioi[j][2] = dsHV[i].lopChuyenNganhId;
                gioi[j][3] = hv_diem[i][5]
                j++;
              }
            }
            break;
            default:
              console.log("It's something else.");
          }
          console.log("DS HV gioi");
      console.log(gioi);
        setDsGioi(gioi);      
    };
    phanLoaiHocVienGioi(hv_diem, dsHV, namHoc);
  },[namHoc])


  console.log("ds hv xuat sac 2222");
  console.log(gioi);

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
                }}>Danh sách học viên giỏi
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
            {gioi.map((item,i) => (
                  <Tr>
                    <Td position={"relative"} textAlign={"center"}>
                    {i+1}
                    </Td>
                    <Td position={"relative"} textAlign={"center"}>
                    {gioi[i][0]}
                    </Td>
                    <Td position={"relative"} textAlign={"center"}>
                    {gioi[i][1]}
                    </Td>
                    <Td position={"relative"} textAlign={"center"}>
                    {gioi[i][2]}
                    </Td>
                    <Td position={"relative"} textAlign={"center"}>
                    {gioi[i][3]}
                    </Td>
                  </Tr>
                ))}
          </Tbody>
          </Table>
        </>
    );
};

export default HvGioiComponent;
