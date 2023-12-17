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
import { useState, React, useEffect } from "react";
import hocphanAPI from "../../api/hocphanAPI";
import lophocphanAPI from "../../api/lophocphanAPI";
import { useNavigate, useParams } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import giangVienAPI from "../../api/giangVienAPI";
import dayhocAPI from "../../api/dayhocAPI";

const LopHPComponent = (props) => {
  const { idBoMon } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [diaDiem, setDiaDiem] = useState(props.diaDiem||"");
  const [soHV, setSoHV] = useState(props.soHV || 0);
  const [maHP, setMaHP] = useState("");
  const [dsHocPhan, setDsHocPhan] = useState([]);
  const [dsGV, setDsGV] = useState([]);
  const [maGV, setMaGV] = useState("");
  const {
    isOpen: isEditModalOpen,
    onOpen: onEditModalOpen,
    onClose: onEditModalClose,
  } = useDisclosure();
  useEffect(() => {
    fetchHocPhan();
  }, []);
  const fetchHocPhan = async () => {
    setDsHocPhan(await hocphanAPI.getAll());
  };

  useEffect(() => {
    fetchGV();
  }, []);
  const fetchGV = async () => {
    setDsGV(await giangVienAPI.getAll());
  };
  const nav = useNavigate();
  // const handleOnClick = () => {
  //   nav(`/khoa/${idKhoa}/${idBoMon}`);
  // };
  const maLhp = props.maLHP;
  const handleXoaLopHP = async () => {
    try {
      
      await lophocphanAPI.delete(maLhp);
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleSuaLopHP = async () => {
    try {
      const hocPhanId = maHP;
      const giangVienId = maGV;
      const lopHocPhanId=props.maLHP;
      const formdata = {
        diaDiem,
        soHV,
        giangVienId,
        hocPhanId,
      };
      // const formdataDayHoc = {
      //   giangVienId,
      //   lopHocPhanId
      // };

      await lophocphanAPI.update(maLhp,formdata);
      // await dayhocAPI.update(maLhp,formdata);
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
          <Td textAlign={"center"}>{props.stt}</Td>
          <Td cursor={"pointer"} textAlign={"center"}>
            {props.maLHP}
          </Td>
          <Td cursor={"pointer"} textAlign={"center"}>
            {props.tenHocPhan}
          </Td>
          <Td cursor={"pointer"} textAlign={"center"}>
            {props.diaDiem}
          </Td>
          <Td textAlign={"center"}>
            <EditOutlined
              onClick={onOpen}
              style={{
                position: "relative",
                left: "-15px",
                fontSize: "20px",
                color: "blue",
              }}
            />
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Sửa thông tin lớp học phần</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl mt={4}>
                    <FormLabel>Địa điểm</FormLabel>
                    <Input
                      type="text"
                      defaultValue={props.diaDiem}
                      onChange={(e) => {
                        setDiaDiem(e.target.value);
                      }}
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Số học viên</FormLabel>
                    <Input
                      defaultValue={props.soHV}
                      onChange={(e) => {
                        setSoHV(parseInt(e.target.value));
                      }}
                    />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Học phần</FormLabel>
                    <Select
                      placeholder="Chọn học phần"
                      id="HPInPut"
                      onChange={(e) => {
                        setMaHP(e.target.value);
                      }}
                    >
                      {dsHocPhan.map((item, index) => (
                        <option key={index} value={item.maHocPhan}>
                          {item.tenHocPhan}
                        </option>
                      ))}
                    </Select>
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Học phần</FormLabel>
                    <Select
                      placeholder="Chọn giảng viên"
                      id="GVInPut"
                      onChange={(e) => {
                        setMaGV(e.target.value);
                      }}
                    >
                      {dsGV.map((item, index) => (
                        <option key={index} value={item.maGV}>
                          {item.tenGV}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={handleSuaLopHP}>
                    Lưu
                  </Button>
                  <Button onClick={onClose}>Hủy</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            <DeleteOutlined
              onClick={onEditModalOpen}
              style={{
                position: "relative",
                left: "15px",
                fontSize: "20px",
                color: "red",
              }}
            />
            <Modal
              isCentered
              onClose={onEditModalClose}
              isOpen={isEditModalOpen}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Xóa lớp học phần?</ModalHeader>
                <ModalCloseButton />
                <ModalBody></ModalBody>
                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={handleXoaLopHP}>
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
export default LopHPComponent;
