import { Box, Heading, Text, Button, VStack, HStack, useBreakpointValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import hVideo from "../../assets/videos/hVideo.mp4"; // Local video

const MotionBox = motion(Box);

const HeroPage = () => {
    const paddingX = useBreakpointValue({ base: 4, md: 8, lg: 16, xl: 24, "2xl": 32 });
    const buttonSize = useBreakpointValue({ base: 'md', md: 'lg', lg: 'lg', xl: 'lg' });

    return (
        <Box
            position="relative"
            overflow="hidden"
            py={{ base: 20, md: 24, lg: 36, xl: 30 }}  // Increased padding for larger screens
            px={paddingX}  // Adjusted padding based on screen size
            color="white"
            pt={{ base: 24, md: 32, lg: 40, xl: 28 }}
            pb={{ base: 96, md: 32, lg: 64, xl: 40 }}  // Responsive bottom padding
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
                    loop
                    autoPlay
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',  // Ensures the video focuses on the center
                        transition: 'opacity 2s ease-in-out',  // Smooth transition
                    }}
                />
            </MotionBox>

            <VStack spacing={{ base: 6, md: 10 }} textAlign="center">
                {/* Hero Text */}
                <Heading
                    as="h1"
                    size= {{ base: "2xl", md: "2xl", lg: "3xl", xl: "3xl" }}  // Adjusted for larger screens
                    lineHeight={{ base: "short", lg: "shorter" }}
                    bgGradient="linear(to-r, yellow.200, yellow.500)"
                    bgClip="text"
                    fontWeight="bold"
                    letterSpacing="wide"
                >
                    CampusToCubicle:
                    <Text color="blue.200">Partnering for Future Success</Text>
                </Heading>
                <Text
                    fontSize={{ base: "md", md: "lg", lg: "xl", xl: "xl" }}  // Responsive text sizes
                    maxW="800px"
                    color="gray.100"
                >
                    TalentConnect bridges the campus-to-cubicle gap by aligning company needs with college engagement for efficient recruitment and tailored training for new hires.
                </Text>

                {/* Call to Action Buttons */}
                <HStack
                    spacing={{ base: 4, md: 8 }}
                    flexDirection={{ base: 'column', md: 'row' }}  // Stack buttons vertically on mobile
                >
                    <Button
                        colorScheme="transparent"
                        border="2px solid"
                        borderColor={"yellow.300"}
                        _hover={{ backgroundColor: "yellow.300", color:'black'}}
                        size={buttonSize}  // Responsive button sizes
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
