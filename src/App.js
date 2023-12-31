import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ListClass from "./Pages/ListClass";
import HocVien from "./Pages/HocVien";
import Diem from "./Pages/Diem";
import Khoa from "./Pages/Khoa";
import GiangVien from "./Pages/GiangVien";
import BoMon from "./Pages/BoMon";
import HocPhan from "./Pages/HocPhan";
import LopHocPhan from "./Pages/LopHocPhan";
import AllHocVien from "./Pages/PageAllHocVien";
import TKTheoKy from "./Pages/TkTheoKy";
import TKTheoNam from "./Pages/TkTheoNam";
import TaoTaiKhoan from "./Pages/TaoTaiKhoan";
import StorageKeys from "./constance/storage-key";
import TruyVet from "./Pages/TruyVet";
import TKTichLuy from "./Pages/TkDiemTichLuy";

function App() {
  
  const user=JSON.parse(localStorage.getItem(StorageKeys.USER));
  
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/home" element={<ListClass />} />
        <Route path="/home/:id" element={<ListClass />} />
        <Route path="/daidoi" element={<Home />} />
        <Route path="/home/:id/:idLop" element={<HocVien />} />
        <Route path="/homes/:idLop" element={<HocVien />} />
        <Route path="/home/:id/:idLop/:idHV" element={<Diem />} />
        <Route path="/register" element={<Register />} />
        <Route path="/:idHV" element={<Diem />} />
        <Route path="/bomon" element={<BoMon />} />
        <Route path="/hocvien" element={<AllHocVien />} />
        <Route path="/giangvien" element={<GiangVien />} />
        <Route path="/lophocphan" element={<LopHocPhan />} />
        <Route path="/tkhk" element={<TKTheoKy />} />
        <Route path="/tkn" element={<TKTheoNam />} />
        <Route path="/truyvet" element={<TruyVet />} />
        <Route path="/HocVien/:id" element={<Diem/>} />
        <Route path="/Diem" element={<Diem/>} />
        <Route path="/khoa" element={<Khoa/>} />
        {/* <Route path="/khoa/:idKhoa" element={<BoMon/>} /> */}
        <Route path="/hocphan" element={<HocPhan/>} />
        <Route path="/tktl" element={<TKTichLuy/>} />
        <Route path="/taotaikhoan" element={<TaoTaiKhoan/>} />
        <Route path="/*" element={<div>404 not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
