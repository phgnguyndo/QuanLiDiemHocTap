import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { useDisclosure } from "@chakra-ui/hooks";
import { Input } from "@chakra-ui/input";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { Tbody, Td, Tr } from "@chakra-ui/table";
import React from "react";

const HocVien = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [dsDaiDoi, setdsDaiDoi] = useState([]);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const handleSubmit = () => {};
  return (
    <>
      <Tbody>
        <Tr>
          <Td position={"relative"} textAlign={"center"}>
            0123456789
          </Td>
          <Td position={"relative"} textAlign={"center"}>
            Nguyễn Văn Nghĩa
          </Td>
          <Td position={"relative"} textAlign={"center"}>
            21/02/2002
          </Td>
          <Td position={"relative"} textAlign={"center"}>
            Nam
          </Td>
          <Td position={"relative"} textAlign={"center"}>
            Nghệ An
          </Td>
          <Td position={"relative"} textAlign={"center"}>
            Thượng sĩ
          </Td>
          <Button onClick={onOpen}>Sửa</Button>
          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Sửa thông tin học viên</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Tên học viên</FormLabel>
                  <Input ref={initialRef} placeholder="Tên học viên" />
                </FormControl>
                <FormControl>
                  <FormLabel>Ngày sinh</FormLabel>
                  <Input ref={finalRef} placeholder="Ngày sinh" />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Giới tính</FormLabel>
                  <Input placeholder="Nam / Nữ" id="Giới tính" />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Giới tính</FormLabel>
                  <Input placeholder="Nam / Nữ" id="Giới tính" />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Giới tính</FormLabel>
                  <Input placeholder="Nam / Nữ" id="Giới tính" />
                </FormControl>
               
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <Button onClick={onOpen}>Xóa</Button>
          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Sửa thông tin học viên</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Tên học viên</FormLabel>
                  <Input ref={initialRef} placeholder="Tên học viên" />
                </FormControl>
                <FormControl>
                  <FormLabel>Đại đội trưởng</FormLabel>
                  <Input ref={finalRef} placeholder="đại đội trưởng" />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Quân số</FormLabel>
                  <Input placeholder="quân số" id="quanSoInput" />
                </FormControl>
                {/* <FormControl mt={4}>
              <FormLabel>Ảnh</FormLabel>
              <Input type="file" />
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
        </Tr>
      </Tbody>
    </>
  );
};
export default HocVien;
