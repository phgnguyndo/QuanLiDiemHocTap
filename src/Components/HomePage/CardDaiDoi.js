import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
  Button,
  Image,
  Box,
} from "@chakra-ui/react";
const CardDaiDoi = (props) => {
  return (
    <Box margin={"20px 0px 20px 0px"}>
      <Card
        border={"1px solid rgb(190,190,190)"}
        boxShadow={"1px 1px 1px 1px rgb(190,190,190)"}
        // bg={"gray"}
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          bgSize={"cover"}
          maxW={{ base: "100%", sm: "220px" }}
          src={props.img}
        />

        <Stack fontFamily={"cursive"} height={"200px"}>
          <CardBody > 
            <Heading size="md" fontFamily={"cursive"}>{props.name}</Heading>
            <Text >Đại đội trưởng: {props.DaiDoiTruong}</Text>
            <Text >Quân số: {props.QuanSo}</Text>    
          </CardBody>
          <CardFooter position={"relative"} top={"-15px"}>
            <Button variant="solid" colorScheme="blue" marginRight={"10px"} bg={"rgb(243,66,33)"}>
              Xóa đại đội
            </Button>
            <Button variant="solid" colorScheme="blue">
              Sửa đại đội
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </Box>
  );
};
export default CardDaiDoi;
