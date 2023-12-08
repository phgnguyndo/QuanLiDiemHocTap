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
  Text,
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
      // const formdata = new FormData();
      // formdata.append("tenKhoa", TenKhoa);
      const tenKhoa = TenKhoa;
      const formdata={
        tenKhoa
      }
      await khoaAPI.update(maKhoa, formdata);
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Box margin={"20px 0px 20px 0px"}>
      <Card
        maxW="260px"
        float={"left"}
        marginLeft={"10px"}
        boxShadow={"0px 1px 1px 1px rgb(190,190,190)"}
        marginRight={"10px"}
        marginTop={"20px"}
        fontFamily={"heading"}
      >
        <CardBody>
          <Image borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading
              cursor={"pointer"}
              size="md"
              fontFamily={"inherit"}
              _hover={{ color: "brown" }}
              onClick={() => {
                nav(`/khoa/${props.maKhoa}`);
              }}
              // onClick={()=>{console.log(lopId)}}
            >
              {props.tenKhoa}
            </Heading>
          </Stack>
        </CardBody>
        <CardFooter>
          <ButtonGroup spacing="1">
            <Button
              variant="solid"
              bg="rgb(175, 38, 85)"
              color={"white"}
              onClick={onOpen}
            >
              Xóa
            </Button>
            <Button
              variant="solid"
              colorScheme="blue"
              onClick={onEditModalOpen}
            >
              Sửa
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>

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

      {/* <Tbody>
        <Tr>
          <Td position={"relative"} textAlign={"center"}>
            {props.maKhoa}
          </Td>
          <Td
            position={"relative"}
            textAlign={"center"}
            cursor={"pointer"}
            onClick={handleOnClick}
          >
            {props.tenKhoa}
          </Td>
          <Td position={"relative"} textAlign={"center"}>
            <Button onClick={onOpen}>
              <i class="fa-solid fa-pencil fa-lg" color="#000000"></i>
            </Button>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Sửa thông tin khoa</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl>
                    <FormLabel>Tên khoa</FormLabel>
                    <Input
                      defaultValue={props.tenKhoa}
                      onChange={(e) => {
                        setTenKhoa(e.target.value);
                      }}
                    />
                  </FormControl>
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={handleSuaKhoa}>
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
                <ModalHeader>Xóa khoa
                <ModalCloseButton />
                </ModalHeader>
                <ModalBody>
                  <Text>Bạn có chắc chắn muốn xóa khoa {props.tenKhoa}?</Text>
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={handleXoaKhoa}>
                    Xóa
                  </Button>
                  <Button onClick={onEditModalClose}>Hủy</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Td>
        </Tr>
      </Tbody> */}
    </Box>
  );
};
export default KhoaComponent;
