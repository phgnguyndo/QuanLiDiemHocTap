import {
  Td,
  Tr,
} from "@chakra-ui/react";
import { React } from "react";

const TkhkComponent = (props) => {

  

  return (
    <>
      <Tr>
        <Td position={"relative"} textAlign={"center"} w={"3%"}>
          {props.stt}
        </Td>
        {/* <Td position={"relative"} textAlign={"center"} w={"3%"}>
          {props.id}
        </Td> */}
        <Td position={"relative"} textAlign={"center"}  cursor={"pointer"} w={"95%"}>
          {props.tenHV}
        </Td>
        <Td position={"relative"} textAlign={"center"}  cursor={"pointer"} w={"95%"}>
          {props.dtb}
        </Td>
        <Td position={"relative"} textAlign={"center"}  cursor={"pointer"} w={"95%"}>
          {props.hocKy}
        </Td>
        <Td position={"relative"} textAlign={"center"}  cursor={"pointer"} w={"95%"}>
          {props.ghiChu}
        </Td>
      </Tr>
    </>
  );
};
export default TkhkComponent;
