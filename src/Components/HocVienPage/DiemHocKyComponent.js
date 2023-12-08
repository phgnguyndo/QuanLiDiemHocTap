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
  } from '@chakra-ui/react';
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
  import DiemComponent from './DiemComponents';
import React, { useState } from 'react';
import { Modal } from 'bootstrap';
import { ModalBody, ModalHeader } from 'react-bootstrap';
import phieuDiemAPI from '../../api/PhieuDiem';
import { useParams } from 'react-router-dom';
const DiemHocKyComponent = (props)=>{

    const DiemTBHocKy = 0;



    const {idHV}=useParams();
    const [diemCC,setDiemCC] = useState(0);
    const [diemTX,setDiemTX] = useState(0);
    const [diemThi,setDiemThi] = useState(0);
    const [diemThiLai,setDiemThiLai] = useState(0);
    const [lanThi,setLanThi] = useState(0);
    const hocVienId=idHV;

    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
    const { isOpen, onOpen, onClose } = useDisclosure();


    const handleSubmit= async ()=>{
      try {
        const lopHocPhanId = "76878356-a9e8-4664-1bac-08dbeddacba9";
        const formData = {
          lopHocPhanId ,
          hocVienId ,
          diemCC ,
          diemTX ,
          diemThi ,
          diemThiLai ,
          lanThi 
        }
    
        await phieuDiemAPI.create(formData);
        onClose();
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
  
    };

    return(
        <>
        <Table variant="striped" colorScheme="teal" size="sm"  border="2px solid rgb(190,190,190)" marginTop={'10px'} marginBottom={'10px'}>
          <Thead>
          <Tr >
              <Th colspan={"10"} style={{ textAlign: "center" }}>Học kỳ thứ {props.HocKy}</Th>
          </Tr>

          <Tr bg={""}>
            <Th w={"9%"} textAlign={"center"}>
              MaHocPhan
            </Th>
            <Th w={"9%"} textAlign={"center"}>
              TenHocPhan
            </Th>
            {/* <Th w={"10%"} bg={"gray"} textAlign={"center"}>
              MaLCN
            </Th> */}
            <Th w={"15%"} textAlign={"center"}>
              SoTinChi
            </Th>
            <Th w={"15%"} textAlign={"center"}>
              DiemChuyenCan
            </Th>
            <Th w={"10%"} textAlign={"center"}>
              DiemThuongXuyen
            </Th>
            <Th w={"4%"} textAlign={"center"}>
              DiemThiKetThucMon
            </Th>
            <Th w={"10%"} textAlign={"center"}>
              SoLanThiLai
            </Th>
            <Th w={"8%"} textAlign={"center"}>
              DiemTBMon
            </Th>
            <Th colspan={"7"} w={"9%"} textAlign={"center"}>
              Tùy chọn
            </Th>
            </Tr>
          </Thead>
          <Tbody >
          {/* {HocPhan.map((hocPhan) => NhapDiemTungMonTuDong(hocPhan))} */}          
            <DiemComponent
              MaHocPhan={props.MaHocPhan}
              TenHocPhan={props.TenHocPhan}
              SoTinChi={props.SoTinChi}
              DiemChuyenCan={props.DiemChuyenCan}
              DiemThuongXuyen={props.DiemThuongXuyen}
              DiemThiKetThucMon={props.DiemThiKetThucMon}
              SoLanThiLai={props.SoLanThiLai}
            />         
        </Tbody>
          <Tfoot>
            <Tr >
              <Th colspan={"7"} style={{ textAlign: "right" }}>Điểm trung bình học kỳ</Th>
              <Th w={"8%"} textAlign={"center"}>{}</Th>
            </Tr>
          </Tfoot>
          </Table>
        </>
    );
};

export default DiemHocKyComponent;