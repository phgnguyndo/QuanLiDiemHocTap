
import { Box } from "@chakra-ui/react";
import anh1 from "../../Image/Logo.png";
import CardTieuDoan from "./CardDaiDoi";
const BodyHomePage = (props) => {
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
        Danh sach cac tieu doan
      </Box>

      <CardTieuDoan img={anh1} name={"Đại đội 156"} DaiDoiTruong={"Bùi Xuân Long"} QuanSo={90}/>
      <CardTieuDoan img={anh1} name={"Đại đội 156"} DaiDoiTruong={"Bùi Xuân Long"} QuanSo={90}/>
      <CardTieuDoan img={anh1} name={"Đại đội 156"} DaiDoiTruong={"Bùi Xuân Long"} QuanSo={90}/>
      <CardTieuDoan img={anh1} name={"Đại đội 156"} DaiDoiTruong={"Bùi Xuân Long"} QuanSo={90}/>
    </Box>
  );
};

export default BodyHomePage;
