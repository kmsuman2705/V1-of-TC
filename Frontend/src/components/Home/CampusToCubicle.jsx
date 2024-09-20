import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
  AspectRatio,
  Image,
  Box,
  keyframes,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import dimg from "../../assets/images/cd.jpg";

// Define the keyframes for the rectangular moving animation
const movingAnimation = keyframes`
  0% { transform: translateX(0) translateY(0); background-color: rgba(255, 0, 0, 0.3); }
  50% { transform: translateX(10%) translateY(10%); background-color: rgba(0, 255, 0, 0.3); }
  100% { transform: translateX(0) translateY(0); background-color: rgba(0, 0, 255, 0.3); }
`;

export default function CampusToCubicle() {
  const handleGetStartedClick = () => {
    setTimeout(() => {
      const connectusSection = document.getElementById("connectus");
      if (connectusSection) {
        connectusSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 10);
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const isMobile = useBreakpointValue({ base: true, md: false });

  // Responsive sizes
  const buttonSizes = useBreakpointValue({ base: "md", sm: "lg", md: "lg", lg: "lg", xl: "xl", "2xl": "xl", "3xl": "xl" });
  const paddingX = useBreakpointValue({ base: 4, sm: 6, md: 8, lg: 10, xl: 12, "2xl": 14, "3xl": "xl" });
  const paddingY = useBreakpointValue({ base: 4, sm: 6, md: 8, lg: 10, xl: 12, "2xl": 14, "3xl": "xl" });
  const imageSize = useBreakpointValue({ base: "90%", sm: "80%", md: "70%", lg: "60%", xl: "75%", "2xl": "40%", "3xl": "50%" });

  return (
    <Stack
      minH={"100vh"}
      direction={{ base: "column", md: "row" }}
      spacing={4}
      maxW={{ base: "100%", lg: "1200px", xl: "1440px", "2xl": "2560px" }}
      mx={"auto"}
      px={paddingX}
      py={paddingY}
      position={"relative"}
      overflow={"hidden"}
      bgColor={"#BEE3F8"}
      zIndex={1000}
    >
      <Flex p={8} flex={1} align={"center"} justify={"center"} position={"relative"}>
        <Stack spacing={6} w={"full"} maxW={{ base: "320px", sm: "375px", md: "425px", lg: "768px", xl: "1024px", "2xl": "1440px" }}>
          <Heading
            as={motion.div}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            fontSize={{
              base: "2xl",
              sm: "3xl",
              md: "4xl",
              lg: "4xl",
              xl: "4xl",
              "2xl": "4xl",
              "3xl": "xl"
            }}
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
              Campus to Cubicle
            </Text>
            <br />
            <Text color={"blue.400"} as={"span"}>
              Transforming Recruitment
            </Text>
          </Heading>

          <Text
            as={motion.div}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            fontSize={{
              base: "sm",
              sm: "md",
              md: "lg",
              lg: "lg",
              xl: "xl",
              "2xl": "2xl",
            }}
            color={"#000000"}
          >
            TalentConnect, the trailblazing tech startup redefining the campus-to-cubicle journey. We transform campus hiring by integrating company requirements into our tech platform to engage with colleges.
          </Text>

          {/* Image for Mobile */}
          {isMobile && (
            <Box position="relative" width={imageSize} maxW="100%">
              <Box
                position="absolute"
                top={-10}
                left={-10}
                width="calc(100% + 20px)"
                height="calc(100% + 20px)"
                borderRadius="lg"
                zIndex={-1}
                animation={`${movingAnimation} 8s infinite ease-in-out`}
              />
              <AspectRatio ratio={9 / 9} width="100%">
                <Image
                  src={dimg}
                  alt="Campus to Cubicle"
                  objectFit="cover"
                />
              </AspectRatio>
            </Box>
          )}

          <Text
            as={motion.div}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            fontSize={{
              base: "sm",
              sm: "md",
              md: "lg",
              lg: "lg",
              xl: "xl",
              "2xl": "2xl",
            }}
            color={"#000000"}
          >
            Talent Connect takes full responsibility for conducting the recruitment process on behalf of our clients. We provide on-demand training to freshly hired candidates, ensuring a seamless transition from campus to cubicle.
          </Text>

          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              as={RouterLink}
              to="/campus-to-cubicle#connectus"
              rounded={"full"}
              color={"teal"}
              fontSize={buttonSizes}
              px={6}
              py={4}
              _hover={{ transform: "scale(1.05)", boxShadow: "lg", bg: "blue.300", color: "white" }}
              onClick={handleGetStartedClick}
            >
              Get Started
            </Button>
            <Button
              as={RouterLink}
              to="/campus-to-cubicle"
              rounded={"full"}
              color={"teal"}
              fontSize={buttonSizes}
              px={6}
              py={4}
              _hover={{ transform: "scale(1.05)", boxShadow: "lg", bg: "blue.300", color: "white" }}
            >
              Learn More
            </Button>
          </Stack>
        </Stack>
      </Flex>

      {/* Image for Desktop and Larger Screens */}
      {!isMobile && (
        <Flex flex={1} align={"center"} justifyContent={"center"} p={10} position={"relative"} >
          <Box position="relative" width={imageSize} maxW="100%" >
            <Box
            
              position="absolute"
              top={-10}
              left={-10}
              width="calc(100% + 20px)"
              height="calc(100% + 20px)"
              borderRadius="lg"
              zIndex={-1}
              animation={`${movingAnimation} 8s infinite ease-in-out`}
            />
            <AspectRatio ratio={ 3/1.9} width="100%">
              <Image
                src={dimg}
                
                alt="Campus to Cubicle"
                objectFit="cover"
               
              />
            </AspectRatio>
          </Box>
        </Flex>
      )}
    </Stack>
  );
}
