import { Box } from "@chakra-ui/react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ClassComponent from "./ClassComponent";
import anh1 from "../../Image/hinh-anh-Harry-potter-va-quan-doan-Dumbledore.jpg";
import { useParams } from "react-router-dom";
import lopcnAPI from "../../api/lopcnAPI";
const ListClassComponent = () => {
  const {id}=useParams()
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  // var i = 156;
  //   const handleOnclick = () => {
  //     <ModalAddClass />;
  //   };
  // const [daiDoiId,setDaiDoiId]=useState("");
  //   const [tenLopChuyenNganh,setTenLopChuyenNganh]=useState("");
  //   const [soHV,setSoHV]=useState(0);
  const [soHV, setSoHV]=useState(0)
  const handleAddClass= async ()=>{
    try {
      // const daiDoiId = initialRef.current.value; 
      const daiDoiId = id; 
      const tenLopChuyenNganh = finalRef.current.value; 
      
      const formData = {
        daiDoiId,
        tenLopChuyenNganh,
        soHV
      };
      await lopcnAPI.create(formData);
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }
  const [dsLopCn, setdsLopCn] = useState([]);
  useEffect(() => {
    fetchLopCN();
  }, []);
  const fetchLopCN = async () => {
    setdsLopCn(await lopcnAPI.get(id));
  };
  // console.log(dsLopCn);
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
          <ModalHeader>Thêm lớp chuyên ngành</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {/* <FormControl>
              <FormLabel>Mã đại đội</FormLabel>
              <Input ref={initialRef} placeholder="Mã đại đội" />
            </FormControl> */}

            <FormControl>
              <FormLabel>Tên lớp</FormLabel>
              <Input ref={finalRef} placeholder="ten lop chuyen nganh" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Quân số</FormLabel>
              <Input placeholder="quan so lop" onChange={(e)=>{setSoHV(e.target.value)}}/>
            </FormControl>
            {/* <FormControl mt={4}>
              <FormLabel>Ảnh</FormLabel>
              <Input type="file" />
            </FormControl> */}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleAddClass}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <br />
      {dsLopCn?.map((item) => (
        <ClassComponent
        img={anh1}
        maLCN={item.maLopChuyenNganh}
        name={item.tenLopChuyenNganh}
        DaiDoiTruong={"Bùi Xuân Long"}
        QuanSo={item.soHV}
        // id={++i}
      />
      ))}
      
      {/* <ClassComponent
        img={anh1}
        name={"Bảo đảm an toàn thông tin"}
        DaiDoiTruong={"Bùi Xuân Long"}
        QuanSo={90}
        id={++i}
      /> */}
      <br />
    </Box>
  );
};
export default ListClassComponent;
