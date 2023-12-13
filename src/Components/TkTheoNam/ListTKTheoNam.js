import {
    Button,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    FormControl,
    FormLabel,
    ModalFooter,
    Select,
  } from "@chakra-ui/react";
  import { Input } from "antd";
  import { useParams } from "react-router-dom";
  import React, { useState, useEffect } from "react";
  import bomonAPI from "../../api/bomonAPI";
  import hocPhanAPI from "../../api/hocphanAPI.js"
import dtbAPI from "../../api/dtbAPI.js";
import HvXuatSacComponent from "./HvXuatSacComponent.js";
import HvGioiComponent from "./HvGioiComponent.js";
import HvKhaComponent from "./HvKhaComponent.js";
import HvTBComponent from "./HvTBComponent.js";
import HvKemComponent from "./HvKemComponent.js";

  const ListTKTheoNam = (props) => {
    const i = 0;

    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
  



    const [namHoc, setNamHoc] = useState([]);
    const [dsDTB, setdsDTB] = useState([]);
    const [dsHP, setdsHP] = useState([]);


      useEffect(() => {
        fetchDsHP();
      }, []);
      const fetchDsHP = async () => {
        setdsHP(await hocPhanAPI.getAll());
      };
      console.log(dsHP);
      
      useEffect(() => {
        fetchDsDTB();
      }, []);
      const fetchDsDTB = async () => {
        setdsDTB(await dtbAPI.getAll());
      };
      console.log(dsDTB);
      
      
  
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
            fontSize: "50px",
            fontFamily: "inherit",
            fontWeight: "bold",
            marginBottom: "80px",
            color: "rgb(91, 138, 114)",
          }}
        >
          Thống kê điểm theo năm học
        </div>
        <Select
                placeholder="Chọn năm học"
                id="boMonInput"
                onChange={(e) => {
                  setNamHoc(e.target.value);
                }}
                size={"sm"}
                position={"relative"}
                top={"-50px"}
                right={"-515px"}
                width={"20vh"}
                > 
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                {/* {dsBomon.map((item,index) => (
                  <option key={index} value={item.maBM}>
                    {item.tenBM}
                  </option>
                ))} */}
              </Select>
         
       



        <TableContainer w={"150vh"}>
          <HvXuatSacComponent namHoc={namHoc} dsHP={dsHP}/>
          <HvGioiComponent namHoc={namHoc} dsHP={dsHP}/>
          <HvKhaComponent namHoc={namHoc} dsHP={dsHP}/>
          <HvTBComponent namHoc={namHoc} dsHP={dsHP}/>
          <HvKemComponent namHoc={namHoc} dsHP={dsHP}/>
        </TableContainer>
      </div>
    );
  };
  
  export default ListTKTheoNam;