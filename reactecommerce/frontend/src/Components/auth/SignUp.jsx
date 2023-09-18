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
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/authaction/authaction";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const navigate =  useNavigate()
  const state = useSelector((state) => state);
  const accesToken = localStorage.getItem("access-token");
  console.log("render")
  if (accesToken) {
    navigate("/");
  }

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

  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        const response = await axios.post(
          "http://localhost:8000/signup",
          formData
        );
        toast({
          title: "Sign Up Successful",
          description: "You have successfully signed up.",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
        console.log(response);
        setFormData({
          name: "",
          email: "",
          password: "",
        });
      } catch (error) {
        toast({
          title: "user already exists",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
      }
    }
  };
  const dispatch = useDispatch();
  function handelGoogleAuth() {
    dispatch(login());
  }

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
        <Text color={"gray.500"}>
          Already have an account?{" "}
          <Link style={{ color: "teal", fontWeight: "bold" }} to="/signin">
            Sign In
          </Link>
        </Text>

        <FormControl id="signup">
          <HStack spacing={3} alignItems="center">
            <FaUser size={20} style={{ marginBottom: "8px" }} />
            <FormLabel fontSize={"15px"}>Name</FormLabel>
          </HStack>
          <Input
            type="text"
            placeholder="Your Name"
            name="name"
            onChange={handleChange}
            fontSize={"15px"}
            value={formData.name}
          />
        </FormControl>
        <FormControl id="email">
          <HStack spacing={3} alignItems="center">
            <FaEnvelope size={20} style={{ marginBottom: "8px" }} />
            <FormLabel fontSize={"15px"}>Email Address</FormLabel>
          </HStack>
          <Input
            type="email"
            placeholder="Your Email"
            name="email"
            onChange={handleChange}
            fontSize={"15px"}
            value={formData.email}
          />
        </FormControl>
        <FormControl id="password">
          <HStack spacing={3} alignItems="center">
            <FaLock size={20} style={{ marginBottom: "8px" }} />
            <FormLabel fontSize={"15px"}>Password</FormLabel>
          </HStack>
          <Input
            type="password"
            placeholder="Choose a Password"
            name="password"
            onChange={handleChange}
            fontSize={"15px"}
            value={formData.password}
          />
        </FormControl>
        <Button colorScheme="teal" size="lg" mt={4} onClick={handleSubmit}>
          Sign Up
        </Button>
        <Divider />
        <Button size="lg" onClick={handelGoogleAuth}>
          Continue with &nbsp;
          <FcGoogle size={30} />
        </Button>
      </VStack>
    </Box>
  );
}

export default SignUp;
