import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

function About() {
  return (
    <Box p={4} bg="gray.100">
      <Heading as="h2" size="xl" mb={4}>
        About Us
      </Heading>
      <Text fontSize="lg" mb={4}>
        Welcome to our e-commerce website!
      </Text>
      <Text align={'left'}>
        We are dedicated to providing you with a wide range of high-quality products that cater to your needs.
      </Text>
      <Text align={'left'}>
        Our mission is to offer a seamless shopping experience and exceptional customer service, ensuring your satisfaction every step of the way.
      </Text>
      <Text align={'left'}>
        Explore our diverse selection of products, including fashion, electronics, jewelry, and more. Our team works diligently to curate the best items for you to choose from.
      </Text>
      <Text align={'left'}>
        Whether you're shopping for yourself or looking for the perfect gift, we have something for everyone. Feel free to browse and discover what we have to offer.
      </Text>
      <Text align={'left'}>
        Thank you for choosing us as your go-to online shopping destination. We look forward to serving you and exceeding your expectations.
      </Text>
      <Text>
        Happy shopping!
      </Text>
    </Box>
  );
}

export default About;
