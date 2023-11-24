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
              MaLCN: 'CS101',
              TenHV: 'John Doe',
              NgaySinh: '1990-01-01',
              GioiTinh: 'Male',
              QueQuan: 'New York',
              CapBac: 'Undergraduate',
            },
          }
      ];
      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
          <div  style={{ fontFamily: 'cursive', fontSize: '40px',color:'Red' }}>Danh sách học viên lớp {LopChuyenNganh}</div>
          <TableContainer w={"70%"} >
            <Table variant="striped" colorScheme="teal" size="sm">
              {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
              <Thead>
                <Tr alignItems={"center"}>
                  {Object.keys(students[0].attributes).map((attribute) => (
                    <Th key={attribute}>{attribute}</Th>
                  ))}
                </Tr>
              </Thead>
              <Tbody>
                {students.map((student) => (
                  <Tr key={student.id} alignItems={"center"}>
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