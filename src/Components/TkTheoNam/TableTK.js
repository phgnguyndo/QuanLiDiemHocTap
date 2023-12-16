import { Th, Thead, Tr } from "@chakra-ui/react";

const TableTK = (props) => {
  const { name } = props;
  return (
    <>
      <Thead>
        <Tr
          style={{
            //   position: "absolute",
            //   top:"-25%",
            fontSize: "20px",
            fontWeight: "bold",
            color: "rgb(91, 138, 114)",
          }}
        >
          Danh sách học viên {name}
        </Tr>
        <Tr bg={"rgb(182, 187, 196)"}>
          <>
            <Th w={"3%"} textAlign={"center"}>
              STT
            </Th>
            <Th w={"15%"} textAlign={"center"}>
              Mã học viên
            </Th>
            <Th w={"15%"} textAlign={"center"}>
              Tên học viên
            </Th>
            <Th w={"10%"} textAlign={"center"}>
              Lớp chuyên ngành
            </Th>
            <Th w={"5%"} textAlign={"center"}>
              Điểm trung bình
            </Th>
          </>
        </Tr>
      </Thead>
    </>
  );
};

export default TableTK;
