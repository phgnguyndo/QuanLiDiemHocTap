import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import {
  Box,
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
import { useState, React } from "react";
import bomonAPI from "../../api/bomonAPI";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import khoaAPI from "../../api/khoaAPI";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { notification } from "antd";

const BoMon = (props) => {
  const { idKhoa } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isEditModalOpen,
    onOpen: onEditModalOpen,
    onClose: onEditModalClose,
  } = useDisclosure();
  const [TenBoMon, setTenBoMon] = useState(props.tenBM || "");
  const [dsKhoa, setDsKhoa] = useState([]);
  const [maKhoa, setMaKhoa] = useState("");
  const idBoMon = props.maBM;
  // const nav = useNavigate();
  // const handleOnClick = () => {
  //   nav(`/khoa/${idKhoa}/${idBoMon}`);
  // };

  useEffect(() => {
    fetchKhoa();
  }, []);
  const fetchKhoa = async () => {
    setDsKhoa(await khoaAPI.getAll());
  };

  const handleXoaBoMon = async () => {
    try {
      await bomonAPI.delete(idBoMon);
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleSuaBoMon = async () => {
    try {
      const khoaId = maKhoa;
      console.log(khoaId);
      const tenBM = TenBoMon;
      const formdata = {
        tenBM,
        khoaId,
      };
      await bomonAPI.update(idBoMon, formdata);
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Error submitting form:", error);
      notification.error({
        message: "Vui lòng nhập đầy đủ thông tin !",
        duration: 3,
      });
    }
  };

  return (
    <>
      <Tr>
        <Td textAlign={"center"}>{props.stt}</Td>
        <Td cursor={"pointer"}>{props.tenBM}</Td>
        <Td >{props.tenKhoa}</Td>
        <Td textAlign={"right"}>
          <Button onClick={onOpen} color={"blue.500"} fontSize={"20px"}>
            <EditOutlined />
          </Button>
          <Modal isCentered isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Sửa thông tin bộ môn</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Tên bộ môn</FormLabel>
                  <Input
                    defaultValue={props.tenBM}
                    onChange={(e) => {
                      setTenBoMon(e.target.value);
                    }}
                  />
                </FormControl>
                <FormControl mt={4}>
              <FormLabel>Khoa</FormLabel>
              <Select
                placeholder="Chọn khoa"
                id="KhoaInPut"
                onChange={(e) => {
                  setMaKhoa(e.target.value);
                }}
              >
                {dsKhoa.map((item, index) => (
                  <option key={index} value={item.maKhoa}>
                    {item.tenKhoa}
                  </option>
                ))}
              </Select>
            </FormControl>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={handleSuaBoMon}>
                  Lưu
                </Button>
                <Button onClick={onClose}>Hủy</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Td>
        <Td textAlign={"left"}>
          <Button onClick={onEditModalOpen} color={"red.500"} fontSize={"20px"}>
            <DeleteOutlined />
          </Button>
          <Modal isCentered onClose={onEditModalClose} isOpen={isEditModalOpen}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Muốn xóa bộ môn {props.tenBM} không ?</ModalHeader>
              <ModalCloseButton />
              <ModalBody></ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={handleXoaBoMon}>
                  Xóa
                </Button>
                <Button onClick={onEditModalClose}>Hủy</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Td>
      </Tr>
    </>
  );
};
export default BoMon;