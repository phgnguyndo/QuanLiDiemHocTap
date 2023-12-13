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
          {props.diemTB}
        </Td>
        <Td position={"relative"} cursor={"pointer"} w={"95%"}>
          {props.hocKy}
        </Td>
      </Tr>
    </>
  );
};
export default TkhkComponent;
