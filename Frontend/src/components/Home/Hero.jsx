import React, { useState, useEffect } from "react";
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";

// Array of video URLs
const videos = [
  // "https://static.videezy.com/system/resources/previews/000/035/082/original/MT053.mp4",
  "https://static.vecteezy.com/system/resources/previews/043/623/224/mp4/two-successful-young-businesswoman-shaking-hands-business-meeting-in-office-job-interview-business-career-placement-concept-hr-holding-job-contract-hiring-female-applicant-human-resources-concept-free-video.mp4",
];

export default function Hero() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Change video at intervals
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(intervalId); // Clean up on unmount
  }, []);

  return (
    <Flex
      w={"full"}
      h={"100vh"}
      position={"relative"}
      zIndex={1}
      overflow={"hidden"}
    >
      {/* Video Background */}
      <video
        key={currentVideoIndex}
        autoPlay
        loop
        muted
        playsInline
        src={videos[currentVideoIndex]}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
          transition: "opacity 1s ease-in-out",
        }}
      />

      {/* Gradient Overlay */}
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-l, rgba(0, 0, 0, 0.6), transparent)"}
      >
        <Stack
          maxW={{ base: "90%", md: "2xl" }}
          align={"flex-start"}
          spacing={6}
          position={{ base: "relative", md: "absolute" }}
          left={{ base: "auto", md: "5%" }} // Shift the text container to the left on larger screens
          as={motion.div}
          initial={{ opacity: 0, x: -100 }}  // Start from left (x: -100)
          animate={{ opacity: 1, x: 0 }}     // Animate to center (x: 0)
          transition={{ duration: 5 }}        // Smooth transition over 5 seconds
        >
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "4xl", md: "7xl" })}
            as={motion.div}
            initial={{ x: "-100vw" }}          // Start off-screen to the left
            animate={{ x: 0 }}                 // Move to original position
            transition={{ type: "tween", duration: 5, delay: 0.9 }} // Smooth transition
          >
            Welcome to TalentConnect!
          </Text>
          <Text
            color={"white"}
            fontSize={useBreakpointValue({ base: "md", md: "lg" })}
            as={motion.div}
            initial={{ x: "-100vw" }}          // Start off-screen to the left
            animate={{ x: 0 }}                 // Move to original position
            transition={{ type: "tween", duration: 1, delay: 0.2 }} // Delayed transition
          >
            Your premier destination for comprehensive career solutions. Whether
            you're a job seeker, an employer, or an academic institution, we
            connect talent with opportunity.
          </Text>
          <Stack direction={"row"} spacing={4}>
            <Link to="/#our-services">
              <Button
                as={motion.button}
                bgGradient="linear(to-r, teal.400, blue.500)"
                rounded={"full"}
                color={"white"}
                _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                Learn More
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                as={motion.button}
                bg={"whiteAlpha.300"}
                rounded={"full"}
                color={"white"}
                _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                Contact Us
              </Button>
            </Link>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
