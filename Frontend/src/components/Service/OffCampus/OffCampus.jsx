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
import OCSection3 from "./OCSection3";
import OCSection4 from "./OCSection4";
import { motion } from "framer-motion";
import './globals.css'
import offcampusImage from "../../../assets/images/OffCampus/oc.png";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

export default function OffCampus() {
   
  return (
    <>
    <Flex
      direction="column"
      bgColor="#A98AC6"  // Set background color here
    >
    <Flex
  w="full"
  mt={{ base: "10" }}
  h={{ base: "70vh", md: "100vh" }}
  direction={{ base: "column", md: "row" }}
  align="center"
  justify="center"
  p={{ base: 0, md: 10 }}
  bgColor="#A98AC6"
  position="relative"
  overflow="hidden"
  borderRadius="lg"
>
  {/* Animated Shapes 
  <div className="shape clip-path"></div> */}

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
          color="#FAE8BB"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
           OffCampus Gateway:
        </MotionHeading>
        <MotionHeading
          fontFamily="ClashDisplay"
          fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          color="#FFFFFF"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Your Path to Success
        </MotionHeading>
        <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} maxW="xl" align="center">
          TalentConnect's OffCampus service offers a platform for recent graduates and job seekers to explore diverse career opportunities. We organize job fairs, networking events, and provide access to exclusive job postings to help you find the perfect fit for your skills and ambitions.
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
        src={offcampusImage}
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
        'url(https://images.pexels.com/photos/3182766/pexels-photo-3182766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'
      }
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
      backgroundAttachment={"fixed"}
      zIndex={1}
      position="relative"
      alignItems="center" // Center vertically
      justifyContent="center" // Center horizontally
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack
          maxW={"2xl"} // Adjust the width of the stack to make it more rectangular
          spacing={6}
          position="absolute"
          align="center" // Center the text box horizontally
          textAlign="center" // Align text inside the box to the center
        >
          <MotionBox
            bg="rgba(245, 245, 245, 0.8)"
            p={10}
            borderRadius="md"
            color="black"
             w={{ base: "90%", md: "60%" }}
            maxW="3xl" // Ensure it's wider
            minH="auto" // Adjust the height to make it rectangular
            initial={{ opacity: 0, y: 50 }} // Starting state for animation (hidden and lower on the y-axis)
            animate={{ opacity: 1, y: 0 }} // Ending state for animation (fully visible and in place)
            transition={{ duration: 0.8, ease: "easeOut" }} // Control the speed and style of animation
          >
            <Heading
              fontFamily={"ClashDisplay"}
              fontSize={{ base: "4xl", md: "5xl" }}
              fontWeight="bold"
              color="#1A365D"
            >
              OffCampus Gateway:
            </Heading>
            <Heading
              fontFamily={"ClashDisplay"}
              fontSize={{ base: "4xl", md: "5xl" }}
              fontWeight="bold"
              color="#FFFFFF"
            >
              Your Path to Success
            </Heading>
            <Text mt={4} fontSize={{ base: "md", md: "lg" }} color="black">
              TalentConnect's OffCampus service offers a platform for recent graduates and job seekers to explore diverse career opportunities. We organize job fairs, networking events, and provide access to exclusive job postings to help you find the perfect fit for your skills and ambitions.
            </Text>
          </MotionBox>
        </Stack>
      </VStack>
    </Flex> */}

      {/* Section 2 */}
    <Flex
      mt={{ base: 20, md: 20, lg: 32 }} // Adjusted margin-top for different screen sizes
      w="full"
      h={{ base: "40vh", md: "50vh", lg: "60vh" }} // Responsive height
      backgroundImage={
        'url(https://images.pexels.com/photos/3184424/pexels-photo-3184424.jpeg)'
      }
      backgroundSize="cover"
      backgroundPosition="center center"
      backgroundAttachment="fixed" // This makes the background image stay in place
      zIndex={1}
      position="relative"
    >
      <VStack
        w="full"
        justify="center"
        px={useBreakpointValue({ base: 4, md: 6, lg: 8 })} // Responsive padding
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
            bg="#F0F4F8"
            p={{ base: 4, md: 6, lg: 10 }} // Responsive padding
            borderRadius="md"
            textAlign="left"
            color="black"
            maxW={{ base: "full", md: "lg" }} // Full width on smaller screens
            minH={{ base: "auto", md: "400px", lg: "500px" }} // Responsive height
            w="full" // Full width on smaller screens
          >
            <Flex justifyContent="center" alignItems="center">
                <Heading
                  fontFamily="ClashDisplay"
                  fontSize={{ base: "xl", md: "2xl", lg: "4xl" }} // Responsive font size
                  fontWeight="bold"
                  p="2"
                >
                  <Text as="span" color="black">
                    TalentConnect:
                  </Text>
                  <Text as="span" color="blue.400">
                    {' '}Your Partner in OffCampus Success
                  </Text>
                </Heading>
              </Flex>

            <Text
              mt={4}
              fontSize={{ base: "sm", md: "md", lg: "xl" }} // Responsive font size
              color="gray.800"
            >
              Unlock a world of career opportunities with TalentConnect's OffCampus service. 
              Designed for recent graduates and job seekers, we facilitate job fairs, networking events, and exclusive job listings to connect you with top employers. 
              Our dedicated team ensures you have access to the best opportunities that match your skills and ambitions. 
              Trust TalentConnect to guide you through a successful career transition and help you achieve your professional dreams.
            </Text>
          </Box>
        </Stack>
      </VStack>
    </Flex>
    

      {/* Section 3 */}
        <OCSection3 />

      {/* Section 4 */}
        <OCSection4 />
        </Flex>
    </>
  );
}