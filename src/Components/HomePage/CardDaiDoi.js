import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
  Button,
  Image,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { Input } from "antd";
import { useNavigate } from "react-router-dom";
import daidoiAPI from "../../api/daidoiAPI";
import { useState } from "react";
const CardDaiDoi = (props) => {
  const navigate = useNavigate();
  const handleOnclick = () => {
    navigate(`/home/${props.maDaiDoi}`);
  };
  var maDaiDoi = props.maDaiDoi;
  const handleDelete = async () => {
    try {
      await daidoiAPI.delete(maDaiDoi);
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  const [tenDaiDoi, setTenDaiDoi] = useState(props.name || "");
  const [daiDoiTruong, setTenDDTruong] = useState(props.DaiDoiTruong || "");
  const [quanSo, setQuanSo] = useState(props.QuanSo || 0);
  const formData = {
    tenDaiDoi,
    daiDoiTruong,
    quanSo,
  };
  const SuaThongTin = async () => {
    try {
      console.log(formData);
      await daidoiAPI.update(maDaiDoi, formData);
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Error updating DaiDoi:", error);
    }
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isEditModalOpen,
    onOpen: onEditModalOpen,
    onClose: onEditModalClose,
  } = useDisclosure();

  return (
    <Box margin={"20px 0px 20px 0px"}>
      <Card
        // _hover={{
        //   bg:"rgb(190,190,190)"
        // }}
        border={"1px solid rgb(190,190,190)"}
        boxShadow={"1px 1px 1px 1px rgb(190,190,190)"}
        // bg={"gray"}
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          // borderRadius={"100%"}
          // onClick={handleHEHE}
          bgSize={"cover"}
          maxW={{ base: "100%", sm: "220px" }}
          src={props.img}
        />

        <Stack fontFamily={"cursive"} height={"200px"}>
          <CardBody>
            <Heading
              size="md"
              fontFamily={"cursive"}
              onClick={handleOnclick}
              _hover={{ color: "brown" }}
              cursor={"pointer"}
            >
              {props.name}
            </Heading>
            <Text>Đại đội trưởng: {props.DaiDoiTruong}</Text>
            <Text>Quân số: {props.QuanSo}</Text>
          </CardBody>
          <CardFooter position={"relative"} top={"-15px"}>
            <Button
              onClick={onOpen}
              variant="solid"
              colorScheme="blue"
              marginRight={"10px"}
              bg={"rgb(243,66,33)"}
            >
              Xóa đại đội
            </Button>
            <Button
              variant="solid"
              colorScheme="blue"
              onClick={onEditModalOpen}
            >
              Sửa thông tin
            </Button>
          </CardFooter>
        </Stack>
      </Card>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent fontFamily={"cursive"}>
          <ModalHeader>Xóa đại đội</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Bạn có chắc chắn muốn xóa không?</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              colorScheme="blue"
              bg={"rgb(243,66,33)"}
              color={"white"}
              onClick={handleDelete}
            >
              Xóa
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal
        isCentered
        onClose={onEditModalClose}
        isOpen={isEditModalOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent fontFamily={"cursive"}>
          <ModalHeader>Sửa thông tin</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Input
                type="text"
                defaultValue={props.name}
                onChange={(e) => setTenDaiDoi(e.target.value)}
              ></Input>
            </Box>
            <Box margin={"10px 0px 10px 0px"}>
              <Input
                type="text"
                defaultValue={props.DaiDoiTruong}
                onChange={(e) => setTenDDTruong(e.target.value)}
              ></Input>
            </Box>
            <Box>
              <Input
                type="text"
                defaultValue={props.QuanSo}
                onChange={(e) => setQuanSo(parseInt(e.target.value))}
              ></Input>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onEditModalClose}>
              Close
            </Button>
            <Button
              colorScheme="blue"
              mr={3}
              bg={"rgb(243,66,33)"}
              color={"white"}
              onClick={SuaThongTin}
            >
              Lưu
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
export default CardDaiDoi;
