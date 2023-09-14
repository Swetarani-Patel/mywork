import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
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
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";
import axios from "axios";

function Email() {
  const [email, setEmail] = useState("");
  const toast = useToast();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const [pin, setpin] = useState({
    first: "",
    sec: "",
    third: "",
    fourth: "",
  });

  const handleOTPSubmit = () => {
    const enteredOTP = `${pin.first}${pin.sec}${pin.third}${pin.fourth}`;
    console.log("enteredOTP", enteredOTP);
    console.log("otp", otp);

    if (Number(enteredOTP) === otp) {
      onClose();
      navigate("/resetpassword");
      localStorage.setItem("forget-email", email);
    } else {
      toast({
        title: "Password Reset Failed",
        description: "Please check your email and try again.",
        status: "error",
        position: "top",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmail = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/forgotpassword",
        { email }
      );
      setOtp(response.data.OTP);
      console.log(response);
      onOpen();
      toast({
        title: "Email Sent",
        description: `A one-time password (OTP) has been sent to ${email}. Please check your inbox.`,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    } catch (error) {
      toast({
        title: "Password Reset Failed",
        description: "Email not found. Please verify your email or sign up.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      console.log(error);
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
          Password Reset
        </Text>
        <Text color={"gray.500"}>Enter your email to reset password</Text>
        <FormControl id="email">
          <HStack spacing={3} alignItems="center">
            <FaEnvelope size={20} style={{ marginBottom: "8px" }} />
            <FormLabel fontSize={"15px"}>Email Address</FormLabel>
          </HStack>
          <Input
            type="email"
            value={email}
            placeholder="Your Email"
            name="email"
            fontSize={"15px"}
            onChange={handleInputChange}
          />
        </FormControl>
        <Button colorScheme="teal" size="lg" mt={4} onClick={handleEmail}>
          Reset Password
        </Button>

        <Modal isOpen={isOpen}>
          <ModalOverlay>
            <ModalContent>
              <ModalBody>
                <VStack>
                  <Text fontSize={"25px"} fontWeight={"600"}>
                    OTP Verification
                  </Text>

                  <Text fontSize={"15px"} pb={"20px"}>
                    Please enter the One-Time Password (OTP) you received.
                  </Text>
                  <HStack mt={3} mx={3}>
                    <PinInput>
                      <PinInputField
                        onChange={(e) => {
                          setpin({ ...pin, first: e.target.value });
                        }}
                      />
                      <PinInputField
                        onChange={(e) => {
                          setpin({ ...pin, sec: e.target.value });
                        }}
                      />
                      <PinInputField
                        onChange={(e) => {
                          setpin({ ...pin, third: e.target.value });
                        }}
                      />
                      <PinInputField
                        onChange={(e) => {
                          setpin({ ...pin, fourth: e.target.value });
                        }}
                      />
                    </PinInput>
                  </HStack>
                  <HStack>
                    <Text fontSize={"12px"} pt={"15px"}>
                      Haven't received the OTP yet? Click here to{" "}
                    </Text>
                    <Text
                      onClick={handleEmail}
                      color={"blue.400"}
                      fontWeight={"500"}
                      fontSize={"12px"}
                      pt={"15px"}
                      cursor={"pointer"}
                    >
                      RESEND
                    </Text>
                  </HStack>
                </VStack>
              </ModalBody>
              <Button colorScheme="blue" m={5} onClick={handleOTPSubmit}>
                Enter OTP
              </Button>
            </ModalContent>
          </ModalOverlay>
        </Modal>
      </VStack>
    </Box>
  );
}

export default Email;
