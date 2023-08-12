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

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      bg={colorMode === 'light' ? 'gray.100' : 'gray.900'}
      py={4}
      px={8}
      boxShadow="0px 3px 8px rgba(0, 0, 0, 0.24)"
    >
      <Flex alignItems="center">
        <ChakraLink as={Link} to="/" fontSize="xl" fontWeight="bold">
          My Website
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
        <Button border="2px" borderColor="gray.400">
         <AiOutlineLogin/>&nbsp; Login
        </Button>{' '}
        &nbsp;&nbsp;
        <Button border="2px" borderColor="gray.400">
        <BsCart4/> &nbsp;  Cart
        </Button>{' '}
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
