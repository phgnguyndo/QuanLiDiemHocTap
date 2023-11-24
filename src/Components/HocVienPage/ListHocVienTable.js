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
      <h1 style={{ color: "GrayText" }}>Lớp {LopChuyenNganh}</h1>
      <div
        style={{
          fontSize: "50px",
          fontFamily: "inherit",
          fontWeight: "bold",
          marginBottom: "40px",
          color: "rgb(91, 138, 114)",
        }}
      >
        Danh sách học viên
      </div>
      <TableContainer w={"150vh"}>
        <Table variant="simple" size="sm">
          {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
          <Thead>
            <Tr bg={"rgb(157, 173, 127)"}>
              <Th w={"10%"} textAlign={"center"}>
                Mã HV
              </Th>
              <Th w={"20%"} textAlign={"center"}>
                Họ tên
              </Th>
              <Th w={"10%"} textAlign={"center"}>
                Ngày sinh
              </Th>
              <Th w={"5%"} textAlign={"center"}>
                Giới tính
              </Th>
              <Th w={"10%"} textAlign={"center"}>
                Quê quán
              </Th>
              <Th w={"10%"} textAlign={"center"}>
                Cấp bậc
              </Th>
              <Th w={"5%"}></Th>
              <Th w={"5%"}></Th>
            </Tr>
          </Thead>
          <HocVien name={"Nghĩa"}/>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ListHocVienTable;
