import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsData } from '../redux/actionCreator'
import axios from 'axios'
import ProductList from './ProductList';
import { SimpleGrid, Box, Button, Container, Heading } from '@chakra-ui/react';

function Product() {
  const dispatch = useDispatch();
  const storeData = useSelector((store)=>{
    return store.product;
  })
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then((response)=>{
      dispatch(getProductsData(response.data))
      console.log(response.data);
    }).catch((error)=>{
      console.log('error')
    })
  },[])
  return (
    <Box>
    <Heading as="h1" mt='4'>
    
          Latest Products
        </Heading>
        <Button
          variant="outline"
          mt={6}
          mr={2}
         
          _hover={{ bg: 'pink.50'}}
        >
          All
        </Button>
       <Button variant="outline"
          mt={6}
          mr={2}
         
         
          _hover={{ bg: 'pink.50' }}>  Men's Clothing</Button>
       <Button variant="outline"
          mt={6}
          mr={2}
         
         
          _hover={{ bg: 'pink.50' }}>Women's Clothing</Button>
       <Button variant="outline"
          mt={6}
          mr={2}
         
         
          _hover={{ bg: 'pink.50' }}> jewellery</Button>
       <Button variant="outline"
          mt={6}
          mr={2}
         
         
          _hover={{ bg: 'pink.50' }}> Electronics</Button>
       <Button variant="outline"
          mt={6}
          mr={2}
         
         
          _hover={{ bg: 'pink.50' }}> Low To High</Button>
       <Button variant="outline"
          mt={6}
          mr={2}
         
         
          _hover={{ bg: 'pink.50' }}> High To Low</Button>
       <Button variant="outline"
          mt={6}
          mr={2}
         
         
          _hover={{ bg: 'pink.50' }}> Filter</Button>
      <SimpleGrid columns={3} p={'50px'} rowGap={'30px'} columnGap={'30px'}>
    {
      storeData.map((ele)=>{
        return <ProductList key={ele.id} ele={ele}/>
      })
    }
    </SimpleGrid>
    </Box>
   
  )
  
}


export default Product
