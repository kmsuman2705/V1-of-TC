import { Box, Heading, Text, Button, VStack, HStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import hVideo from "../../assets/videos/Merged.mp4"; // Local video

const MotionBox = motion(Box);

const HeroPage = () => {
    return (
        <Box
            position="relative"
            overflow="hidden"
            py={{ base: 20, md: 20 }}  // Adjusted for mobile
            px={{ base: 4, md: 10 }}   // Adjusted padding for mobile
            color="white"
            mt={[10, 20, 20]}
            mb={[80, 20, 10]}
        >
            {/* Background Video */}
            <MotionBox
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
                zIndex={-2}
                opacity={1}
                transition="opacity 1s ease-in-out"  // Smooth fade-in effect
            >
                <video
                    src={hVideo}
                    muted
                    loop // Ensures the video loops while it's playing
                    autoPlay
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'opacity 2s ease-in-out', // Ensures smooth transition
                    }}
                />
            </MotionBox>

            <VStack spacing={{ base: 6, md: 10 }} textAlign="center">
                {/* Hero Text */}
                <Heading
                    as="h1"
                    size={{ base: '2xl', md: '3xl' }}  // Adjusted for mobile
                    lineHeight="shorter"
                    bgGradient="linear(to-r, teal.300, blue.500)"
                    bgClip="text"
                    fontWeight="bold"
                    letterSpacing="wide"
                >
                    CampusToCubicle:
                    <Text color="gray.100">Partnering for Future Success</Text>
                </Heading>
                <Text fontSize={{ base: 'md', md: 'xl' }} maxW="800px" color="gray.200">
                    TalentConnect revolutionizes the campus-to-cubicle journey for colleges and companies. Our tech platform integrates company needs with college engagement, ensuring efficient recruitment and personalized campaigns. We handle the entire hiring process and provide on-demand training for new hires, bridging the gap between campus and career.
                </Text>

                {/* Call to Action Buttons */}
                <HStack
                    spacing={{ base: 4, md: 8 }}  // Adjusted for mobile
                    flexDirection={{ base: 'column', md: 'row' }}  // Stack buttons vertically on mobile
                >
                    <Button
                        colorScheme="transparent"
                        border="2px solid"
                        borderColor={"blue.300"}
                        _hover={{ backgroundColor: "blue.300" }}
                        size={{ base: 'md', md: 'lg' }}  // Adjusted for mobile
                        rightIcon={<FaArrowRight />}
                        as={motion.button}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get Started
                    </Button>
                </HStack>
            </VStack>
        </Box>
    );
};

export default HeroPage;
