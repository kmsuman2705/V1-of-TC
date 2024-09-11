import React from "react";
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Box,
} from "@chakra-ui/react";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";
import hVideo from "../../assets/videos/tc.mp4";
import { FaChevronDown } from "react-icons/fa";

export default function Hero() {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      position={"relative"}
      overflow={"hidden"}
      direction={{ base: "column", md: "row" }}
      align={"center"}
      justify={"center"}
    >
      {/* Background Animation */}
      <Box
        position={"absolute"}
        top={0}
        left={0}
        w={"full"}
        h={"full"}
        bgImage="url('https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg')" // Replace with your background image URL
        bgSize="cover"
        bgPosition="center"
        filter="blur(8px)"
        zIndex={-2}
        as={motion.div}
        initial={{ scale: 1.1 }} // Parallax effect starts with slight zoom
        animate={{ scale: 1 }}
        transition={{ duration: 5, ease: "easeOut" }}
      >
        {/* Add particle or gradient animations here */}
      </Box>

      {/* Gradient Overlay */}
      <Box
        position={"absolute"}
        top={0}
        left={0}
        w={"full"}
        h={"full"}
        bgGradient="linear(to-r, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2))"
        zIndex={-1}
      />

      {/* Content Container */}
      <Flex
        w={"full"}
        h={"full"}
        align={"center"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          align={"center"}
          w={"full"}
          maxW={"7xl"}
          spacing={8}
        >
          {/* Video Player */}
          <Box
            w={{ base: "full", md: "50%" }}
            p={4}
            display="flex"
            justifyContent="center"
            as={motion.div}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            _hover={{
              transform: "scale(1.03)",
              borderColor: "blue.400",
              boxShadow: "0 0 20px rgba(255, 215, 0, 1)",
              transition: "all 0.4s ease",
              borderRadius:"lg"
            }}
          >
            <video
              controls
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                border: "2px solid transparent",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
              src={hVideo}
            />
          </Box>

          {/* Text Content */}
          <VStack
            w={{ base: "full", md: "50%" }}
            align={"flex-start"}
            spacing={6}
            p={4}
            textAlign={{ base: "center", md: "left" }}
            as={motion.div}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
          <Text
            bg="white" // Initially pure white
            bgClip="text"
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "4xl", md: "7xl" })}
            textShadow="1px 1px 2px rgba(0, 0, 0, 0)"
            as={motion.div}
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", duration: 1, delay: 0.5 }}
            _hover={{
              bgGradient: "linear(to-r, red.400, yellow.400)", // Gradient on hover
              bgClip: "text",
              transition: "0.5s ease",
            }}
          >
            Welcome to TalentConnect!
          </Text>

            <Text
              color={"white"}
              fontSize={useBreakpointValue({ base: "md", md: "lg" })}
              textShadow="1px 1px 2px rgba(0, 0, 0, 0.5)"
              as={motion.div}
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", duration: 1, delay: 0.7 }}
            >
              Your premier destination for comprehensive career solutions. Whether
              you're a job seeker, an employer, or an academic institution, we
              connect talent with opportunity.
            </Text>
            <Stack direction={"row"} spacing={4}>
              <Link to="/#our-services">
                <Button
                  as={motion.button}
                  bg="rgba(255, 255, 255, 0.15)"
                  backdropFilter="blur(10px)"
                  rounded={"full"}
                  color={"white"}
                  border={"1px solid rgba(255, 255, 255, 0.5)"}
                  _hover={{ transform: "scale(1.05)", boxShadow: "lg" , bg:"blue.400"}}
                  whileHover={{ scale: 1.1 }}
                  
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  Learn More
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  as={motion.button}
                  bg="rgba(255, 255, 255, 0.15)"
                  backdropFilter="blur(10px)"
                  rounded={"full"}
                  color={"white"}
                  border={"1px solid rgba(255, 255, 255, 0.5)"}
                  _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
                  whileHover={{ scale: 1.1 }}
                  
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                >
                  Contact Us
                </Button>
              </Link>
            </Stack>
          </VStack>
        </Flex>
      </Flex>

      
      
    </Flex>
  );
}
