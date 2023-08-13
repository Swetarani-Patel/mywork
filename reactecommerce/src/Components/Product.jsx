import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "./ProductList";
import { SimpleGrid, Box, Heading,Skeleton } from "@chakra-ui/react";
import CategoryBtn from "./CategoryBtn";
import { getAll, getData, getMen, getJel, getWomen, getEle } from "./api";

function Product() {
  const [url, setUrl] = useState("https://fakestoreapi.com/products");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const storeData = useSelector((store) => {
    return store.product;
  });

  useEffect(() => {
    setLoading(true);
    getData(dispatch, url)
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, [url]);

  return (
    <Box>
      <Heading as="h1" mt="4">
        Latest Products
      </Heading>
      <CategoryBtn text="All" onClick={() => getAll(setUrl)} />
      <CategoryBtn text="Men's Clothing" onClick={() => getMen(setUrl)} />
      <CategoryBtn text="Women's Clothing" onClick={() => getWomen(setUrl)} />
      <CategoryBtn text="Jewellery" onClick={() => getJel(setUrl)} />
      <CategoryBtn text="Electronics" onClick={() => getEle(setUrl)} />
      
      {loading ? (
        <SimpleGrid columns={3} p={"50px"} rowGap={"30px"} columnGap={"30px"}>
          {Array.from({ length: 9 }).map((_, index) => (
            <Box p="4" borderWidth="1px" borderRadius="md" key={index}>
              <Skeleton height="150px" width="100%" />
              <Skeleton height="20px" width="100%" mb="2"/>
              <Skeleton height="20px" mb="2"/>
              <Skeleton height="20px" width="20%"/>
            </Box>
          ))}
        </SimpleGrid>
      ) : (
        <SimpleGrid columns={3} p={"50px"} rowGap={"30px"} columnGap={"30px"}>
          {storeData.map((ele) => (
            <ProductList key={ele.id} ele={ele} />
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
}

export default Product;
