import { Box} from "@chakra-ui/react";
import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import React from "react"
import ClassComponent from "./ClassComponent";
import anh1 from "../../Image/hinh-anh-Harry-potter-va-quan-doan-Dumbledore.jpg";
const ListClassComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  var i = 156;
//   const handleOnclick = () => {
//     <ModalAddClass />;
//   };
  return (
    <Box position={"relative"} w={"75%"} left={"12.5%"}>
      <Box
        w={"100%"}
        height={"50px"}
        //    bg={"brown"}
        margin={"10px 0px 50px 0px"}
        fontWeight={"600"}
        fontSize={"35px"}
        textAlign={"center"}
        alignItems={"center"}
        color={"brown"}
        fontFamily={"cursive"}
      >
        Danh sách các lớp
      </Box>
      {/* <ButtonGroup spacing="2"> */}
      <Button
        variant="solid"
        bg="rgb(26,132,74)"
        color={"white"}
        left={"2%"}
        onClick={onOpen}
      >
        Thêm lớp
      </Button>
      <Modal
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Create your account</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl>
                    <FormLabel>Tên lớp</FormLabel>
                    <Input ref={initialRef} placeholder='ten lop chuyen nganh' />
                  </FormControl>
      
                  <FormControl mt={4}>
                    <FormLabel>Quân số</FormLabel>
                    <Input placeholder='quan so lop' />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Ảnh</FormLabel>
                    <Input type="file"/>
                  </FormControl>

                </ModalBody>
      
                <ModalFooter>
                  <Button colorScheme='blue' mr={3}>
                    Save
                  </Button>
                  <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
      {/* <Button variant="solid" colorScheme="blue">
              Sửa thông tin
            </Button> */}
      {/* </ButtonGroup> */}
      <br />
      <ClassComponent
        img={anh1}
        name={"Bảo đảm an toàn thông tin"}
        DaiDoiTruong={"Bùi Xuân Long"}
        QuanSo={90}
        id={i}
      />
      <ClassComponent
        img={anh1}
        name={"An ninh hệ thống thông tin"}
        DaiDoiTruong={"Bùi Xuân Long"}
        QuanSo={90}
        id={++i}
      />
      <ClassComponent
        img={anh1}
        name={"Bảo đảm an toàn thông tin"}
        DaiDoiTruong={"Bùi Xuân Long"}
        QuanSo={90}
        id={++i}
      />
      <ClassComponent
        img={anh1}
        name={"Bảo đảm an toàn thông tin"}
        DaiDoiTruong={"Bùi Xuân Long"}
        QuanSo={90}
        id={++i}
      />
      <ClassComponent
        img={anh1}
        name={"Bảo đảm an toàn thông tin"}
        DaiDoiTruong={"Bùi Xuân Long"}
        QuanSo={90}
        id={++i}
      />
      <ClassComponent
        img={anh1}
        name={"Bảo đảm an toàn thông tin"}
        DaiDoiTruong={"Bùi Xuân Long"}
        QuanSo={90}
        id={++i}
      />
      <ClassComponent
        img={anh1}
        name={"Bảo đảm an toàn thông tin"}
        DaiDoiTruong={"Bùi Xuân Long"}
        QuanSo={90}
        id={++i}
      />
      <br />
    </Box>
  );
};
export default ListClassComponent;
