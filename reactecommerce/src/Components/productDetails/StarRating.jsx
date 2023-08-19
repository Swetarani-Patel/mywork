import {BsStarFill} from "react-icons/bs";
import React from 'react'
import {Box,Text} from "@chakra-ui/react";

function StarRating({rating}) {
    let starArr = [1,2,3,4,5]
  return (
    <Box display={'flex'}>
    {
        starArr.map((el)=>{
            return <BsStarFill color={rating >= el ? ('yellow'):('gray')}/>
        })
    }
       
    </Box>
  )
}

export default StarRating
