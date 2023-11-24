import { Tbody, Td, Tr } from "@chakra-ui/table";

const HocVien = (props) => {
  return (
    <>
      <Tbody>
        <Tr >
            <Td position={"relative"} textAlign={"center"}>0123456789</Td>
            <Td position={"relative"} textAlign={"center"}>Nguyễn Văn Nghĩa</Td>
            <Td position={"relative"} textAlign={"center"}>21/02/2002</Td>
            <Td position={"relative"} textAlign={"center"}>Nam</Td>
            <Td position={"relative"} textAlign={"center"}>Nghệ An</Td>         
            <Td position={"relative"} textAlign={"center"}>Thượng sĩ</Td>         
        </Tr>
        {/* <Tr >
            <Td position={"relative"} alignItems={"center"}>aaaaaaa</Td>
        </Tr> */}
        {/* {students.map((student) => (
          <Tr key={student.id} alignItems={"center"}>
            {Object.values(student.attributes).map((value, index) => (
              <Td key={index}>{value}</Td>
            ))}
          </Tr>
        ))} */}
      </Tbody>
    </>
  );
};
export default HocVien