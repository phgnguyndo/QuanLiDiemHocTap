import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import dtbAPI from "../../api/dtbAPI";

const KemComponent = (props) => {
  const hocKy = props.hocKy;
  const [dsKem, setDsKem] = useState([]);
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
      const kem = [];
      for (let i = 0; i < len; i++) {
        const tmp = dsDTB[i].hocKy;
        const dtb_tmp = dsDTB[i].dtb;
        if (tmp === hocKy) {
          if (dtb_tmp < 4 && dtb_tmp > 0) {
            temp[0] = dsDTB[i].hocVienId;
            temp[1] = dsDTB[i].hocVien.tenHV;
            temp[2] = dsDTB[i].hocVien.lopChuyenNganhId;
            temp[3] = dsDTB[i].dtb;
            kem.push(temp);
          }
        }
      }
      setDsKem(kem);
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
            Danh sách học viên kém
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
          {dsKem.map((item, i) => (
            <Tr>
              <Td textAlign={"center"}>{i + 1}</Td>
              <Td textAlign={"center"}>{dsKem[i][0]}</Td>
              <Td textAlign={"center"}>{dsKem[i][1]}</Td>
              <Td textAlign={"center"}>{dsKem[i][2]}</Td>
              <Td textAlign={"center"}>{dsKem[i][3]}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
};
export default KemComponent;
