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
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useState, React } from "react";
import khoaAPI from "../../api/khoaAPI";
import { useNavigate } from "react-router-dom";

const TkhkComponent = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isEditModalOpen,
    onOpen: onEditModalOpen,
    onClose: onEditModalClose,
  } = useDisclosure();
  const nav = useNavigate();

  return (
    <>
      <Tr>
        <Td position={"relative"} textAlign={"center"} w={"3%"}>
          {props.stt}
        </Td>
        <Td position={"relative"} cursor={"pointer"} w={"95%"}>
          {props.tenHV}
        </Td>
        <Td position={"relative"} cursor={"pointer"} w={"95%"}>
          {props.tenLcn}
        </Td>
        <Td position={"relative"} cursor={"pointer"} w={"95%"}>
          {props.diemTB}
        </Td>
        <Td position={"relative"} cursor={"pointer"} w={"95%"}>
          {props.hocKy}
        </Td>
        <Td position={"relative"} textAlign={"center"}>
          <Button onClick={onEditModalOpen} background={"blue.400"}>
            <EditOutlined />
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
                    defaultValue={props.tenHV}
                    // onChange={(e) => setTenKhoa(e.target.value)}
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
                //   onClick={handleSuaKhoa}
                >
                  Lưu
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Td>
        <Td textAlign={"center"}>
          <Button onClick={onOpen} background={"red.400"}>
            <DeleteOutlined />
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
                //   onClick={handleXoaKhoa}
                >
                  Xóa
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Td>
      </Tr>
    </>
  );
};
export default TkhkComponent;
