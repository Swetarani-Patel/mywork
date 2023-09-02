import React from 'react';
import {
  Box,
  Flex,
  Spacer,
  Link as ChakraLink,
  Button,
  IconButton,
  useColorMode,
} from '@chakra-ui/react';
import { BsCart4 } from 'react-icons/bs';
import {AiOutlineLogin} from 'react-icons/ai';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  

  const storedItem = useSelector((store)=>{
   return store.cart.cart;
  })

  let cartItem = storedItem.length;

  return (
    <Box
      bg={colorMode === 'light' ? 'gray.200' : 'gray.900'}
      py={4}
      px={8}
      boxShadow={'lg'}
      position={'sticky'}
      top={'0'}
      zIndex={'10'}
    >
      <Flex alignItems="center">
        <ChakraLink as={Link} to="/" fontSize="2xl" fontWeight="bold">
         Glam<span style={{color:'#EF9B0F'}}>io.</span>
        </ChakraLink>
        <Spacer />
        <Flex>
          <ChakraLink as={Link} to="/" mx={4}>
            Home
          </ChakraLink>
          <ChakraLink as={Link} to="/product" mx={4}>
            Product
          </ChakraLink>
          <ChakraLink as={Link} to="/about" mx={4}>
            About
          </ChakraLink>
          <ChakraLink as={Link} to="/contact" mx={4}>
            Contact
          </ChakraLink>
        </Flex>
        <Spacer />
        <Link to='/signup'>
        <Button border="2px" borderColor="gray.400">
         <AiOutlineLogin/>&nbsp; Login
        </Button>{' '}
        </Link>
        &nbsp;&nbsp;
        <Link to='/cart'>
        <Button border="2px" borderColor="gray.400">
        <BsCart4/> &nbsp;  Cart ({cartItem})
        </Button>{' '}
        </Link>
        &nbsp;&nbsp;
        <IconButton
          aria-label="Toggle Color Mode"
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          size="sm"
          variant="ghost"
        />
      </Flex>
    </Box>
  );
};

export default Navbar;
