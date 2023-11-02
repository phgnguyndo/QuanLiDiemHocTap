import { Button, ButtonGroup, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from "@chakra-ui/react";
import {
  Input,
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
import anh1 from '../../Image/hinh-anh-Harry-potter-va-quan-doan-Dumbledore.jpg'
const ClassComponent = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isEditModalOpen,
    onOpen: onEditModalOpen,
    onClose: onEditModalClose,
  } = useDisclosure();
  return (
    <>
      <Card maxW="260px" float={"left"} marginLeft={"14.5px"} boxShadow={"0px 1px 1px 1px rgb(190,190,190)"}
       marginRight={"10px"} marginTop={"20px"} fontFamily={"cursive"}>
        <CardBody>
          <Image src={anh1} borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md" fontFamily={"cursive"} _hover={{color:"brown"}}>{props.name}</Heading>
            <Text>Quân số: {props.QuanSo}</Text>
          </Stack>
        </CardBody>
        {/* <Divider />*/}
        <CardFooter>
          <ButtonGroup spacing="1">
            <Button variant="solid" bg="rgb(243,66,33)" color={"white"} onClick={onOpen}>
              Xóa lớp
            </Button>
            <Button variant="solid" colorScheme="blue" onClick={onEditModalOpen}>
              Sửa thông tin
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
            <Button colorScheme="blue" bg={"rgb(243,66,33)"} color={"white"}>
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
            <Box><Input type="text" placeholder={props.name} ></Input></Box>
            <Box margin={"10px 0px 10px 0px"}><Input type="text" placeholder={props.QuanSo}></Input></Box>
            {/* <Box><Input type="text" placeholder={props.QuanSo}></Input></Box> */}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onEditModalClose}>
              Close
            </Button>
            <Button colorScheme="blue" mr={3} bg={"rgb(243,66,33)"} color={"white"}>
              Lưu
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ClassComponent