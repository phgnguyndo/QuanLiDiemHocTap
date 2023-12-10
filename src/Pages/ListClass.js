// import { useParams } from "react-router-dom"
import Head from "../Components/Bar/Head";
import ListClassComponent from "../Components/ListClassPage/ListClassComponent";
// import { Box } from "@chakra-ui/react"

const ListClass = () => {
  // const {id}=useParams()
  return (
    <>
      <Head content={<ListClassComponent />} />
    </>
  );
};

export default ListClass;
