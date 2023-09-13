import { Box, Image, Text, Button, Flex } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";
function HomeProdList({ ele }) {
  const { image, title, price, id, rating } = ele;
  const navigate = useNavigate();

  return (
    <Box boxShadow="dark-lg" p="2" rounded="md" bg="white">
      <Box>
        <Image src={image} alt="" w="100%" h="200px" />
      </Box>
      <Box p="10px">
      <Flex>
      <Box noOfLines={1}>
        <Text
         
          textOverflow="ellipsis"
          fontSize="16px"
          fontWeight="semibold"
          mt="10px"
          align={'left'}
        >
          {title}
        </Text>
        
        </Box>
        
        </Flex>
        <Flex mt={'5px'} justifyContent={'space-between'}>
        <Text
          fontSize="15px"
          fontWeight="bold"
          mt="5px"
          bg={"black"}
          color={'white'}
          w={"25%"}
          display="inline-block"
        >
          {rating.rate} &nbsp;
          <StarIcon mb={'0.3rem'} style={{ fontSize: '13px' }} color={'white'} bg={'black'}/>

        </Text> 
        <Text fontSize="15px" fontWeight="bold" mt="5px" ml='1rem'>
          ${price}
        </Text>
        </Flex>
        <Link to={`/productdetails/${id}`}>
           <Button mt="1rem" size="sm" variant={'outline'}  w={'100%'} boxShadow={'2xl'} border={'1px solid'}>
           Buy Now
          </Button> 
        </Link>
      </Box>
    </Box>
  );
}

export default HomeProdList;
