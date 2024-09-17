"use client";

import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function ReadyToTransform() {
  return (
    <Box
      id="ready-to-transform"
      bg={useColorModeValue("gray.100", "gray.700")}
      p={8}
      borderRadius="lg"
      boxShadow="lg"
      textAlign="center"
      mt={10}
    >
      <Container maxW={"container.md"}>
        <Flex justifyContent="center" alignItems="center">
        <Heading
          as="h2"
          fontSize={{ base: "2xl", md: "4xl" }}
          fontFamily={"ClashDisplay"}
          color={"black"} // Change to your desired color
          mb={4}
          p={2}
          
        >
          Ready to Transform 
        </Heading>
        <Heading
          as="h2"
          fontSize={{ base: "2xl", md: "4xl" }}
          fontFamily={"ClashDisplay"}
          color={"blue.400"} // Change to your desired color
          mb={4}
          
        >
          Your Career?
        </Heading>
        </Flex>
        <Text fontSize={{ base: "lg", md: "xl" }} mb={6}>
          Join TalentConnect today and take the first step towards unlocking
          your full career potential. Let's make it happen!
        </Text>
        <Stack
          spacing={4}
          direction={{ base: "column", md: "row" }}
          justify="center"
        >
          <Button
            as={RouterLink}
            to="/jobs/post-resume"
            rounded={"full"}
            color={"teal"}
            bg={"white"}
            _hover={{ transform: "scale(1.05)", boxShadow: "lg", bg: "blue.300", color:"white" }}
          >
            Post Your Resume
          </Button>
          <Button
            as={RouterLink}
            to="/jobs/current-opening"
            rounded={"full"}
            color={"teal"}
            bg={"white"}
            _hover={{ transform: "scale(1.05)", boxShadow: "lg", bg: "blue.300", color:"white" }}
          >
            Current Openings
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
