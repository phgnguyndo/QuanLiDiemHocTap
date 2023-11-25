import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { useState, React } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Tbody,
  Td,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import hocvienAPI from "../../api/hocvienAPI";
import anh from "../../Image/Logo.png";

const HocVien = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isEditModalOpen,
    onOpen: onEditModalOpen,
    onClose: onEditModalClose,
  } = useDisclosure();

  const [hoTen, setHoTen] = useState(props.hoTen || "");
  const [ngaySinh, setNgaySinh] = useState(props.ngaySinh || "");
  const [gioiTinh, setGioiTinh] = useState(props.gioiTinh || true);
  const [queQuan, setQueQuan] = useState(props.queQuan || "");
  const [capBac, setCapBac] = useState(props.capBac || "");
  const [imageHV, setImageHV] = useState("");

  const { id } = useParams();
  const { idLop } = useParams();
  const idHV = props.maHV;
  const nav = useNavigate();
  const handleOnClick = () => {
    nav(`/home/${id}/${idLop}/${idHV}`);
  };
  <img src={anh} alt="Ảnh đại diện" />;

  const handleXoaHV = async () => {
    try {
      await hocvienAPI.delete(idHV);
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  const handleSuaHV = async () => {
    try {
      const idHV = props.maHV;
      const formdata = new FormData();
      formdata.append("lopChuyenNganhId", idLop);
      formdata.append("tenHV", hoTen);
      formdata.append("ngaySinh", ngaySinh);
      formdata.append("gioiTinh", gioiTinh);
      formdata.append("queQuan", queQuan);
      formdata.append("capBac", capBac);
      formdata.append("file", imageHV);
      await hocvienAPI.update(idHV, formdata);
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <Tbody>
        <Tr>
          <Td position={"relative"} textAlign={"center"}>
            {props.maHV}
          </Td>
          <Td
            position={"relative"}
            textAlign={"center"}
            cursor={"pointer"}
            onClick={handleOnClick}
          >
            {props.hoTen}
          </Td>
          <Td position={"relative"} textAlign={"center"}>
            {props.ngaySinh}
          </Td>
          <Td position={"relative"} textAlign={"center"}>
            {props.gioiTinh ? "Nam" : "Nữ"}
          </Td>
          <Td position={"relative"} textAlign={"center"}>
            {props.queQuan}
          </Td>
          <Td position={"relative"} textAlign={"center"}>
            {props.capBac}
          </Td>
          <Td position={"relative"} textAlign={"center"}>
            <Button onClick={onOpen}>Sửa</Button>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Sửa thông tin học viên</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl>
                    <FormLabel>Tên học viên</FormLabel>
                    <Input
                      defaultValue={props.hoTen}
                      onChange={(e) => {
                        setHoTen(e.target.value);
                      }}
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Ngày sinh</FormLabel>
                    <Input
                      defaultValue={props.ngaySinh}
                      onChange={(e) => {
                        setNgaySinh(e.target.value);
                      }}
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Giới tính</FormLabel>
                    <Select
                      id="gioiTinhInput"
                      onChange={(e) => {
                        setGioiTinh(e.target.value);
                      }}
                    >
                      <option value={true}>Nam</option>
                      <option value={false}>Nữ</option>
                    </Select>
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Quê quán</FormLabel>
                    <Input
                      defaultValue={props.queQuan}
                      id="queQuanInput"
                      onChange={(e) => {
                        setQueQuan(e.target.value);
                      }}
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Cấp bậc</FormLabel>
                    <Input
                      defaultValue={props.capBac}
                      id="capBacInput"
                      onChange={(e) => {
                        setCapBac(e.target.value);
                      }}
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Ảnh</FormLabel>
                    <Input
                      type="file"
                      name="file"
                      onChange={(e) => {
                        setImageHV(e.target.files[0]);
                      }}
                    />
                  </FormControl>
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={handleSuaHV}>
                    Lưu
                  </Button>
                  <Button onClick={onClose}>Hủy</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Td>
          <Td position={"relative"} textAlign={"center"}>
            <Button onClick={onEditModalOpen}>Xóa</Button>
            <Modal
              isCentered
              onClose={onEditModalClose}
              isOpen={isEditModalOpen}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>
                  Muốn xóa học viên {props.name} không ?
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody></ModalBody>
                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={handleXoaHV}>
                    Xóa
                  </Button>
                  <Button onClick={onEditModalClose}>Hủy</Button>
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
