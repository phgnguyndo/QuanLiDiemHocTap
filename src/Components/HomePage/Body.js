// import anh1 from "../../Image/Logo.png";
import CardDaiDoi from "./CardDaiDoi";
import { useEffect, useState } from "react";
import daidoiAPI from "../../api/daidoiAPI";
import React from "react";
import {
  Box,
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
// import hocvienAPI from "../../api/hocvienAPI";
const BodyHomePage = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [dsDaiDoi, setdsDaiDoi] = useState([]);
  const [imageDaiDoi, setImageDaiDoi] = useState("");
  const [quanSo, setQuanSo] = useState(0);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  useEffect(() => {
    fetchDaiDoi();
  }, []);
  const fetchDaiDoi = async () => {
    setdsDaiDoi(await daidoiAPI.getAll());
  };
  
  var i = 155;
  const handleSubmit = async () => {
    try {
      const tenDaiDoi = initialRef.current.value;
      const daiDoiTruong = finalRef.current.value;
      // const quanSo = document.getElementById("quanSoInput").value;
      const formdata = new FormData();
      formdata.append("tenDaiDoi", tenDaiDoi);
      formdata.append("daiDoiTruong", daiDoiTruong);
      formdata.append("quanSo", quanSo);
      // formdata.append("file", imageDaiDoi);
      await daidoiAPI.create(formdata);
      onClose();
      window.location.reload()
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <Box position={"relative"} w={"50%"} left={"25%"} top={"10%"}>
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
        Danh sách các đại đội
      </Box>
      <Button
        variant="solid"
        bg="rgb(26,132,74)"
        color={"white"}
        left={"2%"}
        onClick={onOpen}
      >
        Thêm đại đội
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Thêm đại đội</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Tên đại đội</FormLabel>
              <Input ref={initialRef} type="text" placeholder="tên đại đội" />
            </FormControl>
            <FormControl>
              <FormLabel>Đại đội trưởng</FormLabel>
              <Input ref={finalRef} type="text" placeholder="đại đội trưởng" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Quân số</FormLabel>
              <Input
                placeholder="quân số"
                id="quanSoInput"
                onChange={(e) => {
                  setQuanSo(parseInt(e.target.value));
                }}
              />
            </FormControl>
            {/* <FormControl mt={4}>
              <FormLabel>Ảnh</FormLabel>
              <Input
                type="file"
                name="file"
                onChange={(e) => {
                  setImageDaiDoi(e.target.files[0]);
                }}
              />
            </FormControl> */}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {dsDaiDoi?.map((item) => (
        <CardDaiDoi
          key={++i}
          maDaiDoi={item.maDaiDoi}
          img={item.anhDaiDoi}
          name={item.tenDaiDoi}
          DaiDoiTruong={item.daiDoiTruong}
          QuanSo={item.quanSo}
          // id={++i}
        />
      ))}
    </Box>
  );
};

export default BodyHomePage;
