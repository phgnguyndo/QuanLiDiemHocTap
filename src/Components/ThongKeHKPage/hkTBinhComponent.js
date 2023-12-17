import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import dtbAPI from "../../api/dtbAPI";

const TBinhComponent = (props) => {
  const hocKy = props.hocKy;
  const [dsTB, setDsTB] = useState([]);
  const [dsDTB, setDsDTB] = useState([]);

  useEffect(() => {
    fetchDsDTB();
  }, []);
  const fetchDsDTB = async () => {
    setDsDTB(await dtbAPI.getAll());
  };

  useEffect(() => {
    const phanLoaiHocKy = (dsDTB, hocKy) => {
      let len = dsDTB.length;
      const temp = [];
      const tb = [];
      for (let i = 0; i < len; i++) {
        const tmp = dsDTB[i].hocKy;
        const dtb_tmp = dsDTB[i].dtb;
        if (tmp === hocKy) {
          if (dtb_tmp < 7 && dtb_tmp >= 5) {
            temp[0] = dsDTB[i].hocVienId;
            temp[1] = dsDTB[i].hocVien.tenHV;
            temp[2] = dsDTB[i].hocVien.lopChuyenNganhId;
            temp[3] = dsDTB[i].dtb;
            tb.push(temp);
          }
        }
      }
      setDsTB(tb);
    };
    phanLoaiHocKy(dsDTB, hocKy);
  }, [dsDTB, hocKy]);

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
        <Thead>
          <Tr
            style={{
              fontSize: "20px",
              fontFamily: "inherit",
              fontWeight: "bold",
              color: "rgb(91, 138, 114)",
            }}
          >
            Danh sách học viên trung bình
          </Tr>
          <Tr bg={"rgb(182, 187, 196)"}>
            <Th w={"3%"} textAlign={"center"}>
              STT
            </Th>
            <Th w={"8%"} textAlign={"center"}>
              Mã HV
            </Th>
            <Th w={"20%"} textAlign={"center"}>
              Tên học viên
            </Th>
            <Th w={"10%"} textAlign={"center"}>
              Lớp chuyên ngành
            </Th>
            <Th w={"5%"} textAlign={"center"}>
              Điểm trung bình
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {dsTB.map((item, i) => (
            <Tr>
              <Td textAlign={"center"}>{i + 1}</Td>
              <Td textAlign={"center"}>{dsTB[i][0]}</Td>
              <Td textAlign={"center"}>{dsTB[i][1]}</Td>
              <Td textAlign={"center"}>{dsTB[i][2]}</Td>
              <Td textAlign={"center"}>{dsTB[i][3]}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
};
export default TBinhComponent;
