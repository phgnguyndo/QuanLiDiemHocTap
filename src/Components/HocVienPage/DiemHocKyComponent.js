import { Table, Thead, Tbody, Tr, Th, Tfoot } from "@chakra-ui/react";
import DiemComponent from "./DiemComponents";
import React, { useEffect, useState } from "react";
import dtbAPI from "../../api/dtbAPI";
import { useParams } from "react-router-dom";
import StorageKeys from "../../constance/storage-key";
const DiemHocKyComponent = (props) => {
  const user = JSON.parse(localStorage.getItem(StorageKeys.USER));
  const isDaiDoi = user.role === "user1";
  const { idHV } = useParams();
  const hocVienId = idHV;
  const { semester, phieuDiem } = props;
  const [diemTrungBinhHocKy, setDiemTrungBinhHocKy] = useState(0);
  const [diemTrungBinhNamHoc, setDiemTrungBinhNamHoc] = useState(0);
  const [isDiemTrungBinhHocKyUpdated, setIsDiemTrungBinhHocKyUpdated] =
    useState(false);

  const filteredPhieuDiem = phieuDiem?.filter(
    (item) => item.hocPhan.hocKy === semester
  );

  useEffect(() => {
    const tinhDiemTrungBinh = () => {
      if (phieuDiem.length === 0 || !semester) {
        setDiemTrungBinhHocKy(0);
        return;
      }

      let diemTrungBinhMonTotal = 0;
      let tongSoTinChi = 0;

      filteredPhieuDiem.forEach((item) => {
        const diemTrungBinhMon =
          item.diemCC * 0.1 + item.diemTX * 0.3 + item.diemThi * 0.6;
        diemTrungBinhMonTotal += diemTrungBinhMon * item.hocPhan.soTC;
        tongSoTinChi += item.hocPhan.soTC;
      });

      const diemTrungBinhHocKy =
        tongSoTinChi > 0 ? diemTrungBinhMonTotal / tongSoTinChi : 0;

      setDiemTrungBinhHocKy(diemTrungBinhHocKy);
      setIsDiemTrungBinhHocKyUpdated(true);
    };

    tinhDiemTrungBinh();
  }, [phieuDiem, semester]);

  const calculateTongSoTinChi = () => {
    if (filteredPhieuDiem.length === 0) {
      return 0;
    }

    let tongSoTinChi = 0;

    filteredPhieuDiem.forEach((item) => {
      tongSoTinChi += item.hocPhan.soTC;
    });

    return tongSoTinChi;
  };

  const handUpdateDtb = async () => {
    try {
      const dtb = diemTrungBinhHocKy;
      const tongTC = calculateTongSoTinChi();
      const formdata = { dtb, tongTC };
      await dtbAPI.update(semester, hocVienId, formdata);
      // alert(diemTrungBinhHocKy);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (isDiemTrungBinhHocKyUpdated) {
      // alert(diemTrungBinhHocKy);
      handUpdateDtb();
      setIsDiemTrungBinhHocKyUpdated(false);
    }
  }, [diemTrungBinhHocKy, isDiemTrungBinhHocKyUpdated]);

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
          const diemTrungBinhMon =
            item.diemCC * 0.1 + item.diemTX * 0.3 + item.diemThi * 0.6;
          diemTrungBinhKy1 += diemTrungBinhMon * item.hocPhan.soTC;
        } else if (item.hocPhan.hocKy === 2) {
          const diemTrungBinhMon =
            item.diemCC * 0.1 + item.diemTX * 0.3 + item.diemThi * 0.6;
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
        (diemTrungBinhKy1 / tongSoTinChiKy1 +
          2 * (diemTrungBinhKy2 / tongSoTinChiKy2)) /
        3;

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

          <Tr bg={"rgb(182,187,196)"}>
            <Th w={"2%"} textAlign={"center"}>
              STT
            </Th>
            <Th w={"15%"} textAlign={"center"}>
              Tên học phần
            </Th>
            {/* <Th w={"6%"} textAlign={"center"}>
              Học Kỳ
            </Th> */}
            <Th w={"6%"} textAlign={"center"}>
              Số TC
            </Th>
            <Th w={"6%"} textAlign={"center"}>
              Điểm CC
            </Th>
            <Th w={"6%"} textAlign={"center"}>
              Điểm TX
            </Th>
            <Th w={"6%"} textAlign={"center"}>
              Điểm Thi
            </Th>
            {/* <Th w={"6%"} textAlign={"center"}>
              Điểm thi lại
            </Th> */}
            <Th w={"8%"} textAlign={"center"}>
              Điểm TB
            </Th>
            {/* {isDaiDoi && ( */}
            <Th colspan={"7"} w={"9%"} textAlign={"center"}>
              {isDaiDoi ? "Tùy chọn" : "Ghi chú"}
            </Th>
            {/* )} */}
          </Tr>
        </Thead>
        <Tbody>
          {filteredPhieuDiem.map((item, index) => (
            <DiemComponent
              key={item.maPhieuDiem}
              MaPhieuDiem={item.maPhieuDiem}
              stt={index + 1}
              HocKy={item.hocPhan.hocKy}
              MaHocPhan={item.hocPhan.maHocPhan}
              TenHocPhan={item.hocPhan.tenHocPhan}
              SoTinChi={item.hocPhan.soTC}
              DiemChuyenCan={item.diemCC}
              DiemThuongXuyen={item.diemTX}
              DiemThiKetThucMon={item.diemThi}
              DiemTBM={item.diemTBM}
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
            <Th w={"8%"} textAlign={"center"} color={"red"} position={"relative"} left={"-4%"}>
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
