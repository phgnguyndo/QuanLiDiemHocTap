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

const HvGioiComponent = (props) => {
  const { hv_diem } = props;
  // const hv_diem = props.hv_diem;
  const [dsDTB, setdsDTB] = useState([]);
  const [dsHV, setdsHV] = useState([]);

  const namHoc = props.namHoc;
  const [gioi, setDsGioi] = useState([]);

  // console.log("jdf");
  // console.log(hv_diem);

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
    const phanLoaiHocVienGioi = (hv_diem, dsHV, namHoc) => {
      let len = dsHV.length;
      const gioi = [];
     
      let j = 0;
      
      switch (namHoc) {
        case "1":
          for (let i = 0; i < len; i++) {
            if (9 > hv_diem[i][1] && hv_diem[i][1] >= 8) {
              const newRows = [dsHV[i].maHV, dsHV[i].tenHV,dsHV[i].lopChuyenNganhId, hv_diem[i][1]]
              gioi.push(newRows);
              j++;
            }
          }
          break;
        case "2":
          for (let i = 0; i < len; i++) {
            if (9 > hv_diem[i][2] && hv_diem[i][2] >= 8) {
              const newRows = [dsHV[i].maHV, dsHV[i].tenHV,dsHV[i].lopChuyenNganhId, hv_diem[i][2]]
              gioi.push(newRows);
              j++;
            }
          }
          break;
        case "3":
          for (let i = 0; i < len; i++) {
            if (9 > hv_diem[i][3] && hv_diem[i][3] >= 8) {
              const newRows = [dsHV[i].maHV, dsHV[i].tenHV,dsHV[i].lopChuyenNganhId, hv_diem[i][3]]
              gioi.push(newRows);
              j++;
            }
          }
          break;
        case "4":
          for (let i = 0; i < len; i++) {
            if (9 > hv_diem[i][4] && hv_diem[i][4] >= 8) {
              const newRows = [dsHV[i].maHV, dsHV[i].tenHV,dsHV[i].lopChuyenNganhId, hv_diem[i][4]]
              gioi.push(newRows);
              j++;
            }
          }
          break;
        case "5":
          for (let i = 0; i < len; i++) {
            if (9 > hv_diem[i][5] && hv_diem[i][5] >= 8) {
              const newRows = [dsHV[i].maHV, dsHV[i].tenHV,dsHV[i].lopChuyenNganhId, hv_diem[i][5]]
              gioi.push(newRows);
              j++;
            }
          }
          break;
        default:
          console.log("It's something else.");
      }
      // console.log("DS HV gioi");
      // console.log(gioi);
      setDsGioi(gioi);
    };
    phanLoaiHocVienGioi(hv_diem, dsHV, namHoc);
  }, [namHoc]);

  // console.log("ds hv xuat sac 2222");
  // console.log(gioi);

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
        {gioi === null && (
          <>
            <TableTK name="giỏi" />
            <Tbody>
              {gioi.map((item, i) => (
                <Tr>
                  <Td position={"relative"} textAlign={"center"}>
                    {i + 1}
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
          </>
        )}
      </Table>
    </>
  );
};

export default HvGioiComponent;
