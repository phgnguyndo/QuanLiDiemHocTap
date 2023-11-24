import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import DiemConponent from './DiemComponents';

const DiemHocVien = (props) => {
  const Name = "Nguyễn Quang Phong";

  const students = [
      {
        id: 1,
        attributes: {
          TenMonHoc: 'Giải tích 1',
          SoTinChi: 4,
          DiemChuyenCan: 10,
          DiemThuongXuyen: 7,
          DiemThiKetThucMon: 10,
          SoLanThiLai: 0,
          HocKy: 1,
        },
      }
      
    ];
  // Tính điểm trung bình môn và học kỳ
  const diemTBMonHocKy = students.reduce((acc, student) => {
    const diemTBMon = (
      student.attributes.DiemChuyenCan * 0.1 +
      student.attributes.DiemThuongXuyen * 0.3 +
      student.attributes.DiemThiKetThucMon * 0.6
    ).toFixed(2);

    if (!acc[student.attributes.HocKy]) {
      acc[student.attributes.HocKy] = {
        totalDiem: 0,
        count: 0,
      };
    }

    acc[student.attributes.HocKy].totalDiem += parseFloat(diemTBMon);
    acc[student.attributes.HocKy].count += 1;

    return acc;
  }, {});

  // Tính điểm trung bình học kỳ
  Object.keys(diemTBMonHocKy).forEach((hocKy) => {
    diemTBMonHocKy[hocKy].diemTBHocKy = (
      diemTBMonHocKy[hocKy].totalDiem / diemTBMonHocKy[hocKy].count
    ).toFixed(2);
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <div style={{ fontFamily: 'cursive', fontSize: '40px', color: 'Red' }}>Bảng điểm của học viên {Name}</div>
      <TableContainer>
        <Table variant="striped" colorScheme="teal" size="sm">
          <TableCaption>............................</TableCaption>
          <Thead>
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
          <DiemConponent/>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DiemHocVien;
