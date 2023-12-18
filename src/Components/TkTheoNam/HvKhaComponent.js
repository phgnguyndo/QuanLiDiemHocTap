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

const HvKhaComponent = (props) => {
  const { hv_diem } = props;
  // const hv_diem = props.hv_diem;
  const [dsDTB, setdsDTB] = useState([]);
  const [dsHV, setdsHV] = useState([]);

  const namHoc = props.namHoc;
  const [kha, setDsXS] = useState([]);

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
  // console.log(kha);
  //xét học viên có điểm trung bình năm xuất sắc
  useEffect(() => {
    const phanLoaiHocVienXS = (hv_diem, dsHV, namHoc) => {
      let len = dsHV.length;

      const kha = []; {/*new Array(0).fill(len).map(() => new Array(4).fill());*/}
      // console.log(kha);
      let j = 0;
      switch (namHoc) {
        case "1":
          for (let i = 0; i < len; i++) {
            if (8 > hv_diem[i]?.[1] && hv_diem[i]?.[1] >= 7) {
              const newRows = [dsHV[i].maHV, dsHV[i].tenHV,dsHV[i].lopChuyenNganhId, hv_diem[i][1]]
              kha.push(newRows);
              j++;
            }
          }
          break;
        case "2":
          for (let i = 0; i < len; i++) {
            if (8 > hv_diem[i]?.[2] && hv_diem[i]?.[2] >= 7) {
              const newRows = [dsHV[i].maHV, dsHV[i].tenHV,dsHV[i].lopChuyenNganhId, hv_diem[i][2]]
              kha.push(newRows);
              j++;
            }
          }
          break;
        case "3":
          for (let i = 0; i < len; i++) {
            if (8 > hv_diem[i]?.[3] && hv_diem[i]?.[3] >= 7) {
              const newRows = [dsHV[i].maHV, dsHV[i].tenHV,dsHV[i].lopChuyenNganhId, hv_diem[i][3]]
              kha.push(newRows);
              j++;
            }
          }
          break;
        case "4":
          for (let i = 0; i < len; i++) {
            if (8 > hv_diem[i]?.[4] && hv_diem[i]?.[4] >= 7) {
              const newRows = [dsHV[i].maHV, dsHV[i].tenHV,dsHV[i].lopChuyenNganhId, hv_diem[i][4]]
              kha.push(newRows);
              j++;
            }
          }
          break;
        case "5":
          for (let i = 0; i < len; i++) {
            if (8 > hv_diem[i]?.[5] && hv_diem[i]?.[5] >= 7) {
              const newRows = [dsHV[i].maHV, dsHV[i].tenHV,dsHV[i].lopChuyenNganhId, hv_diem[i][5]]
              kha.push(newRows);
              j++;
            }
          }
          break;
        default:
          console.log("It's something else.");
      }
      setDsXS(kha);
// console.log(kha);
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
        {kha.length !==0 && (
          <>
            <TableTK name="khá" />
            <Tbody>
              {kha?.map((item, i) => (
                <Tr>
                  <Td position={"relative"} textAlign={"center"}>
                    {i + 1}
                  </Td>
                  <Td position={"relative"} textAlign={"center"}>
                    {kha[i][0]}
                  </Td>
                  <Td position={"relative"} textAlign={"center"}>
                    {kha[i][1]}
                  </Td>
                  <Td position={"relative"} textAlign={"center"}>
                    {kha[i][2]}
                  </Td>
                  <Td position={"relative"} textAlign={"center"}>
                    {kha[i][3]}
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

export default HvKhaComponent;