import {
  Table,
  TableContainer,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Td,
  Tr,
  Select,
} from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState, useEffect  } from 'react';
import DiemHocKyComponent from './DiemHocKyComponent';
import { useParams } from 'react-router-dom';
import phieuDiemAPI from '../../api/PhieuDiem';
import hocPhanAPI from '../../api/hocPhanAPI';

// const HocKyThu = (props) => {
//   return (
//     <Tr >
//       <Th colspan={"7"} style={{ textAlign: "center" }}>Học kỳ thứ {props}</Th>
//     </Tr>
//   );
// };
// export default HocKyThu;


const DiemHocVien = (props) => {
  // Tính điểm trung bình môn và học kỳ
  // const diemTBMonHocKy = students.reduce((acc, student) => {
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
  
  // Tính điểm trung bình học kỳ
  // Object.keys(diemTBMonHocKy).forEach((hocKy) => {
  //   diemTBMonHocKy[hocKy].diemTBHocKy = (
  //     diemTBMonHocKy[hocKy].totalDiem / diemTBMonHocKy[hocKy].count
  //   ).toFixed(2);
  // });

  // const handleGetMaMH = async () => {

  // }

  const {idHV}=useParams()
  const [diemCC,setDiemCC] = useState(0);
  const [diemTX,setDiemTX] = useState(0);
  const [diemThi,setDiemThi] = useState(0);
  const [diemThiLai,setDiemThiLai] = useState(0);
  const [lanThi,setLanThi] = useState(0);
  const [tenHocPhan, setTenHocPhan] = useState("")
  const [maHocPhan, setMaHocPhan] = useState('');

  const hocVienId=idHV

  const handleSubmitThemHV= async ()=>{
    try {
      // const formData1 = new FormData();

      // formData.append("hocPhanId",maHP);
      // formData.append("hocVienId",hocVienId);
      // formData.append("diemCC",diemCC);
      // formData.append("diemTX",diemTX);
      // formData.append("diemThi",diemThi);
      // formData.append("diemThiLai",diemThiLai);
      // formData.append("lanThi",lanThi);
      const hocPhanId = maHocPhan;
      const formData = {
        hocPhanId,
        hocVienId,
        diemCC,
        diemTX,
        diemThi,
        diemThiLai,
        lanThi
      }
      await phieuDiemAPI.create(formData);
      onClose();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }

  };
  // console.log(idHV);
  const [phieuDiem, setPhieuDiem] = useState([]);
  useEffect(() => {
    fetchPhieuDiem();
  }, []);
  const fetchPhieuDiem = async () => {
    setPhieuDiem(await phieuDiemAPI.get(idHV));
  };
  // console.log(phieuDiem);


  const [dsHocPhan, setDsHocPhan] = useState([]);
  useEffect(() => {
    fetchHocPhan();
  }, []);
  
  const fetchHocPhan = async () => {
    setDsHocPhan(await hocPhanAPI.getAll());
  };
  console.log(dsHocPhan);

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

    // const [selectedCourse, setSelectedCourse] = useState(null);



  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding:'10px'
    }}>
      <div style={{ fontFamily: 'cursive', fontSize: '40px', color: 'Red' }}>Bảng điểm của học viên </div>
      <TableContainer padding="20px" variant="striped" colorScheme="teal" size="sm"  border="2px solid rgb(190,190,190)">
      <Button
              onClick={onOpen}
              variant="solid"
              colorScheme="blue"
              marginRight={"10px"}
              bg={"rgb(243,66,33)"}
              // onClick={handleGetMaMH}
            >
              Thêm thông tin
            </Button>
        <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Thêm điểm</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
           
            
      <FormControl>
        <FormLabel>Tên học phần</FormLabel>
          <Select
            ref={finalRef}
            placeholder="Chọn học phần"
            // value={selectedCourse}
            onChange={(e)=>{
              setMaHocPhan(e.target.value);
            }}
          >
            {dsHocPhan?.map((item) => (
              <option key={item.maHocPhan} value={item.maHocPhan}>
                {item.tenHocPhan} 
              </option>
            ))}
          </Select>
      </FormControl>

            <FormControl>
              <FormLabel>Điểm Chuyên cần</FormLabel>
              <Input ref={finalRef} type="text" placeholder="Trên 0 dưới 10" onChange={(e)=>{setDiemCC(parseFloat(e.target.value))}}/>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Điểm thường xuyên</FormLabel>
              <Input
                placeholder="Trên 0 dưới 10"
                id="quanSoInput"
                onChange={(e)=>{setDiemTX(parseFloat(e.target.value))}}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Điểm Thi Kết thúc môn</FormLabel>
              <Input placeholder="VD: Giải tích" onChange={(e)=>{setDiemThi(parseFloat(e.target.value))}}/>
            </FormControl>
            <FormControl>
              <FormLabel>Điểm Thi Lại</FormLabel>
              <Input placeholder="VD: Giải tích" onChange={(e)=>{setDiemThiLai(parseFloat(e.target.value))}}/>
            </FormControl>
            <FormControl>
              <FormLabel>Số lần thi lại</FormLabel>
              <Input placeholder="VD: Giải tích" onChange={(e)=>{setLanThi(parseInt(e.target.value))}}/>
            </FormControl>



          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmitThemHV}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      

            
        <Table variant="striped" colorScheme="teal" size="sm"   border="2px solid rgb(190,190,190)" marginTop={'10px'}>
          {/* <DiemHocKyComponent/> */}
          {phieuDiem?.map((item) => (
            <DiemHocKyComponent
              MaHocPhan = {item.hocPhanId}
              HocKy = {item.hocPhan.hocKy}
              SoTinChi = {item.hocPhan.soTC}
              TenHocPhan = {item.hocPhan.tenHocPhan}
              DiemChuyenCan={item.diemCC}
              DiemThuongXuyen={item.diemTX}
              DiemThiKetThucMon={item.diemThi}
              DiemThiLai={item.diemThiLai}
              SoLanThiLai={item.lanThi}
            />
          ))}
          {/* <DiemHocKyComponent HocKy = {2}/>
          <DiemHocKyComponent HocKy = {3}/>
          <DiemHocKyComponent HocKy = {4}/> */}
        </Table>
      </TableContainer>
    </div>
  );
};

export default DiemHocVien;
