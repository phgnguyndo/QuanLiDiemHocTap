import { Box, Text } from "@chakra-ui/react";

const EndPage = () => {
  return (
      <Box w={"100%"} bg={"rgb(33,35,41)"}>
        {/* <Text color={"gray"} h={"15px"} fontFamily={"cursive"} textAlign={"center"} paddingTop={"5px"}>
          QUẢN LÍ ĐIỂM HỌC VIÊN TẠI ĐƠN VỊ QUẢN LÍ HỌC VIÊN
        </Text> */}
        <Text color={"gray"} h={"15px"} fontFamily={"cursive"} textAlign={"center"}>
          GV: TS. Nguyễn Văn Giang
        </Text><hr style={{color:"white",position:"relative", width:"40%", left:"30%"}} />

        <Box w={"80%"} position={"relative"} left={"10%"} display={"flex"} alignItems={"center"}>
          <Text h={"10px"}
            color={"gray"}
            fontFamily={"cursive"}
            textAlign={"center"}
            flex={"1"}
            marginTop={"-8px"}
          >
            Nguyễn Quang Phong
          </Text>
          <Text h={"10px"}
            color={"gray"}
            fontFamily={"cursive"}
            textAlign={"center"}
            flex={"1"}
            marginTop={"-8px"}
          >
            Nguyễn Văn Nghĩa
          </Text>
          <Text h={"10px"} 
            color={"gray"}
            fontFamily={"cursive"}
            textAlign={"center"}
            flex={"1"}
            marginTop={"-8px"}
          > 
            Đỗ Nguyên Phương
          </Text>
        </Box>
      </Box>
  );
};
export default EndPage;
