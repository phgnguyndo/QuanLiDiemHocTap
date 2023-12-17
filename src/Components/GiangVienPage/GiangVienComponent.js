import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useState, React, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Td,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import giangVienAPI from "../../api/giangVienAPI";
import bomonAPI from "../../api/bomonAPI";

const GiangVienComponent = (props) => {
  const capBacData = [
    "Đại tá",
    "Thượng tá",
    "Trung tá",
    "Thiếu tá",
    "Đại úy",
    "Thượng úy",
    "Trung úy",
    "Thiếu úy",
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isEditModalOpen,
    onOpen: onEditModalOpen,
    onClose: onEditModalClose,
  } = useDisclosure();

  const [gioiTinh, setGioiTinh] = useState(props.gioiTinh || true);
  const [capBac, setCapBac] = useState(props.capBac || "");
  const [tenGV, setTenGV] = useState(props.hoTen || "");
  const [sdt, setSdt] = useState(props.sdt || "");
  const [dsBomon, setDsBomon] = useState([]);
  const MaGV = props.maGV;
  const [tenBoMon, setTenBoMon] = useState(props.boMon.tenBoMon || "");
  const [boMonId, setBomonID] = useState("");

  const handleXoaGV = async () => {
    try {
      await giangVienAPI.delete(MaGV);
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  const handleSuaGV = async () => {
    try {
      const formData = {
        tenGV,
        gioiTinh,
        capBac,
        boMonId,
        sdt,
      };
      console.log(formData);
      await giangVienAPI.update(MaGV, formData);
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    fetchDsBoMon();
  }, []);
  const fetchDsBoMon = async () => {
    setDsBomon(await bomonAPI.getAll());
  };
  return (
    <>
      <Tr>
        <Td position={"relative"} textAlign={"center"}>
          {props.STT}
        </Td>
        <Td position={"relative"} textAlign={"center"} cursor={"pointer"}>
          {props.hoTen}
        </Td>
        <Td position={"relative"} textAlign={"center"}>
          {props.gioiTinh ? "Nam" : "Nữ"}
        </Td>
        <Td position={"relative"} textAlign={"center"}>
          {props.capBac}
        </Td>
        <Td position={"relative"} textAlign={"center"}>
          {props.sdt}
        </Td>
        <Td position={"relative"} textAlign={"center"}>
          {props.boMon.tenBM}
        </Td>
        <Td position={"relative"} textAlign={"center"}>
          <Button onClick={onOpen} bg="blue.500">
            <EditOutlined />
          </Button>
          <Modal isCentered isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Sửa thông tin giảng viên</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Tên giảng viên</FormLabel>
                  <Input
                    defaultValue={props.hoTen}
                    onChange={(e) => {
                      setTenGV(e.target.value);
                    }}
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Số điện thoại</FormLabel>
                  <Input
                    defaultValue={props.sdt}
                    onChange={(e) => {
                      setSdt(e.target.value);
                    }}
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Thuộc bộ môn</FormLabel>
                  <Select
                    placeholder="Tên bộ môn"
                    id="boMonInput"
                    onChange={(e) => {
                      setBomonID(e.target.value);
                    }}
                  >
                    {dsBomon.map((item, index) => (
                      <option key={index} value={item.maBM}>
                        {item.tenBM}
                      </option>
                    ))}
                  </Select>
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Giới tính</FormLabel>
                  {/* <Select
                        id="gioiTinhInput"
                        onChange={(e) => {
                          setGioiTinh(parseInt(e.target.value));
                        }}
                      >
                        <option value={true}>Nam</option>
                        <option value={false}>Nữ</option>
                      </Select> */}
                  <Select
                    id="gioiTinhInput"
                    onChange={(e) => {
                      // Chuyển đổi giá trị từ chuỗi thành boolean
                      const gioiTinhValue =
                        e.target.value === "true" ? true : false;
                      setGioiTinh(gioiTinhValue);
                    }}
                  >
                    <option value="true">Nam</option>
                    <option value="false">Nữ</option>
                  </Select>
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Cấp bậc</FormLabel>
                  <Select
                    placeholder="Cấp bậc"
                    id="capBacInput"
                    onChange={(e) => {
                      setCapBac(e.target.value);
                    }}
                  >
                    {capBacData.map((capbac, index) => (
                      <option key={index} value={capbac}>
                        {capbac}
                      </option>
                    ))}
                  </Select>
                </FormControl>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={handleSuaGV}>
                  Lưu
                </Button>
                <Button onClick={onClose}>Hủy</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Td>
        <Td position={"relative"} textAlign={"center"}>
          <Button onClick={onEditModalOpen} bg={"red.500"}>
            <DeleteOutlined />
          </Button>
          <Modal isCentered onClose={onEditModalClose} isOpen={isEditModalOpen}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>
                Muốn xóa giảng viên {props.hoTen} không ?
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody></ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={handleXoaGV}>
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
export default GiangVienComponent;