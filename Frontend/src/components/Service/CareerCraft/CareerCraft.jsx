import React from "react";
import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
  Box,
  Heading,
  Container,
  Image
} from "@chakra-ui/react";
import CCSection3 from "./CCSection3";
import CCSection4 from "./CCSection4";
import { motion } from "framer-motion";
import './globals.css'
import careerCraftImage from "../../../assets/images/CareerCraft/cc.jpg";

// Create motion components for animation
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

export default function CareerCraft() {
   
  return (
    <>
    <Flex
  w="full"
  mt={{ base: "10" }}
  h={{ base: "70vh", md: "100vh" }}
  direction={{ base: "column", md: "row" }}
  align="center"
  justify="center"
  p={{ base: 0, md: 10 }}
  bgColor="#F3E9DD"
  position="relative"
  overflow="hidden"
  borderRadius="lg"
>
  {/* Animated Shapes */}
  <div className="shape clip-path"></div>

  {/* Main Content */}
  <Flex
    direction={{ base: "column", md: "row" }}
    w="full"
    h="full"
    align="center"
    justify="center"
    gap={{ base: 4, md: 8 }}
    zIndex={1}
  >
    {/* Text Side */}
    <Flex
      flex={1}
      direction="column"
      align={{ base: "center", md: "flex-start" }}
      justify="center"
      color="black"
      maxW={{ base: "100%", md: "50%" }}
      textAlign={{ base: "center", md: "left" }}
    >
      <VStack align="center" spacing={{ base: 4, md: 6 }}>
        <MotionHeading
          fontFamily="ClashDisplay"
          fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          color="#1A202C"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
           CareerCraft: 
        </MotionHeading>
        <MotionHeading
          fontFamily="ClashDisplay"
          fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          color="#3782C3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Elevate Your Career
        </MotionHeading>
        <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} maxW="xl" align="center">
          CareerCraft is our specialized program focused on skill development and career readiness. Through workshops, training sessions, and mentorship, we equip individuals with the skills and confidence needed to excel in their chosen fields.
        </Text>
      </VStack>
    </Flex>

    {/* Image Side */}
    <Flex
      flex={1}
      justify="center"
      align="center"
      w="full"
      h={{ base: "100%", md: "100%" }}
      overflow="hidden"
    >
      <Image
        className="animated-image"
        src={careerCraftImage}
        alt="OnCampus"
        objectFit="cover"
        boxSize={{ base: "100%", md: "100%" }}
        filter="brightness(1)"
      />
    </Flex>
  </Flex>
</Flex>



      {/* Section 1 
<Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={
        'url(https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'
      }
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
      backgroundAttachment={"fixed"}
      zIndex={1}
      position="relative"
      alignItems="center" // Center vertically
      justifyContent="center" // Center horizontally
    >
      <Stack
        spacing={6}
        align="center" // Center the text box horizontally
        textAlign="center" // Center text inside the box
        position="relative" // Ensure it's positioned correctly
      >
        <MotionBox
          bg="#EDF2F7"
          p={10}
          borderRadius="md"
          textAlign="left"
          color="black"
          w={{ base: "90%", md: "70%" }} // Make box wider horizontally
          maxW="4xl" // Optional: ensure a maximum width
          minH="300px" // Ensure a minimum height for rectangular shape
          initial={{ opacity: 0, scale: 0.8 }} // Start from small and invisible
          animate={{ opacity: 1, scale: 1 }} // Scale up and fade in
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Stack spacing={4} align="center" textAlign="center">
            <MotionHeading
              fontFamily={"ClashDisplay"}
              fontSize={{ base: "4xl", md: "5xl" }}
              fontWeight="bold"
              color="#1A202C"
              initial={{ opacity: 0 }} // Start from invisible
              animate={{ opacity: 1 }} // Fade in
              transition={{ duration: 1, delay: 0.5 }} // Delay slightly after the box animation
            >
              CareerCraft: 
            </MotionHeading>
            <MotionHeading
              fontFamily={"ClashDisplay"}
              fontSize={{ base: "4xl", md: "5xl" }}
              fontWeight="bold"
              color="#CBD5E0"
              initial={{ opacity: 0 }} // Start from invisible
              animate={{ opacity: 1 }} // Fade in
              transition={{ duration: 1, delay: 0.5 }} // Delay slightly after the box animation
            >
              Elevate Your Career
            </MotionHeading>
            <Text mt={4} fontSize={{ base: "md", md: "lg" }} color="gray.800">
              CareerCraft is our specialized program focused on skill development and career readiness. Through workshops, training sessions, and mentorship, we equip individuals with the skills and confidence needed to excel in their chosen fields.
            </Text>
          </Stack>
        </MotionBox>
      </Stack>
    </Flex>  */}

      {/* Section 2 */}
          <Flex
      mt={{ base: 10, md: 20, lg: 32 }} // Responsive margin-top
      w="full"
     h={{ base: "40vh", md: "50vh", lg: "60vh" }}// Responsive height
      backgroundImage={
        'url(https://images.pexels.com/photos/3184290/pexels-photo-3184290.jpeg)'
      }
      backgroundSize="cover"
      backgroundPosition="center center"
      backgroundAttachment="fixed"
      zIndex={1}
      position="relative"
      alignItems="center" // Center content vertically
      justifyContent="center" // Center content horizontally
    >
      <VStack
        w="full"
        justify="center"
        px={useBreakpointValue({ base: 4, md: 6, lg: 8 })}
        bgGradient="linear(to-r, transparent, blackAlpha.600)"
      >
        <Stack
          maxW={{ base: "full", md: "2xl" }}
          spacing={4}
          position="absolute"
          left={{ base: 4, md: 6, lg: 8 }} // Responsive positioning
          p={{ base: 4, md: 6 }}
        >
          <Box
            bg="gray.100"
            p={{ base: 4, md: 6, lg: 10 }} // Responsive padding
            borderRadius="md"
            textAlign="left"
            color="black"
            maxW={{ base: "full", md: "lg" }} // Full width on smaller screens
            minH={{ base: "auto", md: "400px", lg: "500px" }} // Responsive height
            w="full" // Full width on smaller screens
          >
            <Heading
              fontFamily="ClashDisplay"
              fontSize={{ base: "xl", md: "2xl", lg: "4xl" }}
              fontWeight="bold"
              color="blue.400"
            >
              How CareerCraft Can Transform Your Professional Journey?
            </Heading>
            <Text
              mt={4}
              fontSize={{ base: "sm", md: "md", lg: "xl" }} 
              color="gray.800"
              //lineHeight="1.6"
            >
              <strong>
                Elevate Your Career with Expert Training and Guidance
              </strong>
              <br />
              CareerCraft offers specialized training and personalized mentorship to transform your professional journey. Gain cutting-edge skills and advanced certifications tailored to your career goals. With guidance from industry experts, CareerCraft equips you with the confidence and expertise to excel and advance in today’s competitive job market.
            </Text>
          </Box>
        </Stack>
      </VStack>
    </Flex>
    

      {/* Section 3 */}
        <CCSection3 />

      {/* Section 4 */}
        <CCSection4 />
    </>
  );
}