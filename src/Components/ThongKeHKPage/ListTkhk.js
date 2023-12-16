import {
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
import phieuDiemAPI from "../../api/PhieuDiem";
import React, { useState, useEffect } from "react";
import TkhkComponent from "./TkhkComponent";

const ListTkhk = (props) => {
  const ListhocKy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [dsThongKe, setDsThongKe] = useState([]);
  const [dsThongKeTheoHK, setDsThongKeTheoHK] = useState([]);

  useEffect(() => {
    fetchThongKe();
  }, []);
  const fetchThongKe = async () => {
    setDsThongKe(await dtbAPI.getAll());
  };

  const [dsPhieuDiem, setDsPhieuDiem] = useState([]);
  useEffect(() => {
    fetchPhieuDiem();
  }, []);
  const fetchPhieuDiem = async () => {
    setDsPhieuDiem(await phieuDiemAPI.getAll());
  };

  const [hocKy, setHocKy] = useState();
  const hocBongA = [];
  const hocBongB = [];

  const dsIdHocVien = new Set(dsThongKe?.map((item) => item.hocVienId));
  // console.log(dsIdHocVien);
  var dsDatTieuChi1 = [Object];
  var xetHocVien_HocKy = [Object];
  
  for (let hk = 1; hk <= 10; hk++) {
    const xetHocKy = dsPhieuDiem.filter((item) => item.hocPhan.hocKy === hk);
    dsIdHocVien.forEach((id) => {
      xetHocVien_HocKy = xetHocKy?.filter((item) => item.hocVienId === id);
      // dsDatTieuChi1.push(xetHocVien_HocKy?.filter((item) => item.diemTBM >= 7.0));
    });
  };

  console.log(dsDatTieuChi1);
    const PhanLoai = async () => {};
    useEffect(() => {
      // dsIdHocVien.forEach((idHV) => {
      //   fetchPhieuDiem(idHV);
      // })
      // console.log(dsPhieuDiem);
    });

    const HandleSelectedChange = (hocKy) => {
      setDsThongKeTheoHK(dsThongKe?.filter((item) => item.hocKy === hocKy));
      console.log(dsThongKeTheoHK);
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
        <Box>
          <FormControl position={"relative"} top={"30px"} left={"170px"}>
            <FormLabel>Học kỳ</FormLabel>
            <Select
              w={"7%"}
              borderColor={"blackAlpha.900"}
              size={"sm"}
              id="hocKyInput"
              // onChange={HandleSelectedChange}
              onChange={(e) => {
                HandleSelectedChange(e.target.value);
              }}
            >
              {ListhocKy.map((hocKy, index) => (
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
                <Th textAlign={"center"}>Điểm TB</Th>
                <Th textAlign={"center"}>Học kỳ</Th>
                <Th textAlign={"center"}>Ghi chú</Th>
              </Tr>
            </Thead>
            <Tbody>
              {dsThongKeTheoHK?.map((item, i) => (
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
  }
export default ListTkhk;
