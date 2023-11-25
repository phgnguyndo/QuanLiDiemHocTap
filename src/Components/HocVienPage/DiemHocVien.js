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
import React from 'react';
import DiemHocKyComponent from './DiemHocKyComponent';

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
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleSubmit=()=>{}
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
              <FormLabel>Học Kỳ</FormLabel>
              <Input placeholder="VD: 1" />
            </FormControl>
            <FormControl>
              <FormLabel>Tên môn học</FormLabel>
              <Input ref={initialRef} type="text" placeholder="VD: Giải tích" />
            </FormControl>
            <FormControl>
              <FormLabel>Số tín chỉ</FormLabel>
              <Input placeholder="VD: Giải tích" />
            </FormControl>
            <FormControl>
              <FormLabel>Điểm Chuyên cần</FormLabel>
              <Input ref={finalRef} type="text" placeholder="Trên 0 dưới 10" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Điểm thường xuyên</FormLabel>
              <Input
                placeholder="Trên 0 dưới 10"
                id="quanSoInput"
                onChange={(e) => {
                  // setQuanSo(parseInt(e.target.value));
                }}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Điểm Thi Kết thúc môn</FormLabel>
              <Input placeholder="VD: Giải tích" />
            </FormControl>
            <FormControl>
              <FormLabel>Số lần thi lại</FormLabel>
              <Input placeholder="VD: Giải tích" />
            </FormControl>




          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Save
            </Button>
            {/* <Button onClick={onClose}>Cancel</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
            <Button
              variant="solid"
              colorScheme="blue"
              // onClick={onEditModalOpen}
            >
              Sửa thông tin
            </Button>
            <Button
              // onClick={onOpen}
              variant="solid"
              colorScheme="blue"
              marginLeft={"10px"}
              bg={"green"}
            >
              Xóa thông tin
            </Button>
        <Table variant="striped" colorScheme="teal" size="sm"   border="2px solid rgb(190,190,190)" marginTop={'10px'}>
          <DiemHocKyComponent HocKy = {1}/>
          {/* <DiemHocKyComponent HocKy = {2}/> */}
        </Table>
      </TableContainer>
    </div>
  );
};

export default DiemHocVien;
