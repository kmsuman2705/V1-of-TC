import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
  AspectRatio,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion"; // Import framer-motion for animations
import dVideo from '../../assets/videos/d.mp4';


export default function CampusToCubicle() {
  const handleGetStartedClick = () => {
    setTimeout(() => {
      const connectusSection = document.getElementById("connectus");
      if (connectusSection) {
        connectusSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 10);
  };

    // Framer-motion variants for text animations
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  // Determines video position: between paragraphs for mobile, to the side for larger screens
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
           <Heading as={motion.div} variants={textVariants} initial="hidden" whileInView="visible" fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
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
              Campus to Cubicle
            </Text>
            <br />
            <Text color={"blue.400"} as={"span"}>
              Transforming Recruitment
            </Text>
          </Heading>
          <Text as={motion.div}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            fontSize={{ base: "md", lg: "lg" }} color={"gray.600"}>
            TalentConnect, the trailblazing tech startup redefining the
            campus-to-cubicle journey. We transform campus hiring by integrating
            company requirements into our tech platform to engage with colleges.
          </Text>

          {/* Video is conditionally placed between paragraphs on mobile */}
          {isMobile && (
            <AspectRatio ratio={16 / 9} width="100%" maxW="100%">
              <video
                autoPlay
                loop
                muted
                playsInline
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                src={dVideo} // Replace with the correct video path
                alt="Campus to Cubicle Video"
              />
            </AspectRatio>
          )}

          <Text as={motion.div}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
          fontSize={{ base: "md", lg: "lg" }} color={"gray.600"}>
            Talent Connect takes full responsibility for conducting the
            recruitment process on behalf of our clients. We provide on-demand
            training to freshly hired candidates, ensuring a seamless transition
            from campus to cubicle.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              as={RouterLink}
              to="/campus-to-cubicle#connectus"
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
              onClick={handleGetStartedClick}
            >
              Get Started
            </Button>
            <Button
              as={RouterLink}
              to="/campus-to-cubicle"
              rounded={"full"}
              _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
            >
              Learn More
            </Button>
          </Stack>
        </Stack>
      </Flex>

      {/* Flex container for the video on larger screens */}
      {!isMobile && (
        <Flex flex={1} align={"center"} justifyContent={"center"} p={10}>
          <AspectRatio ratio={12 / 9} width="100%" maxW="100%">
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              src={dVideo} // Replace with the correct video path
              alt="Campus to Cubicle Video"
            />
          </AspectRatio>
        </Flex>
      )}
    </Stack>
  );
}
