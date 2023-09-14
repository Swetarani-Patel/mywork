import { Box, Image, Text, Button, useToast } from "@chakra-ui/react";
import React from "react";
import { BsBag } from "react-icons/bs";
import { Flex } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { addToCart } from "../localStorage/LocalStorage";
import { useDispatch } from "react-redux";

function ProductList({ ele }) {
  const { image, title, price, rating } = ele;
  const dispatch = useDispatch();
  const toast = useToast();
  return (
    <Box boxShadow="dark-lg" p="2" rounded="md" bg="white">
      <Box>
        <Image
          src={image}
          alt=""
          w="100%"
          h="300px"
          _hover={{
            transform: "scale(1.03)",
            transition: "transform 0.3s ease-in-out",
          }}
        />
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
          <Text fontSize="15px" fontWeight="bold" mt="5px" ml="6rem">
            ${price}
          </Text>
        </Flex>

        <Button
          onClick={() => {
            addToCart(toast, ele, dispatch);
          }}
          mt="1rem"
          size="md"
          variant={"outline"}
          w={"100%"}
          boxShadow={"2xl"}
          border={"1px solid"}
          transition="transform 0.2s"
          _hover={{
            bg: "gray.200",
            transform: "scale(1.03)",
          }}
        >
          <BsBag /> &nbsp;Add To Bag
        </Button>
      </Box>
    </Box>
  );
}

export default ProductList;
