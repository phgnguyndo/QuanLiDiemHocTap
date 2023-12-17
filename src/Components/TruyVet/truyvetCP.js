import { useState, React, useEffect } from "react";
import { Td, Tr } from "@chakra-ui/react";

const TruyVetCP = (props) => {
  return (
    <>
      <Tr>
        <Td position={"relative"} textAlign={"center"}>
          1
        </Td>
        <Td position={"relative"} textAlign={"center"} cursor={"pointer"}>
          {props.username}
        </Td>
        <Td position={"relative"} textAlign={"center"}>
          {
            props.role
          }
        </Td>
        <Td position={"relative"} textAlign={"center"}>
          {props.tgDangNhap}
        </Td>
        <Td position={"relative"} textAlign={"center"}>
          {props.tgDangXuat}
        </Td>
        <Td position={"relative"} textAlign={"center"}>
          {/* {props.boMon.tenBM} */}
        </Td>
      </Tr>
    </>
  );
};
export default TruyVetCP;
