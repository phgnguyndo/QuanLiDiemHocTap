import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { React, useEffect, useState } from "react";
import dtbAPI from "../../api/dtbAPI";
import phieuDiemAPI from "../../api/PhieuDiem";

const HBongBComponent = (props) => {
  const hocKy = props.hocKy;
  const [dsHocBong, setDsHocBong] = useState([]);
  const [dsDTB, setDsDTB] = useState([]);
  const [dsPhieuDiem, setDsPhieuDiem] = useState([]);

  useEffect(() => {
    fetchDsDTB();
  }, []);
  const fetchDsDTB = async () => {
    setDsDTB(await dtbAPI.getAll());
  };

  useEffect(() => {
    fetchPhieuDiem();
  }, []);
  const fetchPhieuDiem = async () => {
    setDsPhieuDiem(await phieuDiemAPI.getAll());
  };

  useEffect(() => {
    const phanLoaiHocBong = (dsDTB, dsPhieuDiem, hocKy) => {
      let len1 = dsDTB.length;
      let len2 = dsPhieuDiem.length;

      const dk1 = [];
      const pDiemHK = [];
      const dsHocBongB = [];
      for (let i = 0; i < len1; i++) {
        const temp = [];
        const tmp = dsDTB[i].hocKy;
        const dtb_tmp = dsDTB[i].dtb;
        if (tmp === hocKy) {
          if (dtb_tmp < 9 && dtb_tmp >= 8.5) {
            temp[0] = dsDTB[i].hocVienId;
            temp[1] = dsDTB[i].hocVien.tenHV;
            temp[2] = dsDTB[i].hocVien.lopChuyenNganhId;
            temp[3] = dsDTB[i].dtb;
            dk1.push(temp);
          }
        }
      }

      for (let i = 0; i < len2; i++) {
        const tmp = dsPhieuDiem[i].hocPhan.hocKy;
        const pd_hk = [];
        if (tmp === hocKy) {
          pd_hk[0] = dsPhieuDiem[i].hocVienId;
          pd_hk[1] = dsPhieuDiem[i].hocPhanId;
          pd_hk[2] = dsPhieuDiem[i].diemTBM;
          pDiemHK.push(pd_hk);
        }
      }

      let len3 = dk1.length;
      let len4 = pDiemHK.length;
      for (let i = 0; i < len3; i++) {
        const hv = dk1[i][0];
        dsHocBongB.push(dk1[i]);
        for (let j = 0; j < len4; j++) {
          const tmp = pDiemHK[j][0];
          const diemHP = pDiemHK[j][2];
          if (tmp === hv) {
            if (diemHP < 7) {
              dsHocBongB.pop(dk1[i]);
              break;
            }
          }
        }
      }
      setDsHocBong(dsHocBongB);
    };
    phanLoaiHocBong(dsDTB, dsPhieuDiem, hocKy);
  }, [dsDTB, dsPhieuDiem, hocKy]);

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
            Danh sách học viên học bổng loại B
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
          {dsHocBong.map((item, i) => (
            <Tr>
              <Td textAlign={"center"}>{i + 1}</Td>
              <Td textAlign={"center"}>{dsHocBong[i][0]}</Td>
              <Td textAlign={"center"}>{dsHocBong[i][1]}</Td>
              <Td textAlign={"center"}>{dsHocBong[i][2]}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
};
export default HBongBComponent;
