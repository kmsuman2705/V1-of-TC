import React from "react";
import {
  Stack,
  Flex,
  Text,
  VStack,
  Box,
  Heading,
  Container,
  Image,
} from "@chakra-ui/react";
import Section3 from "./Section3";
import Section4 from "./Section4";
import { motion } from "framer-motion";
import './globals.css';
import oncampusImage from "../../../assets/images/OnCampus/oc.png";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

export default function OnCampus() {
  return (
    <Flex
      direction="column"
      bgColor="#FCEEE3"  // Set background color here
    >
      <Flex
        w="full"
        mt={{ base: "10" }}
        h={{ base: "70vh", md: "100vh" }}
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        p={{ base: 0, md: 10 }}
        position="relative"
        overflow="hidden"
        borderRadius="lg"
      >
        {/* Your existing content here */}
        {/* Animated Shapes 
        <div className="shape clip-path"></div>*/}

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
                color="#1E3A8A"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                OnCampus Connect:
              </MotionHeading>
              <MotionHeading
                fontFamily="ClashDisplay"
                fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
                fontWeight="bold"
                color="#FFA500"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                Hire Smarter
              </MotionHeading>
              <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} maxW="xl" align="center">
                Our OnCampus service brings career opportunities directly to students, connecting them with top employers through campus recruitment drives and job events.
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
              src={oncampusImage}
              alt="OnCampus"
              objectFit="cover"
              boxSize={{ base: "100%", md: "100%" }}
              filter="brightness(1)"
            />
          </Flex>
        </Flex>
      </Flex>

      {/* Section 2 */}
{/* Section 2 */}
<Flex
  
  w="full"
  h={{ base: "50vh", md: "50vh", lg: "70vh" }}
  backgroundImage={
    'url(https://images.unsplash.com/photo-1562564055-71e051d33c19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
  }
  backgroundSize="cover"
  backgroundPosition="center center"
  backgroundAttachment="fixed"
  zIndex={1}
  position="relative"
>
  {/* VStack now aligned to the left and takes full height */}
  <VStack
    w="full"
    h="full" // Matches the height of the image
    justify="center"
    alignItems="flex-start" // Aligns content to the left
    px={{ base: 4, md: 6, lg: 0 }}
    bgGradient="linear(to-r, blackAlpha.600, transparent)" // Gradient from left to transparent
  >
    <Box
      bg="#D7D7F9"
      p={4}
      borderRadius="md"
      textAlign="left"
      color="black"
      w={{ base: "full", md: "50%", lg: "40%" }} // Width for the text box
      h="100%" // Ensures the height matches the image
    >
      <Flex justifyContent="center" alignItems="center">
        <Heading
          fontFamily="ClashDisplay"
          fontSize={{ base: "2xl", md: "xl", lg: "4xl" }}
          fontWeight="bold"
          color="black"
          p={2}
        >
          Why Should You
        </Heading>
        <Heading
          fontFamily="ClashDisplay"
          fontSize={{ base: "2xl", md: "xl", lg: "4xl" }}
          fontWeight="bold"
          color="blue.400"
        >
          Hire Us?
        </Heading>
      </Flex>
      <Text
        mt={4}
        fontSize={{ base: "xs", md: "sm", lg: "md" }}
        fontWeight="400"
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
  </VStack>
</Flex>


      {/* Section 3 */}
      <Section3 />

      {/* Section 4 */}
      <Section4 />
    </Flex>
  );
}
