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
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import axios from "axios";

function Password() {
    const[password, setPassword] = useState("")
    const[confirmpassword, setConfirmPassword] = useState("")
    const toast = useToast();
    const navigate = useNavigate()
    const handlePassword = async ()=>{
        if(password !== confirmpassword){
            toast({
                description: "Password doesn't match",
                status: "error",
                position: "top",
                duration: 2000,
                isClosable: true,
              });
        }else{
            const email = localStorage.getItem("forget-email");
            try{
             const response = await axios.post('http://localhost:8000/confirmpassword',{email, password})
             console.log(response);
             toast({
                description: "Password reset successfully",
                status: "success",
                position: "top",
                duration: 2000,
                isClosable: true,
              });

              setTimeout(()=>{
                navigate('/signin')
              },2000)

              

            }catch(error){
               console.log(error)
            }
        }
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
      borderWidth={0.5}
      borderColor="gray.200"
    >
      <VStack spacing={4} align="stretch">
        <Text fontSize="xl" fontWeight="bold">
          Forgot Password?
        </Text>
        <Text>
          Don't have an account?{" "}
          <Link style={{ color: "teal", fontWeight: "bold" }} to="/signup">
            Sign Up
          </Link>
        </Text>
        <FormControl id="password">
          <Input
            type="password"
            placeholder="Password"
            name="password"
            fontSize={"15px"}
            onChange={(e)=>{setPassword(e.target.value)}}
          />
        </FormControl>
        <FormControl id="password">
          <Input
            type="password"
            placeholder="Confirm Password"
            name="password"
            fontSize={"15px"}
            onChange={(e)=>{setConfirmPassword(e.target.value)}}
          />
        </FormControl>
        <Button colorScheme="teal" size="lg" mt={4} onClick={handlePassword}>
          Reset Password
        </Button>
        <Divider />
      </VStack>
    </Box>
  );
}

export default Password;
