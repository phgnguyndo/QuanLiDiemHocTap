import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import TruyVetCP from "./truyvetCP";
import truyvetAPI from "../../api/truyvetAPI";
import { useEffect, useState } from "react";

const ListTruyVet = (props) => {
  const [dsTruyVet, setDsTruyVet] = useState([]);
  useEffect(() => {
    fetchTruyVet();
  }, []);
  const fetchTruyVet = async () => {
    setDsTruyVet(await truyvetAPI.getAll());
  };
  console.log(dsTruyVet);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "40vh",
      }}
    >
      <div
        style={{
          fontSize: "35px",
          fontWeight: "500",
          marginBottom: "80px",
          color: "brown",
        }}
      >
        Danh sách giảng viên
      </div>

      <TableContainer w={"150vh"}>
        <Table variant="striped" size="sm">
          <Thead>
            <Tr bg={"rgb(182, 187, 196)"}>
              <Th w={"5%"} textAlign={"center"}>
                STT
              </Th>
              <Th w={"10%"} textAlign={"center"}>
                Người dùng
              </Th>
              <Th w={"5%"} textAlign={"center"}>
                Quyền
              </Th>
              <Th w={"10%"} textAlign={"center"}>
                TG đăng nhập
              </Th>
              <Th w={"10%"} textAlign={"center"}>
                TG đăng xuất
              </Th>
              <Th w={"10%"} textAlign={"center"}>
                Ghi chú
              </Th>
              {/* <Th w={"5%"} textAlign={"center"}>
                Sửa
              </Th>
              <Th w={"5%"} textAlign={"center"}>
                Xóa
              </Th> */}
            </Tr>
          </Thead>
          <Tbody>
            {dsTruyVet.map((item, i) => (
              <TruyVetCP
                username={item.username}
                role={item.role}
                tgDangNhap={item.tgDangNhap}
                tgDangXuat={item.tgDangXuat}
              />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ListTruyVet;
