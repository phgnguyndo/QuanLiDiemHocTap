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
import dtbAPI from "../../api/dtbAPI";
import hocvienAPI from "../../api/hocvienAPI";
import TableTK from "./TableTK";

const HvXuatSacComponent = (props) => {
  const { hv_diem } = props;
  // const hv_diem = props.hv_diem;
  const [dsDTB, setdsDTB] = useState([]);
  const [dsHV, setdsHV] = useState([]);

  const namHoc = props.namHoc;
  const [xuatSac, setDsXS] = useState([]);

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
      const xuatSac = [];

      let j = 0;
      switch (namHoc) {
        case "1":
          for (let i = 0; i < len; i++) {
            if (hv_diem[i][1] >= 9) {
              const newRows = [dsHV[i].maHV, dsHV[i].tenHV,dsHV[i].lopChuyenNganhId, hv_diem[i][1]]
              xuatSac.push(newRows);
              j++;
            }
          }
          break;
        case "2":
          for (let i = 0; i < len; i++) {
            if (hv_diem[i][2] >= 9) {
              const newRows = [dsHV[i].maHV, dsHV[i].tenHV,dsHV[i].lopChuyenNganhId, hv_diem[i][2]]
              xuatSac.push(newRows);
              j++;
            }
          }
          break;
        case "3":
          for (let i = 0; i < len; i++) {
            if (hv_diem[i][3] >= 9) {
              const newRows = [dsHV[i].maHV, dsHV[i].tenHV,dsHV[i].lopChuyenNganhId, hv_diem[i][3]]
              xuatSac.push(newRows);
              j++;
            }
          }
          break;
        case "4":
          for (let i = 0; i < len; i++) {
            if (hv_diem[i][4] >= 9) {
              const newRows = [dsHV[i].maHV, dsHV[i].tenHV,dsHV[i].lopChuyenNganhId, hv_diem[i][4]]
              xuatSac.push(newRows);
              j++;
            }
          }
          break;
        case "5":
          for (let i = 0; i < len; i++) {
            if (hv_diem[i][5] >= 9) {
              const newRows = [dsHV[i].maHV, dsHV[i].tenHV,dsHV[i].lopChuyenNganhId, hv_diem[i][5]]
              xuatSac.push(newRows);
              j++;
            }
          }
          break;
        default:
          console.log("It's something else.");
      }
      setDsXS(xuatSac);
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
        {xuatSac.length !== 0 && (
          <>
            <TableTK name="xuất sắc" />
            <Tbody>
              {xuatSac.map((item, i) => (
                <Tr>
                  <Td position={"relative"} textAlign={"center"}>
                    {i + 1}
                  </Td>
                  <Td position={"relative"} textAlign={"center"}>
                    {xuatSac[i][0]}
                  </Td>
                  <Td position={"relative"} textAlign={"center"}>
                    {xuatSac[i][1]}
                  </Td>
                  <Td position={"relative"} textAlign={"center"}>
                    {xuatSac[i][2]}
                  </Td>
                  <Td position={"relative"} textAlign={"center"}>
                    {xuatSac[i][3]}
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

export default HvXuatSacComponent;
