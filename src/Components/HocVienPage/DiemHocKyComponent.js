import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Tfoot,
  Button,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  ModalFooter,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
} from "@chakra-ui/react";
//   import {
//     Modal,
//     ModalOverlay,
//     ModalContent,
//     ModalHeader,
//     ModalCloseButton,
//     ModalBody,
//     ModalFooter,
//     useDisclosure,
//   } from "@chakra-ui/react";
import DiemComponent from "./DiemComponents";
import React, { useEffect, useState } from "react";
import { Modal } from "bootstrap";
import { ModalBody, ModalHeader } from "react-bootstrap";
import phieuDiemAPI from "../../api/PhieuDiem";
import { useParams } from "react-router-dom";
const DiemHocKyComponent = (props) => {
  const DiemTBHocKy = 0;
  const [phieuDiem, setPhieuDiem] = useState([]);
  const { idHV } = useParams();
  const [diemCC, setDiemCC] = useState(0);
  const [diemTX, setDiemTX] = useState(0);
  const [diemThi, setDiemThi] = useState(0);
  const [diemThiLai, setDiemThiLai] = useState(0);
  const [lanThi, setLanThi] = useState(0);
  const hocVienId = idHV;

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    fetchPhieuDiem();
  }, []);
  const fetchPhieuDiem = async () => {
    setPhieuDiem(await phieuDiemAPI.get(idHV));
  };
  console.log(phieuDiem);
  const handleSubmit = async () => {
    try {
      const lopHocPhanId = "76878356-a9e8-4664-1bac-08dbeddacba9";
      const formData = {
        lopHocPhanId,
        hocVienId,
        diemCC,
        diemTX,
        diemThi,
        diemThiLai,
        lanThi,
      };

      await phieuDiemAPI.create(formData);
      onClose();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Table
        // bgcolor="red"
        variant="striped"
        size="sm"
        position={"relative"}
        top={"50px"}
        w={"90%"}
        left={"5%"}
      >
        <Thead>
          {/* <Tr>
            <Th colspan={"10"} style={{ textAlign: "center" }}>
              Học kỳ thứ {props.HocKy}
            </Th>
          </Tr> */}

          <Tr>
            <Th w={"2%"} textAlign={"center"}>
              STT
            </Th>
            <Th w={"15%"} textAlign={"center"}>
              TenHocPhan
            </Th>
            <Th w={"6%"} textAlign={"center"}>
              Học Kỳ
            </Th>
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
            <Th w={"6%"} textAlign={"center"}>
              LanThi
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
          {phieuDiem.map((item, index) => (
            <DiemComponent
              key={item.maPhieuDiem}
              stt={index + 1}
              HocKy={item.hocPhan.hocKy}
              TenHocPhan={item.hocPhan.tenHocPhan}
              SoTinChi={item.hocPhan.soTC}
              DiemChuyenCan={item.diemCC}
              DiemThuongXuyen={item.diemTX}
              DiemThiKetThucMon={item.diemThi}
              LanThi={item.lanThi}
            />
          ))}
          {/* <DiemComponent
            MaHocPhan={props.MaHocPhan}
            TenHocPhan={props.TenHocPhan}
            SoTinChi={props.SoTinChi}
            DiemChuyenCan={props.DiemChuyenCan}
            DiemThuongXuyen={props.DiemThuongXuyen}
            DiemThiKetThucMon={props.DiemThiKetThucMon}
            SoLanThiLai={props.SoLanThiLai}
          /> */}
        </Tbody>
        {/* <Tfoot>
          <Tr>
            <Th colspan={"7"} style={{ textAlign: "right" }}>
              Điểm trung bình học kỳ
            </Th>
            <Th w={"8%"} textAlign={"center"}>
              {}
            </Th>
          </Tr>
        </Tfoot> */}
      </Table>
    </>
  );
};

export default DiemHocKyComponent;
