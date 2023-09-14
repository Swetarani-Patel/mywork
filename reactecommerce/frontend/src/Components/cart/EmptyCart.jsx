import React from "react";
import { Box, Text, Center, VStack, Icon, Button } from "@chakra-ui/react";
import { FaSadTear } from "react-icons/fa";
import { AiFillStepBackward } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function EmptyCart() {
  const navigate = useNavigate();
  const handleChange = () => {
    navigate("/");
  };
  return (
    <Center h="30rem">
      <VStack spacing={4}>
        <Icon as={FaSadTear} boxSize={16} color="gray.500" />
        <Box w={"70rem"} h={"20rem"} p={8} borderRadius="md">
          <Text fontSize="xl" fontWeight="semibold" mb={4}>
            Your Cart is empty
          </Text>
          <Text fontSize="lg" color="gray.500">
            Add some items to your cart and start shopping!
          </Text>
          <Button mt={"1rem"} onClick={handleChange}>
            <AiFillStepBackward /> &nbsp;Go back to Shopping
          </Button>
        </Box>
      </VStack>
    </Center>
  );
}

export default EmptyCart;
