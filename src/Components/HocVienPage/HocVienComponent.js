import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { useDisclosure } from "@chakra-ui/hooks";
import { Input } from "@chakra-ui/input";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { Tbody, Td, Tr } from "@chakra-ui/table";
import React from "react";
import { useState } from "react";

const HocVien = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const handleSubmit = () => {};

  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [formData1, setFormData1] = useState({});
  const [formData2, setFormData2] = useState({});

  const handleCloseModal1 = () => setShowModal1(false);
  const handleShowModal1 = () => setShowModal1(true);

  const handleCloseModal2 = () => setShowModal2(false);
  const handleShowModal2 = () => setShowModal2(true);

  const handleFormSubmit1 = (e) => {
    e.preventDefault();
    console.log("Form 1 submitted:", formData1);
    handleCloseModal1();
  };

  const handleFormSubmit2 = (e) => {
    e.preventDefault();
    console.log("Form 2 submitted:", formData2);
    handleCloseModal2();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData1({ ...formData1, [name]: value });
  };

  return (
    <>
      <Tbody>
        <Tr>
          <Td position={"relative"} textAlign={"center"}>
            0123456789
          </Td>
          <Td position={"relative"} textAlign={"center"}>
            Nguyễn Văn Nghĩa
          </Td>
          <Td position={"relative"} textAlign={"center"}>
            21/02/2002
          </Td>
          <Td position={"relative"} textAlign={"center"}>
            Nam
          </Td>
          <Td position={"relative"} textAlign={"center"}>
            Nghệ An
          </Td>
          <Td position={"relative"} textAlign={"center"}>
            Thượng sĩ
          </Td>
          <Td position={"relative"} textAlign={"center"}>
            <Button onClick={handleShowModal1}>Sửa</Button>
            <Modal
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
              isOpen={showModal1}
              onClose={handleCloseModal1}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Sửa thông tin học viên</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl>
                    <FormLabel>Tên học viên</FormLabel>
                    {/* <Input ref={initialRef} placeholder="TenHV" /> */}
                    <Input
                      type="text"
                      name="HoTen"
                      onChange={handleChange}
                      placeholder="Họ tên"
                    ></Input>
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Ngày sinh</FormLabel>
                    {/* <Input ref={finalRef} placeholder="NgaySinh" /> */}
                    <Input
                      type="text"
                      name="NgaySinh"
                      onChange={handleChange}
                      placeholder="Ngày Sinh"
                    ></Input>
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Giới tính</FormLabel>
                    {/* <Input placeholder="Nam / Nữ" id="GioiTinh" /> */}
                    <Input
                      type="text"
                      name="GioiTinh"
                      onChange={handleChange}
                      placeholder="Giới Tính"
                    ></Input>
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Quê quán</FormLabel>
                    {/* <Input placeholder="Quê quán" id="QueQuan" /> */}
                    <Input
                      type="text"
                      name="QueQuan"
                      onChange={handleChange}
                      placeholder="Quê Quán"
                    ></Input>
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Cấp bậc</FormLabel>
                    {/* <Input placeholder="Cấp bậc" id="CapBac" /> */}
                    <Input
                      type="text"
                      name="CapBac"
                      onChange={handleChange}
                      placeholder="Cấp Bậc"
                    ></Input>
                  </FormControl>
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={handleFormSubmit1}>
                    Lưu
                  </Button>
                  <Button onClick={handleCloseModal1}>Hủy</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Td>

          <Td>
            <Button onClick={handleShowModal2}>Xóa</Button>
            <Modal
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
              isOpen={showModal2}
              onClose={handleCloseModal2}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Muốn xóa học viên {props.name} không ?</ModalHeader>
                <ModalCloseButton />
                <ModalBody></ModalBody>
                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={handleFormSubmit2}>
                    Xóa
                  </Button>
                  <Button onClick={handleCloseModal2}>Hủy</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Td>
        </Tr>
      </Tbody>
    </>
  );
};
export default HocVien;
