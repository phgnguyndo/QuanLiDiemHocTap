
import { Box } from "@chakra-ui/react";
import anh1 from "../../Image/Logo.png";
import CardDaiDoi from "./CardDaiDoi";
const BodyHomePage = (props) => {
  var i=156;
  return (
    <Box position={"relative"} w={"70%"} left={"15%"}>
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

      <CardDaiDoi img={anh1} name={"Đại đội 156"} DaiDoiTruong={"Bùi Xuân Long"} QuanSo={90} id={i}/>
      <CardDaiDoi img={anh1} name={"Đại đội 156"} DaiDoiTruong={"Bùi Xuân Long"} QuanSo={90} id={++i}/>
      <CardDaiDoi img={anh1} name={"Đại đội 156"} DaiDoiTruong={"Bùi Xuân Long"} QuanSo={90} id={++i}/>
      <CardDaiDoi img={anh1} name={"Đại đội 156"} DaiDoiTruong={"Bùi Xuân Long"} QuanSo={90} id={++i}/>
    </Box>
  );
};

export default BodyHomePage;
