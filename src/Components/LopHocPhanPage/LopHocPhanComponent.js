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
    Tbody,
    Td,
    Tr,
    useDisclosure,
  } from "@chakra-ui/react";
  import { useState, React } from "react";
  import bomonAPI from "../../api/bomonAPI";
  import { useNavigate, useParams } from "react-router-dom";
import hocphanAPI from "../../api/hocphanAPI";
  
  const LopHPComponent = (props) => {
    const { idBoMon } = useParams();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {
      isOpen: isEditModalOpen,
      onOpen: onEditModalOpen,
      onClose: onEditModalClose,
    } = useDisclosure();
    const [TenHocPhan, setTenHocPhan] = useState(props.tenHocPhan || "");
  
    const idHocPhan = props.maHocPhan;
    const nav = useNavigate();
    // const handleOnClick = () => {
    //   nav(`/khoa/${idKhoa}/${idBoMon}`);
    // };
  
    const handleXoaBoMon = async () => {
      try {
        await hocphanAPI.delete(idHocPhan);
        onClose();
        window.location.reload();
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    };
  
    const handleSuaBoMon = async () => {
      try {
        // const bomonId = idBoMon;
        // const tenHocPhan = TenBoMon;
        // const formdata = {
        //   tenBM,
        //   khoaId,
        // };
        // await bomonAPI.update(idBoMon, formdata);
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
            <Td cursor={"pointer"} 
            // onClick={handleOnClick}
            >
              {props.tenBM}
            </Td>
            <Td>
              <Button onClick={onOpen}>
                <i class="fa-solid fa-pencil fa-lg" color="#000000"></i>
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
                        //   setTenBoMon(e.target.value);
                        }}
                      />
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
            <Td>
              <Button onClick={onEditModalOpen}>
                <i class="fa-solid fa-trash fa-lg" color="#000000"></i>
              </Button>
              <Modal
                isCentered
                onClose={onEditModalClose}
                isOpen={isEditModalOpen}
              >
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
        </Tbody>
      </>
    );
  };
  export default LopHPComponent;
  