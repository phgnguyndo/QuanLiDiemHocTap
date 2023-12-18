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
import hocvienAPI from "../../api/hocvienAPI.js";
import DsTichLuyComponent from "./DsTichLuyComponent.js";

const ListTkDiemTichLuy = (props) => {
  const i = 0;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);




  const [namHoc, setNamHoc] = useState(1);
  const [dsDTB, setdsDTB] = useState([]);
  const [dsHV,setdsHV] = useState([]);
  const [hv_diem_TC, setHv_diem_TC] = useState([]);
  const [dsTichLuy, setDsTichLuy] = useState([]);

    useEffect(() => {
      fetchDsDTB();
    }, []);
    const fetchDsDTB = async () => {
      setdsDTB(await dtbAPI.getAll());
    };
    
    useEffect(() => {
    fetchDsHV();
    },[]);
    const fetchDsHV = async () => {
      setdsHV(await hocvienAPI.getAll(1,100));
    };
    // console.log(dsHV);
    
  //xét học viên có điểm trung bình năm 
useEffect(() => {
  const tinhDiemTrungBinhNamHoc = (dsHV,dsDTB) =>{
    let len = dsHV.length;
    const hv_diem_TC = new Array(len).fill(0).map(() => new Array(6).fill(0));
    let tcNam = 5;
    let temp = 0;
    let j =0;
    for(let i=0; i < dsHV.length ; i++){
        hv_diem_TC[i][0] = dsHV[i].maHV;
          temp = (dsDTB[j].dtb * dsDTB[j].tongTC + dsDTB[j+1].dtb * dsDTB[j+1].tongTC );
          tcNam = dsDTB[j].tongTC  + dsDTB[j+1].tongTC;
          hv_diem_TC[i][1] = tcNam > 0 ?  temp/tcNam : 0;
          hv_diem_TC[i][2] = tcNam;

          temp = (dsDTB[j+2].dtb * dsDTB[j+2].tongTC  + dsDTB[j+3].dtb * dsDTB[j+3].tongTC );
          tcNam = dsDTB[j+2].tongTC  + dsDTB[j+3].tongTC ;
          hv_diem_TC[i][3] = tcNam > 0 ?  temp/tcNam : 0;
          hv_diem_TC[i][4] = tcNam;

          temp = (dsDTB[j+4].dtb * dsDTB[j+4].tongTC  + dsDTB[j+5].dtb * dsDTB[j+5].tongTC );
          tcNam = dsDTB[j+4].tongTC  + dsDTB[j+5].tongTC ;
          hv_diem_TC[i][5] = tcNam > 0 ?  temp/tcNam : 0;
          hv_diem_TC[i][6] = tcNam;

          temp = (dsDTB[j+6].dtb * dsDTB[j+6].tongTC  + dsDTB[j+7].dtb * dsDTB[j+7].tongTC );
          tcNam = dsDTB[j+6].tongTC  + dsDTB[j+7].tongTC ;
          hv_diem_TC[i][7] = tcNam > 0 ?  temp/tcNam : 0;
          hv_diem_TC[i][8] = tcNam;

          temp = (dsDTB[j+8].dtb * dsDTB[j+8].tongTC  + dsDTB[j+9].dtb * dsDTB[j+9].tongTC );
tcNam = dsDTB[j+8].tongTC  + dsDTB[j+9].tongTC 
          hv_diem_TC[i][9] = tcNam > 0 ?  temp/tcNam : 0;
          hv_diem_TC[i][10] = tcNam;
        j += 10;
    };
      setHv_diem_TC(hv_diem_TC);
  };
  tinhDiemTrungBinhNamHoc(dsHV,dsDTB);

  const tinhDiemTichLuy = (hv_diem_TC,dsHV) => {
      const dsTichLuy = [];
      let len = hv_diem_TC.length;
      let tongTC = 0;
      let temp = 0;
      for(let i = 0; i < len;i++){
          // dsTichLuy[i][0] = dsHV[i].maHV;
          tongTC = hv_diem_TC[i][2] + hv_diem_TC[i][4] + hv_diem_TC[i][6]  + hv_diem_TC[i][8] + hv_diem_TC[i][10];
          temp = hv_diem_TC[i][1] * hv_diem_TC[i][2] + hv_diem_TC[i][3] * hv_diem_TC[i][4] + hv_diem_TC[i][5] * hv_diem_TC[i][6] + hv_diem_TC[i][7]*hv_diem_TC[i][8] + hv_diem_TC[i][9]*hv_diem_TC[i][10] 
          dsTichLuy.push(tongTC > 0 ? temp/tongTC : 0);
      };
      setDsTichLuy(dsTichLuy);
      
  };
  tinhDiemTichLuy(hv_diem_TC,dsHV)
})

console.log("diemne");
console.log(hv_diem_TC);
console.log("tich luy ne");
console.log(dsTichLuy);

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
        Thống kê điểm tích lũy
      </div>

      <TableContainer w={"150vh"}>
        <DsTichLuyComponent dsTichLuy={dsTichLuy} />
       
      </TableContainer>
    </div>
  );
};

export default ListTkDiemTichLuy;