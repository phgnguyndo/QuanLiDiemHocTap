import {
  FormControl,
  FormLabel,
  Input,
  Button,
  useDisclosure,
  Select,
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
const DiemComponent = (props) => {
  const [phieuDiem, setPhieuDiem] = useState([]);
  const [dsHocPhan, setDsHocPhan] = useState([]);
  const [maHocPhan, setMaHocPhan] = useState("");
  const { idHV } = useParams();
  const [diemCC, setDiemCC] = useState(props.DiemChuyenCan || 0);
  const [diemTX, setDiemTX] = useState(props.DiemThuongXuyen || 0);
  const [diemThi, setDiemThi] = useState(props.DiemThiKetThucMon || 0);
  const [diemThiLai, setDiemThiLai] = useState(props.DiemThiLai || 0);
  const [lanThi, setLanThi] = useState(props.LanThi || 0);
  const hocVienId = idHV;
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isSubmitDeleteModalOpen,
    onOpen: onSubmitDeleteModalOpen,
    onClose: onSubmitDeleteModalClose,
  } = useDisclosure();
  useEffect(() => {
    fetchPhieuDiem();
  }, []);
  const fetchPhieuDiem = async () => {
    setPhieuDiem(await phieuDiemAPI.get(idHV));
  };

  useEffect(() => {
    fetchHocPhan();
  }, []);

  const fetchHocPhan = async () => {
    setDsHocPhan(await hocPhanAPI.getAll());
  };
  const handleSubmit = async () => {
    try {
      const phieudiemID = props.MaPhieuDiem;
      const hocPhanId = maHocPhan;
      const formData = {
        hocPhanId,
        hocVienId,
        diemCC,
        diemTX,
        diemThi,
        diemThiLai,
        lanThi,
      };
      console.log(phieudiemID);
      await phieuDiemAPI.update(phieudiemID, formData);
      onClose();
      window.location.reload();
    } catch (error) {
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
        <Td position={"relative"} textAlign={"center"}>
          {props.DiemThiLai}
        </Td>
        <Td position={"relative"} textAlign={"center"}>
          {(
            props.DiemChuyenCan * 0.1 +
            props.DiemThuongXuyen * 0.3 +
            props.DiemThiKetThucMon * 0.6
          ).toFixed(2)}
        </Td>
        <Td position={"relative"} textAlign={"center"}>
          {/* <Button
            variant="solid"
            colorScheme="blue"
            onClick={onOpen}
            fontSize={"12px"}
          >
            Sửa
          </Button> */}
          <EditOutlined
            style={{
              fontSize: "20px",
              position: "relative",
              color: "blue",
              left: "15px",
            }}
            onClick={onOpen}
          />
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
                <FormControl mt={4}>
                  <FormLabel>Tên học phần</FormLabel>
                  <Select
                    placeholder="Tên học phần"
                    onChange={(e) => {
                      setMaHocPhan(e.target.value);
                    }}
                  >
                    {dsHocPhan.map((item, index) => (
                      <option key={index} value={item.maHocPhan}>
                        {item.tenHocPhan}
                      </option>
                    ))}
                  </Select>
                </FormControl>
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
                <FormControl>
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
          {/* <Button
            colorScheme="green"
            mr={3}
            onClick={onSubmitDeleteModalOpen}
            fontSize={"12px"}
          >
            Xóa
          </Button> */}
          <DeleteOutlined
            style={{
              color: "red",
              fontSize: "20px",
              position: "relative",
              left: "-15px",
            }}
            onClick={onSubmitDeleteModalOpen}
          />
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
