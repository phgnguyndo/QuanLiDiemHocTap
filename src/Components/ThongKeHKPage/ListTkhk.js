import { Box, TableContainer, Select } from "@chakra-ui/react";
import React, { useState } from "react";
import GioiComponent from "./hkGioiComponent";
import KhaComponent from "./hkKhaComponent";
import TBinhComponent from "./hkTBinhComponent";
import YeuComponent from "./hkYeuComponent";
import XuatSacComponent from "./hkXuatSacComponent";
import KemComponent from "./hkKemComponent";
import HBongAComponent from "./hocBongAComponent";

const ListTkhk = (props) => {
  const [hocKy, setHocKy] = useState();

  return (
    <Box position={"relative"}>
      <Box
        color={"brown"}
        variant="solid"
        fontSize={"40px"}
        fontWeight={500}
        textAlign={"center"}
      >
        Thống kê theo học kỳ
      </Box>
      <Box>
        <Select
          placeholder="Chọn học kỳ"
          id="boMonInput"
          onChange={(e) => {
            setHocKy(parseInt(e.target.value));
          }}
          size={"sm"}
          position={"relative"}
          top={"45px"}
          left={"5%"}
          width={"20vh"}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
          <option value={11}>11</option>
        </Select>
      </Box>
      <br />
      <TableContainer>
        <HBongAComponent hocKy={hocKy} />
        <XuatSacComponent hocKy={hocKy} />
        <GioiComponent hocKy={hocKy} />
        <KhaComponent hocKy={hocKy} />
        <TBinhComponent hocKy={hocKy} />
        <YeuComponent hocKy={hocKy} />
        <KemComponent hocKy={hocKy} />
      </TableContainer>
    </Box>
  );
};
export default ListTkhk;
