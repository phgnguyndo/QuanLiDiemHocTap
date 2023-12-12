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
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Input,
  Stack,
  Tbody,
  Td,
  Text,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { useState, React } from "react";
import khoaAPI from "../../api/khoaAPI";
import { useNavigate } from "react-router-dom";

const KhoaComponent = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isEditModalOpen,
    onOpen: onEditModalOpen,
    onClose: onEditModalClose,
  } = useDisclosure();

  const [TenKhoa, setTenKhoa] = useState(props.tenKhoa || "");
  var maKhoa = props.maKhoa;
  const nav = useNavigate();

  const handleXoaKhoa = async () => {
    try {
      await khoaAPI.delete(maKhoa);
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleSuaKhoa = async () => {
    try {
      const tenKhoa = TenKhoa;
      const formdata = {
        tenKhoa,
      };
      await khoaAPI.update(maKhoa, formdata);
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
          <Td position={"relative"} textAlign={"center"} w={"3%"}>
            {props.stt}
          </Td>
          <Td
            position={"relative"}
            cursor={"pointer"}
            w={"95%"}
            // onClick={() => {
            //   nav(`/khoa/${props.maKhoa}`);
            // }}
          >
            {props.tenKhoa}
          </Td>
          <Td position={"relative"} textAlign={"center"}>
            <Button onClick={onEditModalOpen}>
              <i class="fa-solid fa-pencil fa-lg" color="#000000"></i>
            </Button>
            <Modal
              isCentered
              onClose={onEditModalClose}
              isOpen={isEditModalOpen}
              motionPreset="slideInBottom"
            >
              <ModalOverlay />
              <ModalContent fontFamily={"heading"}>
                <ModalHeader>Sửa thông tin</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Box>
                    <Input
                      type="text"
                      defaultValue={props.tenKhoa}
                      onChange={(e) => setTenKhoa(e.target.value)}
                    ></Input>
                  </Box>
                </ModalBody>
                <ModalFooter>
                  <Button
                    colorScheme="blue"
                    bg={"rgb(243,66,33)"}
                    mr={3}
                    onClick={onEditModalClose}
                  >
                    Hủy
                  </Button>
                  <Button
                    colorScheme="blue"
                    mr={3}
                    color={"white"}
                    onClick={handleSuaKhoa}
                  >
                    Lưu
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Td>
          <Td textAlign={"center"}>
            <Button onClick={onOpen}>
              <i class="fa-solid fa-trash fa-lg" color="#000000"></i>
            </Button>
            <Modal
              isCentered
              onClose={onClose}
              isOpen={isOpen}
              motionPreset="slideInBottom"
            >
              <ModalOverlay />
              <ModalContent fontFamily={"heading"}>
                <ModalHeader>Xóa khoa</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text>Bạn có chắc chắn muốn xóa không?</Text>
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Hủy
                  </Button>
                  <Button
                    colorScheme="blue"
                    bg={"rgb(243,66,33)"}
                    color={"white"}
                    onClick={handleXoaKhoa}
                  >
                    Xóa
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Td>
        </Tr>
      </Tbody>
    </>
  );
};
export default KhoaComponent;
