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
import hocvienAPI from "../../api/hocVienAPI";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Tbody,
  Td,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";

const HocVien = (props) => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const {
  //   isOpen: isEditModalOpen,
  //   onOpen: onEditModalOpen,
  //   onClose: onEditModalClose,
  // } = useDisclosure();

  // const [gioiTinh, setGioiTinh] = useState(props.gioiTinh || true);
  // const [queQuan, setQueQuan] = useState(props.queQuan || "");
  // const [capBac, setCapBac] = useState(props.capBac || "");
  // const [imageHV, setImageHV] = useState("");

  // const initialRef = React.useRef(null);
  // const finalRef = React.useRef(null);

  // const { idLop } = useParams();
  // const lcnId = idLop;

  // const handleSuaHV = async () => {};
  // const handleXoaHV = async () => {
  //   try {
  //     const idHV = props.maHV;
  //     const formdata = new FormData();
  //     formdata.append("maHV", maHV);
  //     formdata.append("lopChuyenNganhId", lcnId);
  //     formdata.append("tenHV", hoTen);
  //     formdata.append("ngaySinh", ngaySinh);
  //     formdata.append("gioiTinh", gioiTinh);
  //     formdata.append("queQuan", queQuan);
  //     formdata.append("capBac", capBac);
  //     formdata.append("file", imageHV);
  //     await hocvienAPI.update(idHV, formdata);
  //     onClose();
  //     window.location.reload();
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //   }
  // };
  const { id } = useParams();
  const {idLop}=useParams();
  const idHV=props.maHV
  const nav= useNavigate()
  const handleOnClick=()=>{
      nav(`/home/${id}/${idLop}/${idHV}`)
  }

  return (
    <>
      <Tbody>
        <Tr>
          <Td position={"relative"} textAlign={"center"}>
            {props.maHV}
          </Td>
          <Td position={"relative"} textAlign={"center"} cursor={"pointer"} onClick={handleOnClick}>
            {props.hoTen}
          </Td>
          <Td position={"relative"} textAlign={"center"}>
            {props.ngaySinh}
          </Td>
          <Td position={"relative"} textAlign={"center"}>
            {props.gioiTinh}
          </Td>
          <Td position={"relative"} textAlign={"center"}>
            {props.queQuan}
          </Td>
          <Td position={"relative"} textAlign={"center"}>
            {props.capBac}
          </Td>
          {/* <Td position={"relative"} textAlign={"center"}>
            <Button onClick={onOpen}>Sửa</Button>
            <Modal
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Sửa thông tin học viên</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl>
                    <FormLabel>Tên học viên</FormLabel>
                    <Input ref={initialRef} placeholder="Tên HV" />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Ngày sinh</FormLabel>
                    <Input ref={finalRef} placeholder="Ngày Sinh" />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Giới tính</FormLabel>
                    <Input
                      placeholder="Giới Tính"
                      id="gioiTinhInput"
                      onChange={(e) => {
                        setGioiTinh(e.target.value);
                      }}
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Quê quán</FormLabel>
                    <Input
                      placeholder="Quê quán"
                      id="queQuanInput"
                      onChange={(e) => {
                        setQueQuan(e.target.value);
                      }}
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Cấp bậc</FormLabel>
                    <Input
                      placeholder="Cấp bậc"
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
                  <Button colorScheme="blue" mr={3}>
                    Lưu
                  </Button>
                  <Button>Hủy</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Td> */}

          {/* <Td>
            <Button>Xóa</Button>
            <Modal
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
              // isOpen={}
              // onClose={}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>
                  Muốn xóa học viên {props.name} không ?
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody></ModalBody>
                <ModalFooter>
                  <Button colorScheme="blue" mr={3}>
                    Xóa
                  </Button>
                  <Button />Hủy</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Td> */}
        </Tr>
      </Tbody>
    </>
  );
};
export default HocVien;
