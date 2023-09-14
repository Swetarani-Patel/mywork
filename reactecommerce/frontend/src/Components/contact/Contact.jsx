import React from 'react';
import { Box, Heading, Text, VStack, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';

function Contact() {
  return (
    <Box mt={4}>
      <Heading>Contact Us</Heading>
      <Text>If you have any questions, suggestions, or feedback, we'd love to hear from you!</Text>

      <VStack spacing={4} mt={4}>
        <Box>
          <Heading size="md">Contact Information</Heading>
          <Text>Email: contact@glamio.com</Text>
          <Text>Phone: +123 456 7890</Text>
          <Text>Address: New Colony, Sundargarh, India</Text>
        </Box>

        <Box>
          <Heading size="md" mb={4}>Send Us a Message</Heading>
          <form >
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input type="text" name="name" />
            </FormControl>

            <FormControl id="email" mt={2} isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" name="email" />
            </FormControl>

            <FormControl id="message" mt={2} isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea name="message" rows="4" />
            </FormControl>

            <Button type="submit" mt={4} mb={4} colorScheme='green'>
              Send
            </Button>
          </form>
        </Box>
      </VStack>
    </Box>
  );
}

export default Contact;
