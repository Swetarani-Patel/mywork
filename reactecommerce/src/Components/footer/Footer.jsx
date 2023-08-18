import React from 'react';
import { Box, Container, Flex, Grid, GridItem, Text, Link, Icon, VStack } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <Box bgColor="gray.800" color="white" py={8}>
      <Container maxW="container.lg">
        <Grid templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }} gap={8}>
          <GridItem>
            <Text fontSize="xl" fontWeight="bold" mb={4}>
              Company Name
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit lectus nec ligula condimentum, nec vulputate urna fermentum.
            </Text>
          </GridItem>
          <GridItem>
            <Text fontSize="xl" fontWeight="bold" mb={4}>
              Quick Links
            </Text>
            <Flex flexDirection={'column'} textAlign={'left'} w={'20'} m={'auto'}>
            <Link fontSize="md" href="#">Home</Link>
            <Link fontSize="md" href="#">Products</Link>
            <Link fontSize="md" href="#">About Us</Link>
            <Link fontSize="md" href="#">Contact</Link>
            </Flex>
          </GridItem>
          <GridItem>
            <Text fontSize="xl" fontWeight="bold" mb={4}>
              Connect With Us
            </Text>
            <Flex ml='10'>
              <Link fontSize="md" href="#" mr={4}>
                <Icon as={FaFacebook} boxSize={6} />
              </Link>
              <Link fontSize="md" href="#" mr={4}>
                <Icon as={FaTwitter} boxSize={6} />
              </Link>
              <Link fontSize="md" href="#">
                <Icon as={FaInstagram} boxSize={6} />
              </Link>
            </Flex>
          </GridItem>
          <GridItem>
            <Text fontSize="xl" fontWeight="bold" mb={4}>
              Newsletter
            </Text>
            <Text>
              Subscribe to our newsletter to receive updates on new arrivals, special offers, and more.
            </Text>
          </GridItem>
        </Grid>
        <Text mt={8} textAlign="center">
          &copy; {new Date().getFullYear()} Company Name. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
}

export default Footer;
