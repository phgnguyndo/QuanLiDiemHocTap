import {
  TableContainer,
  useDisclosure,
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
import HvYeuComponent from "./HvYeuComponent.js";
import HvKemComponent from "./HvKemComponent.js";
import hocvienAPI from "../../api/hocvienAPI.js";

const ListTKTheoNam = (props) => {
  const [namHoc, setNamHoc] = useState(1);
  const [dsDTB, setdsDTB] = useState([]);
  const [dsHV,setdsHV] = useState([]);
  const [hv_diem, setHv_diem] = useState([]);

    
    useEffect(() => {
      fetchDsDTB();
    }, []);
    const fetchDsDTB = async () => {
      setdsDTB(await dtbAPI.getAll());
    };
    // console.log(dsDTB);
    
    useEffect(() => {
    fetchDsHV();
    },[]);
    const fetchDsHV = async () => {
      setdsHV(await hocvienAPI.getAll(1,100));
    };
    // console.log(dsHV);
    
  //xét học viên có điểm trung bình năm xuất sắc
useEffect(() => {
  const tinhDiemTrungBinhNamHoc = (dsHV,dsDTB) =>{
    let len = dsHV.length;
    const hv_diem = new Array(len).fill(0).map(() => new Array(6).fill(0));
    let tcNam = 5;
    let temp = 0;
    let j =0;
    for(let i=0; i < len ; i++){
        hv_diem[i][0] = dsHV[i].maHV;
          temp = (dsDTB[j].dtb * dsDTB[j].tongTC + dsDTB[j+1].dtb * dsDTB[j+1].tongTC );
          tcNam = dsDTB[j].tongTC  + dsDTB[j+1].tongTC;
          hv_diem[i][1] = tcNam > 0 ?  temp/tcNam : 0;

          temp = (dsDTB[j+2].dtb * dsDTB[j+2].tongTC  + dsDTB[j+3].dtb * dsDTB[j+3].tongTC );
          tcNam = dsDTB[j+2].tongTC  + dsDTB[j+3].tongTC ;
          hv_diem[i][2] = tcNam > 0 ?  temp/tcNam : 0;

          temp = (dsDTB[j+4].dtb * dsDTB[j+4].tongTC  + dsDTB[j+5].dtb * dsDTB[j+5].tongTC );
          tcNam = dsDTB[j+4].tongTC  + dsDTB[j+5].tongTC ;
          hv_diem[i][3] = tcNam > 0 ?  temp/tcNam : 0;

          temp = (dsDTB[j+6].dtb * dsDTB[j+6].tongTC  + dsDTB[j+7].dtb * dsDTB[j+7].tongTC );
          tcNam = dsDTB[j+6].tongTC  + dsDTB[j+7].tongTC ;
          hv_diem[i][4] = tcNam > 0 ?  temp/tcNam : 0;

          temp = (dsDTB[j+8].dtb * dsDTB[j+8].tongTC  + dsDTB[j+9].dtb * dsDTB[j+9].tongTC );
          tcNam = dsDTB[j+8].tongTC  + dsDTB[j+9].tongTC 
          hv_diem[i][5] = tcNam > 0 ?  temp/tcNam : 0;
          j += 10;
    };
      setHv_diem(hv_diem);
      console.log(hv_diem);
  };
  tinhDiemTrungBinhNamHoc(dsHV,dsDTB);
  console.log("NamHocne"+namHoc);
},[namHoc])

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
            </Select>

      <TableContainer w={"150vh"}>
        <HvXuatSacComponent namHoc={namHoc} hv_diem={hv_diem} />
        <HvGioiComponent namHoc={namHoc}  hv_diem={hv_diem}/>
        <HvKhaComponent namHoc={namHoc}  hv_diem={hv_diem}/>
        <HvTBComponent namHoc={namHoc} hv_diem={hv_diem}/>
        <HvYeuComponent namHoc={namHoc} hv_diem={hv_diem}/>
        <HvKemComponent namHoc={namHoc} hv_diem={hv_diem}/>
      </TableContainer>
    </div>
  );
};

export default ListTKTheoNam;