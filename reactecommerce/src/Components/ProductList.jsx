import { Box, Image, Text, Button } from '@chakra-ui/react';
import React from 'react';
import { BsCart4 } from 'react-icons/bs';

function ProductList({ ele }) {
  const { image, title, price } = ele;
  return (
    <Box boxShadow='dark-lg' p='6' rounded='md' bg='white'>
      <Box >
        <Image src={image} alt="" w="100%" h="300px"/>
      </Box>
      <Box p="10px">
        <Text noOfLines={1} textOverflow="ellipsis" fontSize="18px" fontWeight="semibold" mt="10px">
          {title}
        </Text>
        <Text fontSize="16px" fontWeight="bold" mt="5px">
          ${price}
        </Text>
        <Button mt="10px" colorScheme='green' size='lg'>
          <BsCart4/> &nbsp;Buy Now
        </Button>
      </Box>
    </Box>
  );
}

export default ProductList;
