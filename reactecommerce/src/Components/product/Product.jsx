import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "./ProductList";
import { SimpleGrid, Box, Heading, Select } from "@chakra-ui/react";
import CategoryBtn from "../CategoryBtn";
import { getAll, getData, getMen, getJel, getWomen, getEle } from "../api";
import ProdSkeleton from "./ProdSkeleton";

function Product() {
  const [url, setUrl] = useState("https://fakestoreapi.com/products");
  const [loading, setLoading] = useState(false);
  const [selectedSort, setSelectedSort] = useState("default");
  const dispatch = useDispatch();
  const storeData = useSelector((store) => store.product);

  useEffect(() => {
    setLoading(true);
    getData(dispatch, url)
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, [url, dispatch]);

  const handleSortChange = (event) => {
    setSelectedSort(event.target.value);
  };

  const sortedData = [...storeData];
  if (selectedSort === "priceLowToHigh") {
    sortedData.sort((a, b) => a.price - b.price);
  } else if (selectedSort === "priceHighToLow") {
    sortedData.sort((a, b) => b.price - a.price);
  } else if (selectedSort === "reviewHighToLow") {
    sortedData.sort((a, b) => b.rating.rate - a.rating.rate);
  } else if (selectedSort === "reviewLowToHigh") {
    sortedData.sort((a, b) => a.rating.rate - b.rating.rate);
  }

  return (
    <Box>
      <Box>
        <Heading as="h1" mt="4">
          Latest Products
        </Heading>
        <CategoryBtn text="All" onClick={() => getAll(setUrl)} />
        <CategoryBtn text="Men's Clothing" onClick={() => getMen(setUrl)} />
        <CategoryBtn text="Women's Clothing" onClick={() => getWomen(setUrl)} />
        <CategoryBtn text="Jewellery" onClick={() => getJel(setUrl)} />
        <CategoryBtn text="Electronics" onClick={() => getEle(setUrl)} />
        <Select
          w={"15%"}
          paddingY={2}
          value={selectedSort}
          onChange={handleSortChange}
        >
          <option value="default">Sort</option>
          <option value="priceLowToHigh">Price: Low to High</option>
          <option value="priceHighToLow">Price: High to Low</option>
          <option value="reviewHighToLow">Review: High to Low</option>
          <option value="reviewLowToHigh">Review: Low to High</option>
        </Select>
      </Box>
      {loading ? (
       <ProdSkeleton/>
      ) : (
        <SimpleGrid columns={3} p={"50px"} rowGap={"30px"} columnGap={"30px"}>
          {sortedData.map((ele) => (
            <ProductList key={ele.id} ele={ele} />
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
}

export default Product;
