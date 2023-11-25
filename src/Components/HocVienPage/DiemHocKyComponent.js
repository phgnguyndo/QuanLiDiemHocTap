import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Tfoot,
    Button,
    FormControl,
    FormLabel,
    Input,
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
const DiemHocKyComponent = (props)=>{



    const HocPhan = [
        {
            TenHocPhan: 'Giải tích 1',
            SoTinChi: 4,
            DiemChuyenCan: 10,
            DiemThuongXuyen: 7,
            DiemThiKetThucMon: 10,
            SoLanThiLai: 0,
            HocKy: 1,
          },
        {
          TenHocPhan: 'Lịch sử Đảng Cộng sản Việt nam',
          SoTinChi: 4,
          DiemChuyenCan: 9,
          DiemThuongXuyen: 7,
          DiemThiKetThucMon: 8,
          SoLanThiLai: 0,
          HocKy: 1,
          },
          {
            TenHocPhan: 'Toán chuyên đề',
            SoTinChi: 4,
            DiemChuyenCan: 7,
            DiemThuongXuyen: 5,
            DiemThiKetThucMon: 6,
            SoLanThiLai: 0,
            HocKy: 1,
          },
          {
            TenHocPhan: 'Toán chuyên đề',
            SoTinChi: 4,
            DiemChuyenCan: 7,
            DiemThuongXuyen: 5,
            DiemThiKetThucMon: 6,
            SoLanThiLai: 0,
            HocKy: 1,
          },
          {
            TenHocPhan: 'Toán chuyên đề',
            SoTinChi: 4,
            DiemChuyenCan: 7,
            DiemThuongXuyen: 5,
            DiemThiKetThucMon: 6,
            SoLanThiLai: 0,
            HocKy: 1,
          },
          {
            TenHocPhan: 'Toán chuyên đề',
            SoTinChi: 4,
            DiemChuyenCan: 7,
            DiemThuongXuyen: 5,
            DiemThiKetThucMon: 6,
            SoLanThiLai: 0,
            HocKy: 1,
          },
      ];


    
    // // Tính điểm trung bình môn và học kỳ
    // const diemTBMonHocKy = HocPhan.reduce((acc, student) => {
    //   const diemTBMon = (
    //     student.attributes.DiemChuyenCan * 0.1 +
    //     student.attributes.DiemThuongXuyen * 0.3 +
    //     student.attributes.DiemThiKetThucMon * 0.6
    //   ).toFixed(2);
  
    //   if (!acc[student.attributes.HocKy]) {
    //     acc[student.attributes.HocKy] = {
    //       totalDiem: 0,
    //       count: 0,
    //     };
    //   }
  
    //   acc[student.attributes.HocKy].totalDiem += parseFloat(diemTBMon);
    //   acc[student.attributes.HocKy].count += 1;
  
    //   return acc;
    // }, {});
  
    // // Tính điểm trung bình học kỳ
    // Object.keys(diemTBMonHocKy).forEach((hocKy) => {
    //   diemTBMonHocKy[hocKy].diemTBHocKy = (
    //     diemTBMonHocKy[hocKy].totalDiem / diemTBMonHocKy[hocKy].count
    //   ).toFixed(2);
      // });




  const NhapDiemTungMonTuDong = (props) =>{
    return (
      <DiemComponent
        TenHocPhan={props.TenHocPhan}
        SoTinChi={props.SoTinChi}
        DiemChuyenCan={props.DiemChuyenCan}
        DiemThuongXuyen={props.DiemThuongXuyen}
        DiemThiKetThucMon={props.DiemThiKetThucMon}
        SoLanThiLai={props.SoLanThiLai}
      />
    );
  };

    return(
        <>
        <Table variant="striped" colorScheme="teal" size="sm"  border="2px solid rgb(190,190,190)" marginTop={'10px'} marginBottom={'10px'}>
          <Thead>
          <Tr >
              <Th colspan={"7"} style={{ textAlign: "center" }}>Học kỳ thứ {props.HocKy}</Th>
          </Tr>

          <Tr bg={""}>
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
            </Tr>
          </Thead>
          {HocPhan.map((hocPhan) => NhapDiemTungMonTuDong(hocPhan))}
          <Tfoot>
            <Tr >
              <Th colspan={"6"} style={{ textAlign: "right" }}>Điểm trung bình học kỳ</Th>
            </Tr>
          </Tfoot>
          </Table>
        </>
    );
};

export default DiemHocKyComponent;