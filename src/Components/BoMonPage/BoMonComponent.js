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

  const BoMon = (props) => {
    const {idKhoa} = useParams();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {
      isOpen: isEditModalOpen,
      onOpen: onEditModalOpen,
      onClose: onEditModalClose,
    } = useDisclosure();
    const [TenBoMon, setTenBoMon] = useState(props.tenBM || "");
  
    const idBoMon = props.maBM;
    const nav = useNavigate();
    const handleOnClick = () => {
      nav(`/khoa/${idKhoa}/${idBoMon}`);
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
        const khoaId = idKhoa;
        const tenBM = TenBoMon;
        const formdata = {
          tenBM,
          khoaId
        };
        await bomonAPI.update(idBoMon, formdata);
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
              {props.stt}
            </Td>
            <Td
              position={"relative"}
              textAlign={"center"}
              cursor={"pointer"}
              onClick={handleOnClick}
            >
              {props.tenBM}
            </Td>
            <Td position={"relative"} textAlign={"center"}>
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
                          setTenBoMon(e.target.value);
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
            <Td position={"relative"} textAlign={"center"}>
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
  export default BoMon;
  