import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SimpleGrid, Box, Heading } from "@chakra-ui/react";
import { getData } from "../api";
import HomeProdList from "./HomeProdList";
import HomeSkeleton from "./HomeSkeleton";

function HomeProduct() {
  const url = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const storeData = useSelector((store) => {
    return store.product.product;
  });

  useEffect(() => {
    setLoading(true);
    getData(dispatch, url)
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, [dispatch,url]);
 

  return (
    <Box mt={"3rem"}>
      <Heading as="h1" mt="4">
        Latest Products
      </Heading>

      {loading ? (
        <HomeSkeleton />
      ) : (
        <SimpleGrid columns={4} p={"50px"} rowGap={"30px"} columnGap={"30px"}>
          {storeData.map((ele) => (
            <HomeProdList key={ele.id} ele={ele} />
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
}

export default HomeProduct;
