import {
  Box,
  Text,
  Image,
  Button,
  Flex,
  Input,
  ButtonGroup,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";

function Cart() {
  const storedData = useSelector((store) => {
    return store.cart.cart;
  });

  return (
    <Box p={4}>
      <Flex>
        <Box flex={3}>
          {storedData.map((ele) => (
            <Flex key={ele.id} align="center" mb={4}>
              <Flex mb={"1rem"}>
                <Box>
                  <Image
                    src={ele.image}
                    alt={ele.title}
                    boxSize="100px"
                    mr={4}
                  />
                </Box>
                <Box align={"left"}>
                  <Text fontWeight="semibold">
                    {ele.title} &nbsp;{ele.size}
                  </Text>
                  <Text color="gray.600" fontSize="sm">
                    {ele.category}
                  </Text>
                  <Text fontSize="md">${ele.price}</Text>

                  <ButtonGroup>
                    <Button size="sm" variant="outline">
                      +
                    </Button>
                    <Text>1</Text>
                    <Button size="sm" variant="outline">
                      -
                    </Button>
                  </ButtonGroup>

                  <Button variant="link" color="red.500">
                    <MdDelete size={"1.1rem"} />
                  </Button>
                </Box>
              </Flex>
            </Flex>
          ))}
        </Box>
        <Box flex={1} ml={8}>
          <Flex justifyContent="space-between" mb={2}>
            <Input size="md" placeholder="Enter coupon" />
            <Button ml={"0.2rem"} fontSize={"sm"} w={"10rem"}  _hover={{ bg: 'gray' }}>
              Apply Coupon
            </Button>
          </Flex>
          <Box border={'1px solid black'} p={4} rounded="md">
            <Text fontSize="lg" fontWeight="semibold" mb={2}>
              Summary
            </Text>
            <Flex justifyContent="space-between" mb={2}>
              <Text>Total Price:</Text>
              <Text>$1000</Text>
            </Flex>
            <Flex justifyContent="space-between" mb={2}>
              <Text>Discount:</Text>
              <Text>$1000</Text>
            </Flex>
            <Flex justifyContent="space-between" mt={2}>
              <Text fontWeight="semibold">Total:</Text>
              <Text fontWeight="semibold">$1000</Text>
            </Flex>
            <Button mt={4} isFullWidth   _hover={{ bg: 'gray' }}>
              Proceed to Checkout
            </Button>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default Cart;
