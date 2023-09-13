import React from 'react'
import { SimpleGrid, Box, Skeleton} from "@chakra-ui/react";
function ProdSkeleton() {
  return (
    <SimpleGrid columns={3} p={"50px"} rowGap={"30px"} columnGap={"30px"}>
    {Array.from({ length: 9 }).map((_, index) => (
      <Box p="4" borderWidth="1px" borderRadius="md" key={index}>
        <Skeleton height="150px" width="100%" />
        <Skeleton height="20px" width="100%" mb="2" />
        <Skeleton height="20px" mb="2" />
        <Skeleton height="20px" width="20%" />
      </Box>
    ))}
  </SimpleGrid>
  )
}

export default ProdSkeleton
