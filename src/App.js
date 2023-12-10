import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./Pages/Product";
import Login from "./Pages/Login";
import Register  from "./Pages/Register";
import ListClass from "./Pages/ListClass";
import HocVien from "./Pages/HocVien";
import Diem  from "./Pages/Diem";
import Khoa from "./Pages/Khoa";
import GiangVien from "./Pages/GiangVien";
import BoMon from "./Pages/BoMon";
import HocPhan from "./Pages/HocPhan";
import LopHocPhan from "./Pages/LopHocPhan";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        {/* <Route index element={<Home />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/home/:id" element={<ListClass />} />
        <Route path="/home/:id/:idLop" element={<HocVien />} />
        <Route path="/home/:id/:idLop/:idHV" element={<Diem />} />
        <Route path="/product" element={<Product/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/HocVien" element={<HocVien />} />
        <Route path="/Diem" element={<Diem/>} />
        <Route path="/khoa" element={<Khoa/>} />
        {/* <Route path="/khoa/:idKhoa" element={<BoMon/>} /> */}
        <Route path="/bomon" element={<BoMon/>} />
        <Route path="/giangvien" element={<GiangVien/>} />
        <Route path="/hocphan" element={<HocPhan/>} />
        <Route path="/lophocphan" element={<LopHocPhan/>} />
        <Route path="/*" element={<div>404 not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
