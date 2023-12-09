import {
  FormControl,
  FormLabel,
  Input,
  Button,
  useDisclosure,
  Select,
  Text,
} from "@chakra-ui/react";
import { Td, Tr } from "@chakra-ui/table";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import React, { useState } from "react";
import phieuDiemAPI from "../../api/PhieuDiem";
import { useParams } from "react-router-dom";
const DiemComponent = (props) => {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isDeleteModalOpen,
    onOpen: onDeleteModalOpen,
    onClose: onDeleteModalClose,
  } = useDisclosure();
  const {
    isOpen: isSubmitDeleteModalOpen,
    onOpen: onSubmitDeleteModalOpen,
    onClose: onSubmitDeleteModalClose,
  } = useDisclosure();

  // const {
  //   isOpen: isEditModalOpen,
  //   onOpen: onEditModalOpen,
  //   onClose: onEditModalClose,
  // } = useDisclosure();
  // const {
  //   isOpen: isSubmitDeleteModalOpen,
  //   onOpen: onSubmitDeleteModalOpen,
  //   onClose: onSubmitDeleteModalClose,
  // } = useDisclosure();

  const { idHV } = useParams();
  // const [diemCC,setDiemCC] = useState(0);
  // const [diemTX,setDiemTX] = useState(0);
  // const [diemThi,setDiemThi] = useState(0);
  // const [diemThiLai,setDiemThiLai] = useState(0);
  // const [lanThi,setLanThi] = useState(0);
  const hocVienId = idHV;

  const handleSubmit = async () => {
    // try {
    //   const lopHocPhanId = "76878356-a9e8-4664-1bac-08dbeddacba9";
    //   const formData = {
    //     lopHocPhanId ,
    //     hocVienId ,
    //     diemCC ,
    //     diemTX ,
    //     diemThi ,
    //     diemThiLai ,
    //     lanThi
    //   }
    //   await phieuDiemAPI.create(formData);
    //   onClose();
    //   window.location.reload();
    // } catch (error) {
    //   console.log(error);
    // }
  };

  //   const handleDelete = async () => {
  //     try {
  //       await phieuDiemAPI.delete(maLCN);
  //       onClose();
  //       // nav(`/home/${id}#`)
  //       window.location.reload();
  //     } catch (error) {
  //       console.error("Error submitting form:", error);
  //     }
  //   };
  return (
    <>
      <Tr fontSize={"2px"}>
        <Td position={"relative"} textAlign={"center"}>
          {props.stt}
        </Td>
        <Td position={"relative"} textAlign={"center"}>
          {props.TenHocPhan}
        </Td>
        <Td position={"relative"} textAlign={"center"}>
          {props.HocKy}
        </Td>
        <Td position={"relative"} textAlign={"center"}>
          {props.SoTinChi}
        </Td>
        <Td position={"relative"} textAlign={"center"}>
          {props.DiemChuyenCan}
        </Td>
        <Td position={"relative"} textAlign={"center"}>
          {props.DiemThuongXuyen}
        </Td>
        <Td position={"relative"} textAlign={"center"}>
          {props.DiemThiKetThucMon}
        </Td>
        <Td position={"relative"} textAlign={"center"}>
          {props.LanThi}
        </Td>
        <Td position={"relative"} textAlign={"center"}>
          {(
            props.DiemChuyenCan * 0.1 +
            props.DiemThuongXuyen * 0.3 +
            props.DiemThiKetThucMon * 0.6
          ).toFixed(2)}
        </Td>
        <Td position={"relative"} textAlign={"center"}>
          <Button variant="solid" colorScheme="blue" onClick={onOpen} fontSize={"12px"}>
            Sửa
          </Button>
          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Sửa điểm học phần {props.MaHocPhan}</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Mã học phần</FormLabel>
                  <Input placeholder={props.MaHocPhan} />
                </FormControl>
                <FormControl>
                  <FormLabel>Tên môn học</FormLabel>
                  <Input
                    ref={initialRef}
                    type="text"
                    placeholder="VD: Giải tích"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Số tín chỉ</FormLabel>
                  <Input placeholder="VD: Giải tích" />
                </FormControl>
                <FormControl>
                  <FormLabel>Điểm Chuyên cần</FormLabel>
                  <Input
                    ref={finalRef}
                    type="text"
                    placeholder="Trên 0 dưới 10"
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Điểm thường xuyên</FormLabel>
                  <Input
                    placeholder="Trên 0 dưới 10"
                    id="quanSoInput"
                    onChange={(e) => {
                      // setQuanSo(parseInt(e.target.value));
                    }}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Điểm Thi Kết thúc môn</FormLabel>
                  <Input placeholder="VD: Giải tích" />
                </FormControl>
                <FormControl>
                  <FormLabel>Số lần thi lại</FormLabel>
                  <Input placeholder="VD: Giải tích" />
                </FormControl>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Td>
        <Td position={"relative"} textAlign={"center"}>
          <Button colorScheme="green" mr={3} onClick={onSubmitDeleteModalOpen} fontSize={"12px"}>
            Xóa
          </Button>
          <Modal
            isCentered
            onClose={onSubmitDeleteModalClose}
            isOpen={isSubmitDeleteModalOpen}
            motionPreset="slideInBottom"
          >
            <ModalOverlay />
            <ModalContent fontFamily={"cursive"}>
              <ModalHeader>Xóa đại đội</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>Bạn có chắc chắn muốn xóa {props.MaHocPhan} không?</Text>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button
                  colorScheme="blue"
                  bg={"rgb(243,66,33)"}
                  color={"white"}
                  // onClick={handleDelete}
                >
                  Xóa
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Td>
      </Tr>
    </>
  );
};

export default DiemComponent;
