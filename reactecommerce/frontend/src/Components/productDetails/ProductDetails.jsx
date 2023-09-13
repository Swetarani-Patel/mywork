import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Skeleton } from "@chakra-ui/react";
import ProductDetailCard from "./ProductDetailCard";
import { fetchProductDetails } from "../api";

function ProductDetails() {
  const { id } = useParams();
  const [single, setSingle] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState(null);
  useEffect(() => {
    fetchProductDetails(setSingle, setLoading, id);
  }, []);

  return (
    <>
      {loading ? (
        <Box p={"30px"} mt="20px">
          <Skeleton h="400px" w="25%" />
        </Box>
      ) : (
        <ProductDetailCard
          single={single}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />
      )}
    </>
  );
}

export default ProductDetails;
