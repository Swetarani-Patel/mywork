import React, { useState } from 'react';
import {
  Box,
  FormLabel,
  FormControl,
  Input,
  Button,
  VStack,
  Text,
  Divider,
  HStack,
  useToast,
} from '@chakra-ui/react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const toast = useToast();
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignIn = () => {
    const userData = JSON.parse(localStorage.getItem('user-data')) || [];
    const { email, password } = formData;

  
    const user = userData.find((user) => user.email === email && user.password === password);

    if (user) {
      toast({
        title: 'Sign In Successful',
        description: 'You have successfully signed in.',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top',
      });

     
    } else {
      toast({
        title: 'Sign In Failed',
        description: 'Invalid email or password. Please try again.',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top',
      });
    }
  };

  return (
    <Box
      m={'auto'}
      mt={'2rem'}
      mb={'4rem'}
      p={4}
      maxW="sm"
      boxShadow="md"
      borderRadius="md"
      bg="white"
      borderWidth={0.5}
      borderColor="gray.200"
    >
      <VStack spacing={4} align="stretch">
        <Text fontSize="xl" fontWeight="bold">
          Sign In
        </Text>
        <Text>
          Don't have an account? <Link style={{ color: 'teal', fontWeight: 'bold' }} to="/signup">
            Sign Up
          </Link>
        </Text>
        <FormControl id="email">
          <HStack spacing={3} alignItems="center">
            <FaEnvelope size={20} style={{ marginBottom: '8px' }} />
            <FormLabel fontSize={'15px'}>Email Address</FormLabel>
          </HStack>
          <Input type="email" placeholder="Your Email" name="email" onChange={handleChange} fontSize={'15px'}/>
        </FormControl>
        <FormControl id="password">
          <HStack spacing={3} alignItems="center">
            <FaLock size={20} style={{ marginBottom: '8px' }} />
            <FormLabel fontSize={'15px'}>Password</FormLabel>
          </HStack>
          <Input type="password" placeholder="Choose a Password" name="password" onChange={handleChange} fontSize={'15px'}/>
        </FormControl>
        <Button colorScheme="teal" size="lg" mt={4} onClick={handleSignIn}>
          Sign In
        </Button>
        <Divider />
      </VStack>
    </Box>
  );
}

export default SignIn;