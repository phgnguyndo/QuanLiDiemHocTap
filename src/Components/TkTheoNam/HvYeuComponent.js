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
  import dtbAPI from "../../api/dtbAPI";
  import hocvienAPI from "../../api/hocvienAPI";
  import TableTK from "./TableTK";
  
  const HvYeuComponent = (props) => {
    const { hv_diem } = props;
    // const hv_diem = props.hv_diem;
    const [dsDTB, setdsDTB] = useState([]);
    const [dsHV, setdsHV] = useState([]);
  
    const namHoc = props.namHoc;
    const [yeu, setDsXS] = useState([]);
  
    useEffect(() => {
      fetchDsDTB();
    }, []);
    const fetchDsDTB = async () => {
      setdsDTB(await dtbAPI.getAll());
    };
  
    useEffect(() => {
      fetchDsHV();
    }, []);
    const fetchDsHV = async () => {
      setdsHV(await hocvienAPI.getAll(1, 100));
    };
    //xét học viên có điểm trung bình năm xuất sắc
    useEffect(() => {
      const phanLoaiHocVienXS = (hv_diem, dsHV, namHoc) => {
        let len = dsHV.length;
        const yeu = [];
  
        let j = 0;
        switch (namHoc) {
          case "1":
            for (let i = 0; i < len; i++) {
              if (5 > hv_diem[i]?.[1] && hv_diem[i]?.[1] >= 4) {
                const newRows = [dsHV[i].maHV, dsHV[i].tenHV,dsHV[i].lopChuyenNganhId, hv_diem[i][1]]
                yeu.push(newRows);
                j++;
              }
            }
            break;
          case "2":
            for (let i = 0; i < len; i++) {
              if (5 > hv_diem[i]?.[2] && hv_diem[i]?.[2] >= 4) {
                const newRows = [dsHV[i].maHV, dsHV[i].tenHV,dsHV[i].lopChuyenNganhId, hv_diem[i][2]]
                yeu.push(newRows);
                j++;
              }
            }
            break;
          case "3":
            for (let i = 0; i < len; i++) {
              if (5 > hv_diem[i]?.[3] && hv_diem[i]?.[3] >= 4) {
                const newRows = [dsHV[i].maHV, dsHV[i].tenHV,dsHV[i].lopChuyenNganhId, hv_diem[i][3]]
                yeu.push(newRows);
                j++;
              }
            }
            break;
          case "4":
            for (let i = 0; i < len; i++) {
              if (5 > hv_diem[i]?.[4] && hv_diem[i]?.[4] >= 4) {
                const newRows = [dsHV[i].maHV, dsHV[i].tenHV,dsHV[i].lopChuyenNganhId, hv_diem[i][4]]
                yeu.push(newRows);
                j++;
              }
            }
            break;
          case "5":
            for (let i = 0; i < len; i++) {
              if (5 > hv_diem[i]?.[5] && hv_diem[i]?.[5] >= 4) {
                const newRows = [dsHV[i].maHV, dsHV[i].tenHV,dsHV[i].lopChuyenNganhId, hv_diem[i][5]]
                yeu.push(newRows);
                j++;
              }
            }
            break;
          default:
            console.log("It's something else.");
        }
        setDsXS(yeu);
      };
      phanLoaiHocVienXS(hv_diem, dsHV, namHoc);
    }, [namHoc]);
  
    return (
      <>
        <Table
  variant="striped"
          size="sm"
          position={"relative"}
          marginTop={"50px"}
          w={"90%"}
          left={"5%"}
        >
          {yeu.length !== 0 && (
            <>
              <TableTK name="yếu" />
              <Tbody>
                {yeu.map((item, i) => (
                  <Tr>
                    <Td position={"relative"} textAlign={"center"}>
                      {i + 1}
                    </Td>
                    <Td position={"relative"} textAlign={"center"}>
                      {yeu[i][0]}
                    </Td>
                    <Td position={"relative"} textAlign={"center"}>
                      {yeu[i][1]}
                    </Td>
                    <Td position={"relative"} textAlign={"center"}>
                      {yeu[i][2]}
                    </Td>
                    <Td position={"relative"} textAlign={"center"}>
                      {yeu[i][3]}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </>
          )}
        </Table>
      </>
    );
  };
  
  export default HvYeuComponent;