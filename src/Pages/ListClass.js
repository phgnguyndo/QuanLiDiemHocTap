// import { useParams } from "react-router-dom"
import Header from "../Components/Bar/Header"
import ListClassComponent from "../Components/ListClassPage/ListClassComponent"
// import { Box } from "@chakra-ui/react"

const ListClass=()=>{
    // const {id}=useParams()
    return(
        <>
        
        <Header/>
        <ListClassComponent/>
        </>
    )
}

export default ListClass