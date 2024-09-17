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
import Section3 from "./Section3";
import Section4 from "./Section4";
import { motion } from "framer-motion";
import './globals.css'
import workforceImage from "../../../assets/images/Workforce/wf.jpg";

// Create motion components for animation
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);


export default function OnCampus() {
  return (
    <>
     <Flex
      direction="column"
      bgColor="#D7F3FE"  // Set background color here
    >

    <Flex
  w="full"
  mt={{ base: "20", }}
  h={{ base: "70vh", md: "100vh" }}
  direction={{ base: "column", md: "row" }}
  align="center"
  justify="center"
  p={{ base: 0, md: 10 }}
 bgGradient= "linear-gradient(to top, #BDEEFE, #D7F3FE, #FFFFFF)"
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
          color="#003B5C"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          align="center"
        >
           Elevate Your Talent Acquisition:
        </MotionHeading>
        <MotionHeading
          fontFamily="ClashDisplay"
          fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          color="#F4A460"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Premier Workforce Solutions
        </MotionHeading>
        <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} maxW="xl" align="center">
          Discover top-tier workforce solutions designed to streamline your hiring process and connect you with exceptional talent. Our services offer customized recruitment strategies, candidate screening, and talent management to help you build a skilled and dynamic team that drives your organization’s success.
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
        src={workforceImage}
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
      mt={{ base: 10}}
      w="full"
      h={{ base: "80vh", sm: "90vh", md: "100vh" }} // Responsive height
      backgroundImage='url(https://img.freepik.com/premium-photo/group-engineers-gathered-take-team-photo_592794-426.jpg?w=740)'
      backgroundSize="cover"
      backgroundPosition="center center"
      backgroundAttachment="fixed"
      zIndex={1}
      objectFit="cover"
      position="relative"
      alignItems="center" // Center vertically
      justifyContent="center" // Center horizontally
    >
      <Stack
        spacing={{ base: 4, sm: 5, md: 6, lg: 8 }} // Responsive spacing
        align="center" // Center the text box horizontally
        textAlign="center" // Center text inside the box
        position="relative" // Ensure it's positioned correctly
        px={{ base: 4, sm: 6, md: 8, lg: 10 }} // Responsive padding
      >
        <MotionBox
          bg="#FAF9F6"
          p={{ base: 6, sm: 8, md: 10, lg: 12 }} // Responsive padding
          borderRadius="md"
          textAlign="left"
          color="black"
          w={{ base: "90%", sm: "80%", md: "70%" }} // Responsive width
          maxW="4xl" // Optional: ensure a maximum width
          minH={{ base: "auto", sm: "250px", md: "300px" }} // Responsive min height
          initial={{ opacity: 0, scale: 0.9 }} // Start from small and invisible
          animate={{ opacity: 1, scale: 1 }} // Scale up and fade in
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Stack spacing={4} align="center" textAlign="center">
            <MotionHeading
              fontFamily="ClashDisplay"
              fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }} // Responsive font size
              fontWeight="bold"
              color="#003B5C"
              initial={{ opacity: 0 }} // Start from invisible
              animate={{ opacity: 1 }} // Fade in
              transition={{ duration: 1, delay: 0.5 }} // Delay slightly after the box animation
            >
              Elevate Your Talent Acquisition:
            </MotionHeading>
            <MotionHeading
              fontFamily="ClashDisplay"
              fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }} // Responsive font size
              fontWeight="bold"
              color="#F4A460"
              initial={{ opacity: 0 }} // Start from invisible
              animate={{ opacity: 1 }} // Fade in
              transition={{ duration: 1, delay: 0.5 }} // Delay slightly after the box animation
            >
              Premier Workforce Solutions
            </MotionHeading>
            <Text mt={4} fontSize={{ base: "sm", sm: "md", md: "lg" }} color="black">
              Discover top-tier workforce solutions designed to streamline your hiring process and connect you with exceptional talent. Our services offer customized recruitment strategies, candidate screening, and talent management to help you build a skilled and dynamic team that drives your organization’s success.
            </Text>
          </Stack>
        </MotionBox>
      </Stack>
    </Flex> */}

      {/* Section 2 */}
      <Flex
        mt={{ base: 20, md: 20, lg: 32 }} // Adjusted margin-top for different screen sizes
        w={"full"}
        h={{ base: "40vh", md: "50vh", lg: "60vh" }} // Responsive height
        backgroundImage={
          'url(https://images.unsplash.com/photo-1686771416282-3888ddaf249b?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
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
          px={useBreakpointValue({ base: 4, md: 6, lg: 8 })}
          bgGradient={"linear(to-r, transparent, blackAlpha.600)"}
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
                      <Flex justifyContent="center" alignItems="center">
                <Heading
                  fontFamily="ClashDisplay"
                  fontSize={{ base: "xl", md: "2xl", lg: "4xl" }} // Responsive font size
                  fontWeight="bold"
                  p="2"
                >
                  <Text as="span" color="black">
                    Why Should You
                  </Text>
                  <Text as="span" color="blue.400">
                    {' '}Choose Us?
                  </Text>
                </Heading>
              </Flex>
              <Text mt={4} fontSize={{ base: "sm", md: "md", lg: "xl" }} color="gray.800">
                When you partner with us for your workforce needs, you benefit from our commitment to delivering tailored recruitment strategies that align with your organization’s unique requirements. We understand that each company is different, and we customize our approach to ensure we connect you with the talent that fits seamlessly into your company’s culture and job specifications. Choosing us means opting for a partner dedicated to not only meeting your immediate hiring needs but also contributing to your long-term success and growth.
              </Text>
            </Box>
          </Stack>
        </VStack>
      </Flex>

      {/* New Section - Employer Branding */}
      <Flex
        mt={{ base: 20, md: 20, lg: 32 }} // Responsive margin-top
        w="full"
        h={{ base: "40vh", md: "50vh", lg: "60vh" }}// Responsive height
        backgroundImage={
          'url(https://www.jobsoid.com/wp-content/uploads/2020/01/Employer-Branding.svg)'
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
          px={useBreakpointValue({ base: 4,  md: 6, lg: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Stack maxW={{ base: "full", md: "2xl" }}
          spacing={4}
          position="absolute"
          right={{ base: 4, md: 6, lg: 8 }} // Responsive positioning
          p={{ base: 4, md: 6 }}
          >
            <Box
              bg="rgba(245, 245, 245, 0.9)"
              p={{ base: 4, md: 6, lg: 10 }} 
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
                    Strengthen Your
                  </Text>
                  <Text as="span" color="blue.400">
                    {' '}Employer Brand
                  </Text>
                </Heading>
              </Flex>
              <Text mt={4} fontSize={{ base: "sm", md: "md", lg: "xl" }} color="gray.800">
                Build a compelling employer brand that attracts top talent and fosters a positive work environment. Our strategies help you communicate your company’s values, culture, and unique benefits to potential candidates, enhancing your reputation as an employer of choice.
              </Text>
            </Box>
          </Stack>
        </VStack>
      </Flex>

    
      {/*EmployerBranding */}
      <Flex
        mt={{ base: 20, md: 20, lg: 32 }} // Responsive margin-top
        w="full"
        h={{ base: "40vh", md: "50vh", lg: "60vh" }}// Responsive height
        backgroundImage={
          'url(https://images.unsplash.com/photo-1686771416282-3888ddaf249b?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
        }
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
        backgroundAttachment={"fixed"} // This makes the background image stay in place
        zIndex={1}
        position="relative"
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4,  md: 6, lg: 8 })}
          bgGradient={"linear(to-r, transparent, blackAlpha.600)"}
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
              <Flex justifyContent="center" alignItems="center">
                <Heading
                  fontFamily="ClashDisplay"
                  fontSize={{ base: "xl", md: "2xl", lg: "4xl" }} // Responsive font size
                  fontWeight="bold"
                  p="2"
                >
                  <Text as="span" color="black">
                   Employer
                  </Text>
                  <Text as="span" color="blue.400">
                    {' '}Branding
                  </Text>
                </Heading>
              </Flex>
              <Text mt={4}  fontSize={{ base: "sm", md: "md", lg: "xl" }}  color="gray.800">
              Strengthen your company's reputation and attract top talent with a compelling employer branding strategy. Our page highlights the distinctive qualities that make your workplace exceptional, including your organizational culture, core values, and the unique opportunities you offer. Emphasize your commitment to employee growth, innovation, and a supportive work environment. Engage potential candidates by showcasing the benefits of working with you and how your company stands out in the competitive job market.
              </Text>
            </Box>
          </Stack>
        </VStack>
      </Flex>
       


      {/* Section 3 */}
      <Section3 />

      {/* Section 4 */}
      <Section4 />
      </Flex>
    </>
  );
}
