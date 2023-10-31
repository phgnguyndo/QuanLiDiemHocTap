import { Box } from "@chakra-ui/react"
import { useState } from "react";

const Header=(props)=>{
    // const handleClick=()=>{
    //     setCount(count+1);
    // }
    // const [count, setCount]=useState(1);
    return(
        <Box
         float={"left"}
         w={"100px"}
         height={"100px"}
         bg={"red"}
        //  onClick={handleClick}        
        >
            {props.aaa}
            {props.price}
        </Box>
        
    )
}

export default Header;