import { Box, Image, Text, Button } from "@chakra-ui/react";
import React from "react";
import { BsBag } from "react-icons/bs";
import { Flex } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

import { useDispatch, useSelector } from "react-redux";
import { setTotalPrice } from "../../redux/actionCreator";

function ProductList({ ele }) {
  const { image, title, price, rating, id } = ele;
  // const {totalprice}  = useSelector((state)=>{
  //   return state;
  // })
  // const dispatch  =  useDispatch();

  
  return (
    <Box boxShadow="dark-lg" p="2" rounded="md" bg="white">
      <Box>
        <Image src={image} alt="" w="100%" h="300px" />
      </Box>
      <Box p="10px">
        <Flex>
          <Box noOfLines={1}>
            <Text
              textOverflow="ellipsis"
              fontSize="16px"
              fontWeight="semibold"
              mt="10px"
              align={"left"}
            >
              {title}
            </Text>
          </Box>
        </Flex>
        <Flex mt={"5px"}>
          <Text
            fontSize="15px"
            fontWeight="bold"
            mt="5px"
            bg={"black"}
            color={"white"}
            w={"18%"}
            display="inline-block"
          >
            {rating.rate} &nbsp;
            <StarIcon
              mb={"0.3rem"}
              style={{ fontSize: "13px" }}
              color={"white"}
              bg={"black"}
            />
          </Text>

          <Text
            fontSize="13px"
            fontWeight="bold"
            mt="10px"
            w={"45%"}
            ml={"-1.6rem"}
          >
            {rating.count} reviews
          </Text>
          <Text fontSize="15px" fontWeight="bold" mt="5px" ml="1rem">
            ${price}
          </Text>
        </Flex>
        {/* <Link to={"/cart"}> */}
          <Button
         
            mt="1rem"
            size="md"
            variant={"outline"}
            w={"100%"}
            boxShadow={"2xl"}
            border={"1px solid"}
          >
            <BsBag /> &nbsp;Add To Bag
          </Button>
        {/* </Link> */}
      </Box>
    </Box>
  );
}

export default ProductList;




