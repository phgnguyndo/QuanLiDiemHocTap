import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Modal,
  TableCaption,
  TableContainer,
  useDisclosure,
  position,
} from "@chakra-ui/react";
import { Button } from "bootstrap";
import React, { useState } from "react";

const ListHocVienTable = (props) => {
  var LopChuyenNganh = "Công nghệ thông tin";
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true); // Hiển thị modal khi người dùng nhấn nút
  };

  const handleCloseModal = () => {
    setShowModal(false); // Đóng modal khi người dùng nhấn nút "Đóng" trong modal
  };
  const students = [
    {
      id: 1,
      attributes: {
        MaHV: "HV001",
        MaLopChuyenNganh: "CS101",
        TenHV: "John Doe",
        NgaySinh: "1990-01-01",
        GioiTinh: "Male",
        QueQuan: "New York",
        CapBac: "Undergraduate",
      },
    },
    {
      id: 2,
      attributes: {
        MaHV: "HV002",
        MaLopChuyenNganh: "CS102",
        TenHV: "Jane Smith",
        NgaySinh: "1995-03-15",
        GioiTinh: "Female",
        QueQuan: "Los Angeles",
        CapBac: "Graduate",
      },
    },
    {
      id: 30,
      attributes: {
        MaHV: "HV030",
        MaLopChuyenNganh: "CS130",
        TenHV: "Michael Johnson",
        NgaySinh: "1992-08-22",
        GioiTinh: "Male",
        QueQuan: "Seattle",
        CapBac: "Undergraduate",
      },
    },
    {
      id: 30,
      attributes: {
        MaHV: "HV030",
        MaLopChuyenNganh: "CS130",
        TenHV: "Michael Johnson",
        NgaySinh: "1992-08-22",
        GioiTinh: "Male",
        QueQuan: "Seattle",
        CapBac: "Undergraduate",
      },
    },
    {
      id: 30,
      attributes: {
        MaHV: "HV030",
        MaLopChuyenNganh: "CS130",
        TenHV: "Michael Johnson",
        NgaySinh: "1992-08-22",
        GioiTinh: "Male",
        QueQuan: "Seattle",
        CapBac: "Undergraduate",
      },
    },
    {
      id: 30,
      attributes: {
        MaHV: "HV030",
        MaLopChuyenNganh: "CS130",
        TenHV: "Michael Johnson",
        NgaySinh: "1992-08-22",
        GioiTinh: "Male",
        QueQuan: "Seattle",
        CapBac: "Undergraduate",
      },
    },
    {
      id: 30,
      attributes: {
        MaHV: "HV030",
        MaLopChuyenNganh: "CS130",
        TenHV: "Michael Johnson",
        NgaySinh: "1992-08-22",
        GioiTinh: "Male",
        QueQuan: "Seattle",
        CapBac: "Undergraduate",
      },
    },
    {
      id: 30,
      attributes: {
        MaHV: "HV030",
        MaLopChuyenNganh: "CS130",
        TenHV: "Michael Johnson",
        NgaySinh: "1992-08-22",
        GioiTinh: "Male",
        QueQuan: "Seattle",
        CapBac: "Undergraduate",
      },
    },
    {
      id: 30,
      attributes: {
        MaHV: "HV030",
        MaLopChuyenNganh: "CS130",
        TenHV: "Michael Johnson",
        NgaySinh: "1992-08-22",
        GioiTinh: "Male",
        QueQuan: "Seattle",
        CapBac: "Undergraduate",
      },
    },
    {
      id: 30,
      attributes: {
        MaHV: "HV030",
        MaLopChuyenNganh: "CS130",
        TenHV: "Michael Johnson",
        NgaySinh: "1992-08-22",
        GioiTinh: "Male",
        QueQuan: "Seattle",
        CapBac: "Undergraduate",
      },
    },
    {
      id: 30,
      attributes: {
        MaHV: "HV030",
        MaLopChuyenNganh: "CS130",
        TenHV: "Michael Johnson",
        NgaySinh: "1992-08-22",
        GioiTinh: "Male",
        QueQuan: "Seattle",
        CapBac: "Undergraduate",
      },
    },
    {
      id: 30,
      attributes: {
        MaHV: "HV030",
        MaLopChuyenNganh: "CS130",
        TenHV: "Michael Johnson",
        NgaySinh: "1992-08-22",
        GioiTinh: "Male",
        QueQuan: "Seattle",
        CapBac: "Undergraduate",
      },
    },
    {
      id: 30,
      attributes: {
        MaHV: "HV030",
        MaLopChuyenNganh: "CS130",
        TenHV: "Michael Johnson",
        NgaySinh: "1992-08-22",
        GioiTinh: "Male",
        QueQuan: "Seattle",
        CapBac: "Undergraduate",
      },
    },
    {
      id: 30,
      attributes: {
        MaHV: "HV030",
        MaLopChuyenNganh: "CS130",
        TenHV: "Michael Johnson",
        NgaySinh: "1992-08-22",
        GioiTinh: "Male",
        QueQuan: "Seattle",
        CapBac: "Undergraduate",
      },
    },
    {
      id: 30,
      attributes: {
        MaHV: "HV030",
        MaLopChuyenNganh: "CS130",
        TenHV: "Michael Johnson",
        NgaySinh: "1992-08-22",
        GioiTinh: "Male",
        QueQuan: "Seattle",
        CapBac: "Undergraduate",
      },
    },
    {
      id: 30,
      attributes: {
        MaHV: "HV030",
        MaLopChuyenNganh: "CS130",
        TenHV: "Michael Johnson",
        NgaySinh: "1992-08-22",
        GioiTinh: "Male",
        QueQuan: "Seattle",
        CapBac: "Undergraduate",
      },
    },
    {
      id: 30,
      attributes: {
        MaHV: "HV030",
        MaLopChuyenNganh: "CS130",
        TenHV: "Michael Johnson",
        NgaySinh: "1992-08-22",
        GioiTinh: "Male",
        QueQuan: "Seattle",
        CapBac: "Undergraduate",
      },
    },
    {
      id: 30,
      attributes: {
        MaHV: "HV030",
        MaLopChuyenNganh: "CS130",
        TenHV: "Michael Johnson",
        NgaySinh: "1992-08-22",
        GioiTinh: "Male",
        QueQuan: "Seattle",
        CapBac: "Undergraduate",
      },
    },
    {
      id: 30,
      attributes: {
        MaHV: "HV030",
        MaLopChuyenNganh: "CS130",
        TenHV: "Michael Johnson",
        NgaySinh: "1992-08-22",
        GioiTinh: "Male",
        QueQuan: "Seattle",
        CapBac: "Undergraduate",
      },
    },
    {
      id: 30,
      attributes: {
        MaHV: "HV030",
        MaLopChuyenNganh: "CS130",
        TenHV: "Michael Johnson",
        NgaySinh: "1992-08-22",
        GioiTinh: "Male",
        QueQuan: "Seattle",
        CapBac: "Undergraduate",
      },
    },
    {
      id: 30,
      attributes: {
        MaHV: "HV030",
        MaLopChuyenNganh: "CS130",
        TenHV: "Michael Johnson",
        NgaySinh: "1992-08-22",
        GioiTinh: "Male",
        QueQuan: "Seattle",
        CapBac: "Undergraduate",
      },
    },
    {
      id: 30,
      attributes: {
        MaHV: "HV030",
        MaLopChuyenNganh: "CS130",
        TenHV: "Michael Johnson",
        NgaySinh: "1992-08-22",
        GioiTinh: "Male",
        QueQuan: "Seattle",
        CapBac: "Undergraduate",
      },
    },
    {
      id: 30,
      attributes: {
        MaHV: "HV030",
        MaLopChuyenNganh: "CS130",
        TenHV: "Michael Johnson",
        NgaySinh: "1992-08-22",
        GioiTinh: "Male",
        QueQuan: "Seattle",
        CapBac: "Undergraduate",
      },
    },
    {
      id: 30,
      attributes: {
        MaHV: "HV030",
        MaLopChuyenNganh: "CS130",
        TenHV: "Michael Johnson",
        NgaySinh: "1992-08-22",
        GioiTinh: "Male",
        QueQuan: "Seattle",
        CapBac: "Undergraduate",
      },
    },
    {
      id: 30,
      attributes: {
        MaHV: "HV030",
        MaLopChuyenNganh: "CS130",
        TenHV: "Michael Johnson",
        NgaySinh: "1992-08-22",
        GioiTinh: "Male",
        QueQuan: "Seattle",
        CapBac: "Undergraduate",
      },
    },

    // Add more student objects as needed
    // ...
    {
      id: 30,
      attributes: {
        MaHV: "HV030",
        MaLopChuyenNganh: "CS130",
        TenHV: "Michael Johnson",
        NgaySinh: "1992-08-22",
        GioiTinh: "Male",
        QueQuan: "Seattle",
        CapBac: "Undergraduate",
      },
    },
  ];
  return (
    <div>
      <h1 style={{ fontFamily: "inherit", color: "rgb(157, 173, 127)" }}>
        Lớp {LopChuyenNganh}
      </h1>
      <div
        style={{
          alignItems: "",
          fontFamily: "inherit",
          justifyContent: "center",
          fontSize: "70px",
          color: "rgb(46, 79, 41)",
          marginBottom: "30px",
          // marginLeft: "20vh",
          fontWeight: "bolder",
        }}
      >
        DANH SÁCH HỌC VIÊN
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "",
          justifyContent: "center",
          minHeight: "100vh",
          marginLeft: "20vh",
          marginRight: "20vh",
        }}
      >
        <TableContainer>
          <Table
            variant="simple"
            size="sm"
            style={{ border: "1px solid black", borderCollapse: "collapse" }}
          >
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr style={{ backgroundColor: "rgb(157, 173, 127)" }}>
                {Object.keys(students[0].attributes).map((attribute) => (
                  <Th key={attribute}>{attribute}</Th>
                ))}
                <Th></Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {students.map((student) => (
                <Tr key={student.id}>
                  {Object.values(student.attributes).map((value, index) => (
                    <Td key={index}>{value}</Td>
                  ))}
                  <Td>
                    <button
                      onClick={handleShowModal}
                      variant="ghost"
                      bg="rgb(26,132,74)"
                      color={"white"}
                      left={"2%"}
                    >
                      Sửa
                    </button>
                    <Modal show={showModal} onHide={handleCloseModal}>
                      <Modal.Header closeButton>
                        <Modal.Title>Modal Tiêu Đề</Modal.Title>
                      </Modal.Header>
                      <Modal.Body></Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                          Đóng
                        </Button>
                        <Button variant="primary">Lưu Thay Đổi</Button>
                      </Modal.Footer>
                    </Modal>
                  </Td>
                  <Td>
                    <button
                      variant="ghost"
                      bg="rgb(26,132,74)"
                      color={"white"}
                      left={"2%"}
                    >
                      Xóa
                    </button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default ListHocVienTable;
