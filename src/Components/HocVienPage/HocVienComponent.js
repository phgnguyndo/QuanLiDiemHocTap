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
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const HocVien = (props) => {
  const capBacData = [
    "Binh nhất",
    "Binh nhì",
    "Hạ sĩ",
    "Trung sĩ",
    "Thượng sĩ",
  ];
  const provinceData = [
    "An Giang",
    "Bà Rịa-Vũng Tàu",
    "Bắc Giang",
    "Bắc Kạn",
    "Bạc Liêu",
    "Bắc Ninh",
    "Bến Tre",
    "Bình Định",
    "Bình Dương",
    "Bình Phước",
    "Bình Thuận",
    "Cà Mau",
    "Cần Thơ",
    "Cao Bằng",
    "Đà Nẵng",
    "Đắk Lắk",
    "Đắk Nông",
    "Điện Biên",
    "Đồng Nai",
    "Đồng Tháp",
    "Gia Lai",
    "Hà Giang",
    "Hà Nam",
    "Hà Nội",
    "Hà Tĩnh",
    "Hải Dương",
    "Hải Phòng",
    "Hậu Giang",
    "Hòa Bình",
    "Hưng Yên",
    "Khánh Hòa",
    "Kiên Giang",
    "Kon Tum",
    "Lai Châu",
    "Lâm Đồng",
    "Lạng Sơn",
    "Lào Cai",
    "Long An",
    "Nam Định",
    "Nghệ An",
    "Ninh Bình",
    "Ninh Thuận",
    "Phú Thọ",
    "Phú Yên",
    "Quảng Bình",
    "Quảng Nam",
    "Quảng Ngãi",
    "Quảng Ninh",
    "Quảng Trị",
    "Sóc Trăng",
    "Sơn La",
    "Tây Ninh",
    "Thái Bình",
    "Thái Nguyên",
    "Thanh Hóa",
    "Thừa Thiên-Huế",
    "Tiền Giang",
    "Trà Vinh",
    "Tuyên Quang",
    "Vĩnh Long",
    "Vĩnh Phúc",
    "Yên Bái",
  ];
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
      <Tr>
        <Td>{props.maHV}</Td>
        <Td cursor={"pointer"} onClick={handleOnClick}>
          {props.hoTen}
        </Td>
        <Td>{props.ngaySinh}</Td>
        <Td>{props.gioiTinh ? "Nam" : "Nữ"}</Td>
        <Td>{props.queQuan}</Td>
        <Td>{props.capBac}</Td>
        <Td>
          <Button onClick={onOpen} background={"blue.300"}>
            <EditOutlined />
          </Button>
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
                  <Select
                    placeholder="Quê quán"
                    id="queQuanInput"
                    onChange={(e) => {
                      setQueQuan(e.target.value);
                    }}
                  >
                    {provinceData.map((province, index) => (
                      <option key={index} value={province}>
                        {province}
                      </option>
                    ))}
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
        <Td textAlign={"center"}>
          <Button onClick={onEditModalOpen} background={"red.300"}>
            <DeleteOutlined />
          </Button>
          <Modal isCentered onClose={onEditModalClose} isOpen={isEditModalOpen}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Muốn xóa học viên {props.name} không ?</ModalHeader>
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
    </>
  );
};
export default HocVien;
