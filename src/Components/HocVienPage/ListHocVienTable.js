import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import HocVien from "./HocVienComponent";
// import { useNavigate } from "react-router-dom";

const ListHocVienTable = (props) => {
  var LopChuyenNganh = "Bảo đảm An toàn thông tin";

  const students = [
    {
      id: 1,
      attributes: {
        MaHV: "HV001",
        MaLCN: "CS101",
        TenHV: "John Doe",
        NgaySinh: "1990-01-01",
        GioiTinh: "Male",
        QueQuan: "New York",
        CapBac: "Undergraduate",
      },
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "50vh",
      }}
    >
      <h1 style={{color:"GrayText"}}>Lớp {LopChuyenNganh}</h1>
      <div style={{ fontFamily: "inherit", fontSize: "40px", color: "Red" , marginBottom:"30px"} }>
        Danh sách học viên 
      </div>
      <TableContainer w={"100%"}>
        <Table variant="striped" colorScheme="teal" size="sm">
          {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
          <Thead>
            <Tr bg={""}>
              <Th w={"10%"} textAlign={"center"}>
                Mã HV
              </Th>
              <Th w={"18%"} textAlign={"center"}>
                Họ tên
              </Th>
              <Th w={"10%"} textAlign={"center"}>
                Ngày sinh
              </Th>
              <Th w={"4%"} textAlign={"center"}>
                Giới tính
              </Th>
              <Th w={"10%"} textAlign={"center"}>
                Quê quán
              </Th>
              <Th w={"8%"} textAlign={"center"}>
                Cấp bậc
              </Th>
            </Tr>
          </Thead>
          <HocVien />
        </Table>
      </TableContainer>
    </div>
  );
};

export default ListHocVienTable;
