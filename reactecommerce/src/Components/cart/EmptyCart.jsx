import React from 'react'
import { Box, Text, Center, VStack, Icon } from '@chakra-ui/react'
import { FaSadTear } from 'react-icons/fa';
function EmptyCart() {
  return (
    <Center h="30rem">
      <VStack spacing={4}>
        <Icon as={FaSadTear} boxSize={16} color="gray.500" />
        <Box w={'70rem'} h={'20rem'} p={8} borderRadius="md">
          <Text fontSize="xl" fontWeight="semibold" mb={4}>Your Cart is empty</Text>
          <Text fontSize="lg" color="gray.500">Add some items to your cart and start shopping!</Text>
        </Box>
      </VStack>
    </Center>
  )
}

export default EmptyCart
