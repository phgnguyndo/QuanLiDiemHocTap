import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
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
// import { useNavigate  } from "react-router-dom";
// import anh1 from "../../Image/hinh-anh-Harry-potter-va-quan-doan-Dumbledore.jpg";
import lopcnAPI from "../../api/lopcnAPI";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
const ClassComponent = (props) => {
  const { id } = useParams();
  const idLop = props.maLCN;
  const nav = useNavigate();
  // const lopId=idHV;
  const daiDoiId = id;
  const maLCN = props.maLCN;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isEditModalOpen,
    onOpen: onEditModalOpen,
    onClose: onEditModalClose,
  } = useDisclosure();
  const handleXoaLop = async () => {
    try {
      await lopcnAPI.delete(maLCN);
      onClose();
      // nav(`/home/${id}#`)
      window.location.reload();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  const [tenLopChuyenNganh, setTenLopChuyenNganh] = useState(props.name || "");
  const [soHV, setSoHV] = useState(props.QuanSo || 0);
  // const [imageLop, setImageLop] = useState("");

  const SuaThongTin = async () => {
    try {
      const lopcnId = props.maLCN;
      const formdata = new FormData();
      formdata.append("daiDoiId", daiDoiId);
      formdata.append("tenLopChuyenNganh", tenLopChuyenNganh);
      formdata.append("soHV", soHV);
      // formdata.append("file", imageLop);
      await lopcnAPI.update(lopcnId, formdata);
      onClose();
      window.location.reload();

      // const formData = {
      //   daiDoiId,
      //   tenLopChuyenNganh,
      //   soHV,
      // };
      // // console.log(formData)
      // await lopcnAPI.update(lopcnId, formData);
      // onClose();
      // window.location.reload();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <>
      <Card
        w="350px"
        maxH={"200px"}
        float={"left"}
        marginLeft={"14.5px"}
        boxShadow={"0px 1px 1px 1px rgb(190,190,190)"}
        marginRight={"10px"}
        marginTop={"20px"}
        // bg={""}
      >
        <CardBody>
          {/* <Image src={anh1} borderRadius="lg" /> */}
          <Stack mt="2" spacing="3">
            <Heading
              cursor={"pointer"}
              size="md"
              _hover={{ color: "brown" }}
              onClick={() => {
                nav(`/home/${daiDoiId}/${idLop}`);
              }}
              // onClick={()=>{console.log(lopId)}}
            >
              {props.name}
            </Heading>
            <Text>Quân số: {props.QuanSo}</Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <ButtonGroup spacing="1">
            <Button
              variant="solid"
              bg="#e74c3c"
              color={"white"}
              onClick={onOpen}
            >
              Xóa lớp
            </Button>
            <Button
              variant="solid"
              colorScheme="blue"
              onClick={onEditModalOpen}
            >
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
        <ModalContent >
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
              onClick={handleXoaLop}
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
        <ModalContent>
          <ModalHeader>Sửa thông tin</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Input
                type="text"
                defaultValue={props.name}
                onChange={(e) => {
                  setTenLopChuyenNganh(e.target.value);
                }}
              ></Input>
            </Box>
            <Box margin={"10px 0px 10px 0px"}>
              <Input
                type="text"
                defaultValue={props.QuanSo}
                onChange={(e) => {
                  setSoHV(parseInt(e.target.value));
                }}
              ></Input>
            </Box>
            {/* <Box margin={"10px 0px 10px 0px"}>
              <Input
                type="file"
                onChange={(e) => {
                  setImageLop(e.target.files[0]);
                }}
              ></Input>
            </Box> */}
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
    </>
  );
};
export default ClassComponent;