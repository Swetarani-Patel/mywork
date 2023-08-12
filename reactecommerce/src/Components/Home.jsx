import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

function Home() {
  return (
    <Box position="relative">
      <Image
        width="100%"
        height="600px"
        src="https://www.oberlo.com/media/1603967807-color-psychology.jpg"
        alt="Shopping Background"
      />
      <Box
        position="absolute"
        top="30%"
        right="0"
        transform="translateY(-50%)"
        textAlign="right"
        pr="20px"
      >
        <Text fontSize="70px" color="black" mb={4}>
          Exclusive Summer  <br />Collection
        </Text>
        <Text fontSize="lg" color="black" mb={8}>
          Discover the Latest Trends in Fashion
        </Text>
      </Box>
    </Box>
  );
}

export default Home;
