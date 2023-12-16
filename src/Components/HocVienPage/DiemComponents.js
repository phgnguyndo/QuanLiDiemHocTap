import {
  FormControl,
  FormLabel,
  Input,
  Button,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
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
import React, { useEffect, useState } from "react";
import phieuDiemAPI from "../../api/PhieuDiem";
import { useParams } from "react-router-dom";
import hocPhanAPI from "../../api/hocphanAPI";
import StorageKeys from "../../constance/storage-key";
import { notification } from "antd";
const DiemComponent = (props) => {
  const user = JSON.parse(localStorage.getItem(StorageKeys.USER));
  const isDaiDoi = user.role === "user1";
  const { idHV } = useParams();
  const [diemCC, setDiemCC] = useState(props.DiemChuyenCan || 0);
  const [diemTX, setDiemTX] = useState(props.DiemThuongXuyen || 0);
  const [diemThi, setDiemThi] = useState(props.DiemThiKetThucMon || 0);
  const hocVienId = idHV;
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isSubmitDeleteModalOpen,
    onOpen: onSubmitDeleteModalOpen,
    onClose: onSubmitDeleteModalClose,
  } = useDisclosure();
  const handleSubmit = async () => {
    try {
      const phieudiemID = props.MaPhieuDiem;
      const hocPhanId = props.MaHocPhan;
      const formData = {
        hocPhanId,
        hocVienId,
        diemCC,
        diemTX,
        diemThi
      };
      console.log(phieudiemID);
      await phieuDiemAPI.update(phieudiemID, formData);
      onClose();
      window.location.reload();
    } catch (error) {
      notification.error({
        message: "Vui lòng điền đủ thông tin",
        duration: 3,
      });
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      const phieudiemID = props.MaPhieuDiem;
      await phieuDiemAPI.delete(phieudiemID);
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Lỗi", error);
    }
  };
  return (
    <>
      <Tr fontSize={"2px"}>
        <Td position={"relative"} textAlign={"center"}>
          {props.stt}
        </Td>
        <Td position={"relative"} textAlign={"center"}>
          {props.TenHocPhan}
        </Td>
        {/* <Td position={"relative"} textAlign={"center"}>
          {props.HocKy}
        </Td> */}
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
        {/* <Td position={"relative"} textAlign={"center"}>
          {props.DiemThiLai}
        </Td> */}
        <Td position={"relative"} textAlign={"center"}>
          {props.DiemTBM}
        </Td>
        <Td position={"relative"} textAlign={"right"}>
          {isDaiDoi && (
            <EditOutlined
              style={{
                fontSize: "20px",
                color: "blue",
                position:"relative",
                left:"-38%"
              }}
              onClick={onOpen}
            />
          )}
          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Sửa điểm học phần</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Điểm Chuyên cần</FormLabel>
                  <Input
                    ref={finalRef}
                    defaultValue={props.DiemChuyenCan}
                    onChange={(e) => {
                      setDiemCC(parseFloat(e.target.value));
                    }}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Điểm thường xuyên</FormLabel>
                  <Input
                    defaultValue={props.DiemThuongXuyen}
                    onChange={(e) => {
                      setDiemTX(parseFloat(e.target.value));
                    }}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Điểm Thi Kết thúc môn</FormLabel>
                  <Input
                    defaultValue={props.DiemThiKetThucMon}
                    onChange={(e) => {
                      setDiemThi(parseFloat(e.target.value));
                    }}
                  />
                </FormControl>
                {/* <FormControl>
                  <FormLabel>Điểm Thi Lại</FormLabel>
                  <Input
                    defaultValue={props.DiemThiLai}
                    onChange={(e) => {
                      setDiemThiLai(parseFloat(e.target.value));
                    }}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Số lần thi lại</FormLabel>
                  <Input
                    defaultValue={props.LanThi}
                    onChange={(e) => {
                      setLanThi(parseFloat(e.target.value));
                    }}
                  />
                </FormControl> */}
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
        <Td position={"relative"} textAlign={"left"}>
          {isDaiDoi && (
            <DeleteOutlined
              onClick={onSubmitDeleteModalOpen}
              style={{
                fontSize: "20px",
                color: "red",
                position:"relative",
                left:"-44px"
              }}
            />
          )}
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
                <Text>Bạn có chắc chắn muốn xóa không?</Text>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button
                  colorScheme="blue"
                  bg={"rgb(243,66,33)"}
                  color={"white"}
                  onClick={handleDelete}
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
