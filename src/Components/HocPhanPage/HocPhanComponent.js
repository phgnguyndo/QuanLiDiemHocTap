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
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserAddOutlined,
  LogoutOutlined,
  RadarChartOutlined,
  HeatMapOutlined,
  ReadOutlined,
  UserOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
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
import hocPhanAPI from "../../api/hocphanAPI";

const HocPhanComponent = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isEditModalOpen,
    onOpen: onEditModalOpen,
    onClose: onEditModalClose,
  } = useDisclosure();

  const [tenHocPhan, setTenHP] = useState(props.tenHP || "");
  const [hocKy, setHocKy] = useState(props.hocKy || "");
  const [soTC, setTinChi] = useState(props.soTC || "");
  const [soTiet, setSotiet] = useState(props.soTiet || "");
  const MaHP = props.maHP;

  const handleXoaHP = async () => {
    try {
      await hocPhanAPI.delete(MaHP);
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  const handleSuaHP = async () => {
    try {
      const boMonId = props.boMonId;

      const formData = {
        tenHocPhan,
        soTiet,
        soTC,
        hocKy,
        boMonId,
      };
      await hocPhanAPI.update(MaHP, formData);
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <Tr>
        <Td position={"relative"} textAlign={"center"}>
          {props.STT}
        </Td>
        <Td position={"relative"} textAlign={"center"} cursor={"pointer"}>
          {props.tenHP}
        </Td>
        <Td position={"relative"} textAlign={"center"}>
          {props.soTiet}
        </Td>
        <Td position={"relative"} textAlign={"center"}>
          {props.soTC}
        </Td>
        <Td position={"relative"} textAlign={"center"}>
          {props.hocKy}
        </Td>
        <Td position={"relative"} textAlign={"right"}>
          <Button onClick={onOpen} color={"blue.500"}>
            <EditOutlined style={{fontSize:"20px"}}/>
          </Button>
          <Modal isCentered isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Sửa thông tin về học phần</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Tên học phần</FormLabel>
                  <Input
                    defaultValue={props.tenHP}
                    onChange={(e) => {
                      setTenHP(e.target.value);
                    }}
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Số tiết</FormLabel>
                  <Input
                    defaultValue={props.soTiet}
                    onChange={(e) => {
                      setSotiet(e.target.value);
                    }}
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Số tín chỉ</FormLabel>
                  <Input
                    defaultValue={props.soTC}
                    onChange={(e) => {
                      setTinChi(e.target.value);
                    }}
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Thuộc học kỳ</FormLabel>
                  <Input
                    defaultValue={props.hocKy}
                    onChange={(e) => {
                      setHocKy(e.target.value);
                    }}
                  />
                </FormControl>

                {/* <FormControl mt={4}>
                      <FormLabel>Cấp bậc</FormLabel>
                      <Select
                        placeholder="Cấp bậc"
                        id="capBacInput"
                        onChange={(e) => {
                          setCapBac(e.target.value);
                        }}
                      >
                      </Select>
                    </FormControl> */}
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={handleSuaHP}>
                  Lưu
                </Button>
                <Button onClick={onClose}>Hủy</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Td>
        <Td position={"relative"} textAlign={"left"}>
          <Button onClick={onEditModalOpen} color={"red.500"}>
            <DeleteOutlined  style={{fontSize:"20px"}}/>
          </Button>
          <Modal isCentered onClose={onEditModalClose} isOpen={isEditModalOpen}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Muốn xóa học phần {props.tenHP} không ?</ModalHeader>
              <ModalCloseButton />
              <ModalBody></ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={handleXoaHP}>
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
export default HocPhanComponent;
