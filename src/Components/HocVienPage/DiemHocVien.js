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
        },
        {
          id: 2,
          attributes: {
            TenMonHoc: 'Mã hóa',
            SoTinChi: 3,
            DiemChuyenCan: 10,
            DiemThuongXuyen: 8,
            DiemThiKetThucMon: 9,
            SoLanThiLai: 0,
            HocKy: 1,
          },
        },
        {
          id: 3,
          attributes: {
            TenMonHoc: 'Lập trình cơ bản',
            SoTinChi: 2,
            DiemChuyenCan: 10,
            DiemThuongXuyen: 9,
            DiemThiKetThucMon: 10,
            SoLanThiLai: 0,
            HocKy: 1,
          },
        },
        {
          id: 4,
          attributes: {
            TenMonHoc: 'Lập trình cơ bản',
            SoTinChi: 4,
            DiemChuyenCan: 10,
            DiemThuongXuyen: 9,
            DiemThiKetThucMon: 10,
            SoLanThiLai: 0,
            HocKy: 2,
          },
          
        },
        {
          id: 5,
          attributes: {
            TenMonHoc: 'Lập trình cơ bản',
            SoTinChi: 4,
            DiemChuyenCan: 10,
            DiemThuongXuyen: 9,
            DiemThiKetThucMon: 10,
            SoLanThiLai: 0,
            HocKy: 2,
          },
          
        },
        {
          id: 6,
          attributes: {
            TenMonHoc: 'Lập trình cơ bản',
            SoTinChi: 4,
            DiemChuyenCan: 10,
            DiemThuongXuyen: 9,
            DiemThiKetThucMon: 10,
            SoLanThiLai: 0,
            HocKy: 2,
          },
          
        },
        {
          id: 7,
          attributes: {
            TenMonHoc: 'Lập trình cơ bản',
            SoTinChi: 4,
            DiemChuyenCan: 10,
            DiemThuongXuyen: 9,
            DiemThiKetThucMon: 10,
            SoLanThiLai: 0,
            HocKy: 2,
          },
          
        },
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
              <Tr>
                {Object.keys(students[0].attributes).map((attribute) => (
                  <Th key={attribute}>{attribute}</Th>
                ))}
                <Th>DiemTBMon</Th>
                <Th>DiemTBHocKy</Th>
              </Tr>
            </Thead>
            <Tbody>
              {students.map((student) => (
                <Tr key={student.id}>
                  {Object.entries(student.attributes).map(([key, value], index) => (
                    <Td key={index}>{value}</Td>
                  ))}
                  <Td>
                    {(
                      student.attributes.DiemChuyenCan * 0.1 +
                      student.attributes.DiemThuongXuyen * 0.3 +
                      student.attributes.DiemThiKetThucMon * 0.6
                    ).toFixed(2)}
                  </Td>
                  {/* <Td>{diemTBMonHocKy[student.attributes.HocKy]?.diemTBHocKy || 'N/A'}</Td> */}
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    );
  };
  
  export default DiemHocVien;
  