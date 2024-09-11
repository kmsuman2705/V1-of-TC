import {  useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Text,
  Stack,
  useColorModeValue,
  keyframes,
} from "@chakra-ui/react";
import {
  FcBusiness,
  FcGraduationCap,
  FcCollaboration,
  FcAssistant,
  FcReading,
  FcBriefcase,
  FcGlobe,
} from "react-icons/fc";
import { HashLink as Link } from "react-router-hash-link";

// Keyframes for rotating the icon
const rotate = keyframes`
  0% { transform: rotate(0deg); border-color: #63b3ed; }
  25% { border-color: #f56565; }
  50% { border-color: #48bb78; }
  75% { border-color: #d69e2e; }
  100% { transform: rotate(360deg); border-color: #63b3ed; }
`;

const Card = ({ heading, description, icon, link }) => {
   const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      as={Link} // This makes the entire card clickable
      to={link}
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow="lg"
      transition="transform 0.3s, box-shadow 0.3s"
      _hover={{ transform: "scale(1.05)", boxShadow: "2xl" }} // Only scale up the card
      textDecoration="none" // Ensure link style is clean
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      <Flex direction="column" justify="space-between" h="100%">
        <Stack align={"center"} spacing={2}>
                  <Flex
          w={20} h={20}
          align="center" justify="center"
          mb={4}
          borderRadius="full"
          borderWidth="4px"
          borderColor={isHovered ? "blue.400" : "transparent"}
          animation={isHovered ? `${rotate} 4s infinite linear` : "none"} // Rotating effect
        >
          <Flex
            w={16} h={16}
            align="center" justify="center"
            color={"white"}
            rounded={"full"}
            bg={"blue.400"}
          >
            {icon}
          </Flex>
        </Flex>
          <Box textAlign="center">
            <Heading size="md" color="#7877e6ff">
              {heading}
            </Heading>
            <Text mt={1} fontSize={"sm"} color={"gray.600"}>
              {description}
            </Text>
          </Box>
        </Stack>
        <Box textAlign="center" mt="auto">
          <Button 
            as="div"
            variant={"link"}
            colorScheme={"blue"}
            size={"sm"}
          >
            Learn more
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default function OurServices() {
  return (
    <Box id="our-services" p={4} bg="#ffffff" mt={10}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading
          fontSize={{ base: "2xl", sm: "4xl" }}
          fontWeight={"bold"}
          color="blue.400"
        >
          Our Services
        </Heading>
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={"OnCampus"}
            icon={<Icon as={FcGraduationCap} w={10} h={10} />}
            description={
              "Our OnCampus service brings career opportunities directly to students, connecting them with top employers through campus recruitment drives and job events."
            }
            link="/oncampus"
          />
          <Card
            heading={"OffCampus"}
            icon={<Icon as={FcGlobe} w={10} h={10} />}
            description={
              "TalentConnect's Off Campus service offers a platform for recent graduates to explore diverse career opportunities."
            }
            link="/offcampus"
          />
          <Card
            heading={"Workforce Provider"}
            icon={<Icon as={FcBriefcase} w={10} h={10} />}
            description={
              "Our Workforce Provider service offers tailored staffing solutions to connect employers with top talent."
            }
            link="/workforce"
          />
          <Card
            heading={"Seminar"}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={
              "Our seminars provide valuable insights on various career-related topics, led by industry experts."
            }
            link="/seminar"
          />
          <Card
            heading={"Counselling"}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={
              "Personalized career counseling services to help you navigate your career path."
            }
            link="/counselling"
          />
          <Card
            heading={"CareerCraft"}
            icon={<Icon as={FcReading} w={10} h={10} />}
            description={
              "CareerCraft is focused on skill development and career readiness through workshops and mentorship."
            }
            link="/careercraft"
          />
        </Flex>
      </Container>
    </Box>
  );
}
