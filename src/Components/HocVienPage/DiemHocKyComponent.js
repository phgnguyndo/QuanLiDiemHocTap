import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Tfoot
} from "@chakra-ui/react";
import DiemComponent from "./DiemComponents";
import React, { useEffect, useState } from "react";
const DiemHocKyComponent = (props) => {
  const { semester, phieuDiem } = props;
  const [diemTrungBinhHocKy, setDiemTrungBinhHocKy] = useState(0);
  const [diemTrungBinhNamHoc, setDiemTrungBinhNamHoc] = useState(0);

  const filteredPhieuDiem = phieuDiem?.filter(item => item.hocPhan.hocKy === semester);
  console.log(filteredPhieuDiem);

  useEffect(() => {
    // Tính điểm trung bình môn và điểm trung bình học kỳ
    const tinhDiemTrungBinh = () => {
      if (phieuDiem.length === 0) {
        setDiemTrungBinhHocKy(0);
        return;
      }

      let diemTrungBinhMonTotal = 0;
      let tongSoTinChi = 0;

      filteredPhieuDiem.forEach((item) => {
        const diemTrungBinhMon = item.diemCC * 0.1 + item.diemTX * 0.3 + item.diemThi * 0.6;
        diemTrungBinhMonTotal += diemTrungBinhMon * item.hocPhan.soTC;
        tongSoTinChi += item.hocPhan.soTC;
      });

      const diemTrungBinhHocKy = diemTrungBinhMonTotal / tongSoTinChi;
      setDiemTrungBinhHocKy(diemTrungBinhHocKy);
    };

    tinhDiemTrungBinh();
  }, [filteredPhieuDiem, semester]);

  useEffect(() => {
    // Tính điểm trung bình môn và điểm trung bình năm học
    const tinhDiemTrungBinhNamHoc = () => {
      if (phieuDiem.length === 0) {
        setDiemTrungBinhNamHoc(0);
        return;
      }

      let diemTrungBinhKy1 = 0;
      let diemTrungBinhKy2 = 0;

      // Tính điểm trung bình kỳ 1 và kỳ 2
      phieuDiem.forEach((item) => {
        if (item.hocPhan.hocKy === 1) {
          const diemTrungBinhMon = item.diemCC * 0.1 + item.diemTX * 0.3 + item.diemThi * 0.6;
          diemTrungBinhKy1 += diemTrungBinhMon * item.hocPhan.soTC;
        } else if (item.hocPhan.hocKy === 2) {
          const diemTrungBinhMon = item.diemCC * 0.1 + item.diemTX * 0.3 + item.diemThi * 0.6;
          diemTrungBinhKy2 += diemTrungBinhMon * item.hocPhan.soTC;
        }
      });

      const tongSoTinChiKy1 = phieuDiem
        .filter((item) => item.hocPhan.hocKy === 1)
        .reduce((total, item) => total + item.hocPhan.soTC, 0);

      const tongSoTinChiKy2 = phieuDiem
        .filter((item) => item.hocPhan.hocKy === 2)
        .reduce((total, item) => total + item.hocPhan.soTC, 0);

      const diemTrungBinhNamHoc =
        (diemTrungBinhKy1 / tongSoTinChiKy1 + 2 * (diemTrungBinhKy2 / tongSoTinChiKy2)) / 3;

      setDiemTrungBinhNamHoc(diemTrungBinhNamHoc);
    };

    tinhDiemTrungBinhNamHoc();
  }, [phieuDiem, semester]);
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
          <Tr>
            <Th colspan={"10"} style={{ textAlign: "center" }}>
              Học kỳ {props.HocKy}
            </Th>
          </Tr>

          <Tr bg={""}>
            <Th w={"2%"} textAlign={"center"}>
              STT
            </Th>
            <Th w={"15%"} textAlign={"center"}>
              TenHocPhan
            </Th>
            {/* <Th w={"6%"} textAlign={"center"}>
              Học Kỳ
            </Th> */}
            <Th w={"6%"} textAlign={"center"}>
              SoTC
            </Th>
            <Th w={"6%"} textAlign={"center"}>
              DiemCC
            </Th>
            <Th w={"6%"} textAlign={"center"}>
              DiemTX
            </Th>
            <Th w={"6%"} textAlign={"center"}>
              DiemThi
            </Th>
            <Th w={"6%"} textAlign={"center"} >
              DiemThiLai
            </Th>
            <Th w={"8%"} textAlign={"center"}>
              DiemTB
            </Th>
            <Th colspan={"7"} w={"9%"} textAlign={"center"}>
              Tùy chọn
            </Th>
          </Tr>
        </Thead>
        <Tbody>
        {filteredPhieuDiem.map((item, index) => (
            <DiemComponent
              key={item.maPhieuDiem}
              MaPhieuDiem={item.maPhieuDiem}
              stt={index + 1}
              HocKy={item.hocPhan.hocKy}
              TenHocPhan={item.hocPhan.tenHocPhan}
              SoTinChi={item.hocPhan.soTC}
              DiemChuyenCan={item.diemCC}
              DiemThuongXuyen={item.diemTX}
              DiemThiKetThucMon={item.diemThi}
              DiemThiLai={item.diemThiLai}
              LanThi={item.lanThi}
            />
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th colspan={"7"} style={{ textAlign: "right" }}>
              Điểm trung bình học kỳ
            </Th>
            <Th w={"8%"} textAlign={"center"}>
            {diemTrungBinhHocKy.toFixed(2)}
            </Th>
            {/* <Th w={"8%"} textAlign={"center"}>
            {diemTrungBinhNamHoc.toFixed(2)}
            </Th> */}
          </Tr>
        </Tfoot>
      </Table>
    </>
  );
};

export default DiemHocKyComponent;