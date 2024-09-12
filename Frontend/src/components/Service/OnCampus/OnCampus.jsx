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
} from "@chakra-ui/react";
import Section3 from "./Section3";
import Section4 from "./Section4";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);


export default function OnCampus() {
   
  return (
    <>
      {/* Section 1 */}
      <Flex
            w={"full"}
            h={"100vh"}
            backgroundImage={
              'url(https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
            }
            backgroundSize={"cover"}
            backgroundPosition={"center center"}
            backgroundAttachment={"fixed"}
            zIndex={1}
            position="relative"
            
          >
            {/* Background Gradient */}
            <VStack
              w={"full"}
              justify={"center"}
              px={useBreakpointValue({ base: 4, md: 8 })}
              bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
            >
              {/* Centered Box */}
              <MotionBox
                bg="rgba(245, 245, 245, 0.8)"
                p={10}
                borderRadius="md"
                color="#FFFFFF"
                w={{ base: "90%", md: "60%" }} // Adjust width to make it rectangular
                maxW="2xl" // Optional: ensure a maximum width
                minH="300px" // Optional: set minimum height for rectangular shape
                initial={{ opacity: 0, y: 50 }} // Start from invisible and below
                animate={{ opacity: 1, y: 0 }} // Fade in and slide up
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <Stack spacing={4} align="center" textAlign="center">
                  <MotionHeading
                    fontFamily={"ClashDisplay"}
                    fontSize={{ base: "4xl", md: "5xl" }}
                    fontWeight="bold"
                    color="#1E3A8A"
                    initial={{ opacity: 0 }} // Start from invisible
                    animate={{ opacity: 1 }} // Fade in
                    transition={{ duration: 1, delay: 0.5 }} // Delay slightly after the box animation
                  >
                    OnCampus Connect: 
                  </MotionHeading>
                  <MotionHeading
                    fontFamily={"ClashDisplay"}
                    fontSize={{ base: "4xl", md: "5xl" }}
                    fontWeight="bold"
                    color="#FFA500"
                    initial={{ opacity: 0 }} // Start from invisible
                    animate={{ opacity: 1 }} // Fade in
                    transition={{ duration: 1, delay: 0.5 }} // Delay slightly after the box animation
                  >
                    Hire Smarter
                  </MotionHeading>
                  <Text fontSize={{ base: "md", md: "lg" }} color="black">
                    Our OnCampus service brings career opportunities directly to students, connecting them with top employers through campus recruitment drives and job events.
                  </Text>
                </Stack>
              </MotionBox>
            </VStack>
          </Flex>

      {/* Section 2 */}
     ;

<Flex
  mt={{ base: 10, md: 135 }}
  w={"full"}
 
  h={{ base: "50vh", md: "60vh" }}
  backgroundImage={
    'url(https://images.unsplash.com/photo-1562564055-71e051d33c19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
  }
  backgroundSize={"cover"}
  backgroundPosition={"center center"}
  backgroundAttachment={"fixed"}
  zIndex={1}
  position="relative"
>
  <VStack
    w={"full"}
    justify={"center"}
    px={useBreakpointValue({ base: 4, md: 8 })}
    bgGradient={"linear(to-r, transparent, blackAlpha.600)"}
  >
    <Stack
      maxW={{ base: "full", md: "2xl" }}
      spacing={6}
      position="absolute" left="8"
      p={{ base: 4, md: 0 }} // Responsive padding for the stack
    >
      <Box
        bg="gray.100"
        p={10}
        borderRadius="md"
        textAlign="left"
        color="black"
        maxW="lg"
        minH={{ base: "auto", md: "500px" }} // Responsive height for the box
        w={{ base: "full", md: "auto" }} // Make the box full width on smaller screens
      >
        <Heading
          fontFamily={"ClashDisplay"}
          fontSize={{ base: "xl", md: "5xl" }}
          fontWeight="bold"
          color="blue.400"
        >
          Why Should You Hire Us?
        </Heading>
        <Text
          mt={4}
          fontSize={{ base: "sm", md: "md" }}
          color="black"
        >
          Hire TalentConnect for top-notch on-campus recruitment
          solutions and seamless collaboration with universities. Our
          OnCampus service brings career opportunities directly to
          students, ensuring a strong brand presence on campus and
          access to a talent pipeline of pre-screened candidates. With
          our proven track record of successful campus branding
          campaigns, we are a trusted partner for companies looking to
          attract the best young talent. Let us help you take the next
          step in building your future workforce with our
          comprehensive on-campus hiring solutions. Choose
          TalentConnect for a hassle-free recruitment process and
          access to talented students ready to kickstart their
          professional journeys.
        </Text>
      </Box>
    </Stack>
  </VStack>
</Flex>

      {/* Section 3 */}
        <Section3 />

      {/* Section 4 */}
        <Section4 />
    </>
  );
}