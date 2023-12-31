import { BsStarFill } from "react-icons/bs";
import React from "react";
import { Box } from "@chakra-ui/react";

function StarRating({ rating }) {
  let starArr = [1, 2, 3, 4, 5];
  return (
    <Box display={"flex"}>
      {starArr.map((el) => {
        return <BsStarFill color={rating >= el ? "orange" : "gray"} />;
      })}
    </Box>
  );
}

export default StarRating;
