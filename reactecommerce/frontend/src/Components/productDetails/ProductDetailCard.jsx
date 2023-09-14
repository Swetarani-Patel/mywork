import React from "react";
import { BsFillBagHeartFill, BsFillHeartFill } from "react-icons/bs";
import {
  Box,
  ButtonGroup,
  Flex,
  Image,
  Text,
  Button,
  HStack,
  useToast,
} from "@chakra-ui/react";
import StarRating from "./StarRating";
import { addToCart } from "../localStorage/LocalStorage";
import { useDispatch } from "react-redux";

function ProductDetailCard({ single, selectedSize, setSelectedSize }) {
  const dispatch = useDispatch();
  const toast = useToast();
  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <Box mt="20px" p="30px">
      <Flex>
        <Image w="21rem" src={single.image} p={"1rem"} />
        <Box pl={"2rem"} pr={"2rem"}>
          <Text
            mb={"1rem"}
            align={"left"}
            fontSize={"20px"}
            fontWeight={"bold"}
          >
            {single.title}
          </Text>
          <Flex>
            <>
              <StarRating rating={single.rating.rate} />
            </>
            &nbsp;&nbsp;&nbsp;
            <Text mb={"1rem"}>{single.rating.count} Reviews</Text>
          </Flex>
          <Text align={"left"} mb={"1rem"} fontSize={"19px"}>
            ${single.price}
          </Text>
          <Text align={"left"}>{single?.description}</Text>

          <Box align={"left"}>
            {single.category !== "jewelery" &&
            single.category !== "electronics" ? (
              <>
                <Text
                  align={"left"}
                  mt="2rem"
                  fontSize={"19px"}
                  fontWeight={"bold"}
                  mb={"0.5rem"}
                >
                  Available Options
                </Text>
                <ButtonGroup>
                  <Button
                    onClick={() => {
                      handleSizeClick("S");
                    }}
                    variant="outline"
                    boxShadow="lg"
                    border="0.5px solid"
                    color={selectedSize === "S" ? "white" : ""}
                    bg={selectedSize === "S" ? "black" : ""}
                  >
                    S
                  </Button>
                  <Button
                    onClick={() => {
                      handleSizeClick("M");
                    }}
                    variant="outline"
                    boxShadow="lg"
                    border="1px solid"
                    color={selectedSize === "M" ? "white" : "black"}
                    bg={selectedSize === "M" ? "black" : "white"}
                  >
                    M
                  </Button>
                  <Button
                    onClick={() => {
                      handleSizeClick("L");
                    }}
                    variant="outline"
                    boxShadow="lg"
                    border="1.5px solid"
                    color={selectedSize === "L" ? "white" : "black"}
                    bg={selectedSize === "L" ? "black" : "white"}
                  >
                    L
                  </Button>
                  <Button
                    onClick={() => {
                      handleSizeClick("XL");
                    }}
                    variant="outline"
                    boxShadow="lg"
                    border="2px solid"
                    color={selectedSize === "XL" ? "white" : "black"}
                    bg={selectedSize === "XL" ? "black" : "white"}
                  >
                    XL
                  </Button>
                  <Button
                    onClick={() => {
                      handleSizeClick("XXL");
                    }}
                    variant="outline"
                    boxShadow="lg"
                    border="2.5px solid"
                    color={selectedSize === "XXL" ? "white" : "black"}
                    bg={selectedSize === "XXL" ? "black" : "white"}
                  >
                    XXL
                  </Button>
                </ButtonGroup>
              </>
            ) : (
              <></>
            )}
          </Box>
          <HStack mt="1rem">
            {/* <Link to='/cart'> */}
            <Button
              onClick={() => {
                addToCart(toast, single, dispatch, selectedSize);
              }}
              variant={"outline"}
              boxShadow={"lg"}
              border={"1px solid"}
            >
              {" "}
              <BsFillBagHeartFill /> &nbsp; Add To Bag
            </Button>
            {/* </Link> */}

            <Button variant={"outline"} boxShadow={"lg"} border={"1px solid"}>
              {" "}
              <BsFillHeartFill />
            </Button>
          </HStack>
          <Text align={"left"} mt="0.5rem">
            Category: {single.category}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default ProductDetailCard;
