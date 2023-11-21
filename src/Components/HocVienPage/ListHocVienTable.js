import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
// import { useNavigate } from "react-router-dom";


const ListHocVienTable = (props) => {

    var LopChuyenNganh = 'Bảo đảm An toàn thông tin';

    const students = [
        {
            id: 1,
            attributes: {
              MaHV: 'HV001',
              MaLopChuyenNganh: 'CS101',
              TenHV: 'John Doe',
              NgaySinh: '1990-01-01',
              GioiTinh: 'Male',
              QueQuan: 'New York',
              CapBac: 'Undergraduate',
            },
          },
          {
            id: 2,
            attributes: {
              MaHV: 'HV002',
              MaLopChuyenNganh: 'CS102',
              TenHV: 'Jane Smith',
              NgaySinh: '1995-03-15',
              GioiTinh: 'Female',
              QueQuan: 'Los Angeles',
              CapBac: 'Graduate',
            },
          },
          {
            id: 30,
            attributes: {
              MaHV: 'HV030',
              MaLopChuyenNganh: 'CS130',
              TenHV: 'Michael Johnson',
              NgaySinh: '1992-08-22',
              GioiTinh: 'Male',
              QueQuan: 'Seattle',
              CapBac: 'Undergraduate',
            },
          },
          {
            id: 30,
            attributes: {
              MaHV: 'HV030',
              MaLopChuyenNganh: 'CS130',
              TenHV: 'Michael Johnson',
              NgaySinh: '1992-08-22',
              GioiTinh: 'Male',
              QueQuan: 'Seattle',
              CapBac: 'Undergraduate',
            },
          },
          {
            id: 30,
            attributes: {
              MaHV: 'HV030',
              MaLopChuyenNganh: 'CS130',
              TenHV: 'Michael Johnson',
              NgaySinh: '1992-08-22',
              GioiTinh: 'Male',
              QueQuan: 'Seattle',
              CapBac: 'Undergraduate',
            },
          },
          {
            id: 30,
            attributes: {
              MaHV: 'HV030',
              MaLopChuyenNganh: 'CS130',
              TenHV: 'Michael Johnson',
              NgaySinh: '1992-08-22',
              GioiTinh: 'Male',
              QueQuan: 'Seattle',
              CapBac: 'Undergraduate',
            },
          },
          {
            id: 30,
            attributes: {
              MaHV: 'HV030',
              MaLopChuyenNganh: 'CS130',
              TenHV: 'Michael Johnson',
              NgaySinh: '1992-08-22',
              GioiTinh: 'Male',
              QueQuan: 'Seattle',
              CapBac: 'Undergraduate',
            },
          },
          {
            id: 30,
            attributes: {
              MaHV: 'HV030',
              MaLopChuyenNganh: 'CS130',
              TenHV: 'Michael Johnson',
              NgaySinh: '1992-08-22',
              GioiTinh: 'Male',
              QueQuan: 'Seattle',
              CapBac: 'Undergraduate',
            },
          },
          {
            id: 30,
            attributes: {
              MaHV: 'HV030',
              MaLopChuyenNganh: 'CS130',
              TenHV: 'Michael Johnson',
              NgaySinh: '1992-08-22',
              GioiTinh: 'Male',
              QueQuan: 'Seattle',
              CapBac: 'Undergraduate',
            },
          },
          {
            id: 30,
            attributes: {
              MaHV: 'HV030',
              MaLopChuyenNganh: 'CS130',
              TenHV: 'Michael Johnson',
              NgaySinh: '1992-08-22',
              GioiTinh: 'Male',
              QueQuan: 'Seattle',
              CapBac: 'Undergraduate',
            },
          },
          {
            id: 30,
            attributes: {
              MaHV: 'HV030',
              MaLopChuyenNganh: 'CS130',
              TenHV: 'Michael Johnson',
              NgaySinh: '1992-08-22',
              GioiTinh: 'Male',
              QueQuan: 'Seattle',
              CapBac: 'Undergraduate',
            },
          },
          {
            id: 30,
            attributes: {
              MaHV: 'HV030',
              MaLopChuyenNganh: 'CS130',
              TenHV: 'Michael Johnson',
              NgaySinh: '1992-08-22',
              GioiTinh: 'Male',
              QueQuan: 'Seattle',
              CapBac: 'Undergraduate',
            },
          },
          {
            id: 30,
            attributes: {
              MaHV: 'HV030',
              MaLopChuyenNganh: 'CS130',
              TenHV: 'Michael Johnson',
              NgaySinh: '1992-08-22',
              GioiTinh: 'Male',
              QueQuan: 'Seattle',
              CapBac: 'Undergraduate',
            },
          },
          {
            id: 30,
            attributes: {
              MaHV: 'HV030',
              MaLopChuyenNganh: 'CS130',
              TenHV: 'Michael Johnson',
              NgaySinh: '1992-08-22',
              GioiTinh: 'Male',
              QueQuan: 'Seattle',
              CapBac: 'Undergraduate',
            },
          },
          {
            id: 30,
            attributes: {
              MaHV: 'HV030',
              MaLopChuyenNganh: 'CS130',
              TenHV: 'Michael Johnson',
              NgaySinh: '1992-08-22',
              GioiTinh: 'Male',
              QueQuan: 'Seattle',
              CapBac: 'Undergraduate',
            },
          },
          {
            id: 30,
            attributes: {
              MaHV: 'HV030',
              MaLopChuyenNganh: 'CS130',
              TenHV: 'Michael Johnson',
              NgaySinh: '1992-08-22',
              GioiTinh: 'Male',
              QueQuan: 'Seattle',
              CapBac: 'Undergraduate',
            },
          },
          {
            id: 30,
            attributes: {
              MaHV: 'HV030',
              MaLopChuyenNganh: 'CS130',
              TenHV: 'Michael Johnson',
              NgaySinh: '1992-08-22',
              GioiTinh: 'Male',
              QueQuan: 'Seattle',
              CapBac: 'Undergraduate',
            },
          },
          {
            id: 30,
            attributes: {
              MaHV: 'HV030',
              MaLopChuyenNganh: 'CS130',
              TenHV: 'Michael Johnson',
              NgaySinh: '1992-08-22',
              GioiTinh: 'Male',
              QueQuan: 'Seattle',
              CapBac: 'Undergraduate',
            },
          },
          {
            id: 30,
            attributes: {
              MaHV: 'HV030',
              MaLopChuyenNganh: 'CS130',
              TenHV: 'Michael Johnson',
              NgaySinh: '1992-08-22',
              GioiTinh: 'Male',
              QueQuan: 'Seattle',
              CapBac: 'Undergraduate',
            },
          },
          {
            id: 30,
            attributes: {
              MaHV: 'HV030',
              MaLopChuyenNganh: 'CS130',
              TenHV: 'Michael Johnson',
              NgaySinh: '1992-08-22',
              GioiTinh: 'Male',
              QueQuan: 'Seattle',
              CapBac: 'Undergraduate',
            },
          },
          {
            id: 30,
            attributes: {
              MaHV: 'HV030',
              MaLopChuyenNganh: 'CS130',
              TenHV: 'Michael Johnson',
              NgaySinh: '1992-08-22',
              GioiTinh: 'Male',
              QueQuan: 'Seattle',
              CapBac: 'Undergraduate',
            },
          },
          {
            id: 30,
            attributes: {
              MaHV: 'HV030',
              MaLopChuyenNganh: 'CS130',
              TenHV: 'Michael Johnson',
              NgaySinh: '1992-08-22',
              GioiTinh: 'Male',
              QueQuan: 'Seattle',
              CapBac: 'Undergraduate',
            },
          },
          {
            id: 30,
            attributes: {
              MaHV: 'HV030',
              MaLopChuyenNganh: 'CS130',
              TenHV: 'Michael Johnson',
              NgaySinh: '1992-08-22',
              GioiTinh: 'Male',
              QueQuan: 'Seattle',
              CapBac: 'Undergraduate',
            },
          },
          {
            id: 30,
            attributes: {
              MaHV: 'HV030',
              MaLopChuyenNganh: 'CS130',
              TenHV: 'Michael Johnson',
              NgaySinh: '1992-08-22',
              GioiTinh: 'Male',
              QueQuan: 'Seattle',
              CapBac: 'Undergraduate',
            },
          },
          {
            id: 30,
            attributes: {
              MaHV: 'HV030',
              MaLopChuyenNganh: 'CS130',
              TenHV: 'Michael Johnson',
              NgaySinh: '1992-08-22',
              GioiTinh: 'Male',
              QueQuan: 'Seattle',
              CapBac: 'Undergraduate',
            },
          },

          // Add more student objects as needed
          // ...
          {
            id: 30,
            attributes: {
              MaHV: 'HV030',
              MaLopChuyenNganh: 'CS130',
              TenHV: 'Michael Johnson',
              NgaySinh: '1992-08-22',
              GioiTinh: 'Male',
              QueQuan: 'Seattle',
              CapBac: 'Undergraduate',
            },
          },
      ];
      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
          <div  style={{ fontFamily: 'cursive', fontSize: '40px',color:'Red' }}>Danh sách học viên lớp {LopChuyenNganh}</div>
          <TableContainer>
            <Table variant="striped" colorScheme="teal" size="sm">
              <TableCaption>Imperial to metric conversion factors</TableCaption>
              <Thead>
                <Tr>
                  {Object.keys(students[0].attributes).map((attribute) => (
                    <Th key={attribute}>{attribute}</Th>
                  ))}
                </Tr>
              </Thead>
              <Tbody>
                {students.map((student) => (
                  <Tr key={student.id}>
                    {Object.values(student.attributes).map((value, index) => (
                      <Td key={index}>{value}</Td>
                    ))}
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      );
    };
    

export default ListHocVienTable;