import React, { useState } from "react";
import {
  Box,
  FormControl,
  Input,
  Button,
  VStack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Password() {
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const isStrongPassword = (password) => {
    return password.length >= 6;
  };
  const handlePassword = async () => {
    if (password !== confirmpassword) {
      toast({
        title: "Password Reset Failed",
        description: "The entered passwords do not match. Please try again.",
        status: "error",
        position: "top",
        duration: 2000,
        isClosable: true,
      });
    } else if (!isStrongPassword(password)) {
      toast({
        title: "Password Reset Failed",
        description: "Password should be at least 6 characters long.",
        status: "error",
        position: "top",
        duration: 2000,
        isClosable: true,
      });

    }
    else {
      const email = localStorage.getItem("forget-email");
      try {
        const response = await axios.post(
          "http://localhost:8000/confirmpassword",
          { email, password }
        );
        toast({
          description: "Password reset successfully",
          status: "success",
          position: "top",
          duration: 2000,
          isClosable: true,
        });

        setTimeout(() => {
          navigate("/signin");
        }, 2000);
      } catch (error) {
        console.log(error);
      }
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
      borderWidth={0.5}
      borderColor="gray.200"
    >
      <VStack spacing={4} align="stretch">
        <Text fontSize="xl" fontWeight="bold">
        Forgot Password
        </Text>
        <FormControl id="password">
          <Input
            type="password"
            placeholder="Enter new password"
            name="password"
            fontSize={"15px"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </FormControl>
        <FormControl id="password">
          <Input
            type="password"
            placeholder="Confirm new password"
            name="password"
            fontSize={"15px"}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </FormControl>
        <Button colorScheme="teal" size="lg" mt={4} onClick={handlePassword}>
          Reset Password
        </Button>
      </VStack>
    </Box>
  );
}

export default Password;
