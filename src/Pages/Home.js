import { Button, Link } from "@chakra-ui/react";
import 'bootstrap/dist/css/bootstrap.css';
import Header from "../Components/Header";
import BasicExample from "../Components/Body";
const Home = () => {
  return (
    <>
      <Header aaa={"phong"} />
      <Header price={10000}/>

    </>
  );
};
export default Home;
