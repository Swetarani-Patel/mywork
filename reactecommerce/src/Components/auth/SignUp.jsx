import React, { useState } from "react";
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
} from "@chakra-ui/react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const toast = useToast(); // Initialize the Chakra UI toast hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUserData = () => {
    const userData = JSON.parse(localStorage.getItem("user-data")) || [];

    userData.push(formData);

    localStorage.setItem("user-data", JSON.stringify(userData));

  
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      toast({
        title: "Name is Required",
        description: "Please enter your name.",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      toast({
        title: "Email is Required",
        description: "Please enter your email.",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      toast({
        title: "Invalid Email Format",
        description: "Please enter a valid email address.",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
      toast({
        title: "Password is Required",
        description: "Please enter a password.",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
      toast({
        title: "Invalid Password",
        description: "Password must be at least 6 characters long.",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      handleUserData();
      toast({
        title: "Sign Up Successful",
        description: "You have successfully signed up.",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      console.log("Form submitted:", formData);
    }
  };

  return (
    <Box
      m={"auto"}
      mt={"2rem"}
      mb={"4rem"}
      p={4}
      maxW="sm"
      boxShadow="md"
      borderRadius="md"
      bg="white"
      borderWidth={1}
      borderColor="gray.200"
    >
      <VStack spacing={3} align="stretch">
        <Text fontSize="xl" fontWeight="bold">
          Create an Account
        </Text>
        <Text>
          Already have an account?{" "}
          <Link style={{ color: "teal", fontWeight: "bold" }} to="/signin">
            Sign In
          </Link>
        </Text>

        <FormControl id="signup">
          <HStack spacing={3} alignItems="center">
            <FaUser size={20} style={{ marginBottom: "8px" }} />
            <FormLabel fontSize={'15px'}>Name</FormLabel>
          </HStack>
          <Input
            type="text"
            placeholder="Your Name"
            name="name"
            onChange={handleChange}
            fontSize={'15px'}
          />
        </FormControl>
        <FormControl id="email">
          <HStack spacing={3} alignItems="center">
            <FaEnvelope size={20} style={{ marginBottom: "8px" }} />
            <FormLabel fontSize={'15px'}>Email Address</FormLabel>
          </HStack>
          <Input
            type="email"
            placeholder="Your Email"
            name="email"
            onChange={handleChange}
            fontSize={'15px'}
          />
        </FormControl>
        <FormControl id="password">
          <HStack spacing={3} alignItems="center">
            <FaLock size={20} style={{ marginBottom: "8px" }} />
            <FormLabel fontSize={'15px'}>Password</FormLabel>
          </HStack>
          <Input
            type="password"
            placeholder="Choose a Password"
            name="password"
            onChange={handleChange}
            fontSize={'15px'}
          />
        </FormControl>
        <Button colorScheme="teal" size="lg" mt={4} onClick={handleSubmit}>
          Sign Up
        </Button>
        <Divider />
        <Button size="lg">
          Continue with &nbsp;
          <FcGoogle size={30} />
        </Button>
      </VStack>
    </Box>
  );
}

export default SignUp;