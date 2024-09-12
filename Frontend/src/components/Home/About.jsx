import {
  Flex,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
  Box,
} from "@chakra-ui/react";
import { motion } from "framer-motion"; 
import hVideo from "../../assets/videos/tc.mp4";
//import posterImage from "../../assets/images/cc.png"; // Add your poster image here

export default function About() {
  // Framer-motion variants for text animations
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex flex={1} align={"center"} justify={"center"}>
        <Box
          w={{ base: "90%", md: "80%" }} // Wider box on mobile and desktop
          maxW="800px" // Max width for larger screens         
          borderRadius={"lg"}
          maxHeight="60vh" // Increase video height
        >
          <Box
            w="100%"
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
              borderRadius: "lg",
            }}
          >
            <video
              controls
              autoPlay
              loop
              muted
              playsInline
             // poster={posterImage} // Show poster image before the video loads
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
        </Box>
      </Flex>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading
            as={motion.div}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          >
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.400",
                zIndex: -1,
              }}
            >
              About Us
            </Text>
            <br />
            <Text color={"blue.400"} as={"span"}>
              At TalentConnect,
            </Text>
          </Heading>
          <Text
            as={motion.div}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            fontSize={{ base: "md", lg: "lg" }}
            color={"black"}
          >
            We are dedicated to bridging the gap between talented individuals and the dynamic workforce.
          </Text>
          <Text
            as={motion.div}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            fontSize={{ base: "md", lg: "lg" }}
            color={"black"}
          >
            Our mission is to provide top-notch career services that empower individuals to achieve their professional aspirations while supporting organizations in building their dream teams.
          </Text>
          <Text
            as={motion.div}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            fontSize={{ base: "md", lg: "lg" }}
            color={"black"}
          >
            With a commitment to excellence, innovation, and integrity, TalentConnect is your trusted partner in career success.
          </Text>
        </Stack>
      </Flex>
    </Stack>
  );
}
