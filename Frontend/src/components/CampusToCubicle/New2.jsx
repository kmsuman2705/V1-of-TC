import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Motion component for animation
const MotionBox = motion(Box);

function OnlineLearningPage() {
    return (
        <Flex
            justifyContent="center"
            alignItems="center"
            minH="100vh"
            bg="white"
            borderRadius="20px"
            mt={[-80, 10, -10]}
            fontFamily="Arial, sans-serif"
            overflow={'hidden'}
            px={{ base: 4, md: 10 }} // Added padding for better spacing on mobile
        >
            <Flex
                width="100%"
                maxW="100vw"
                direction={{ base: 'column', md: 'row' }}
                height={{ base: 'auto', md: '600px' }}
                justifyContent="space-between"
                alignItems="center"
                bg="transparent"
                borderRadius="md"
                overflow="hidden"
                gap={{ base: 4, md: 12 }}  // Adjusted gap for mobile
            >
                {/* Left Section with Image */}
                <MotionBox
                    width={{ base: '100%', md: '50%' }}
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    p={{ base: 6, md: 10 }} // Adjusted padding for responsiveness
                >
                    <Image
                        src="https://images.unsplash.com/photo-1543505298-b8be9b52a21a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fENvbGxlZ2UlMjBidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
                        alt="Online learning image"
                        objectFit="cover"
                        w="100%"
                        height={{ base: '250px', md: '400px' }}  // Adjusted height for mobile
                        maxH="400px"  // Ensure max height fits well
                        borderRadius={20}
                    />
                </MotionBox>

                {/* Right Section with Content */}
                <MotionBox
                    p={{ base: 4, md: 6 }}  // Adjusted padding for mobile
                    width={{ base: '100%', md: '50%' }}
                    bg="white"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Heading as="h2" fontSize={{ base: 'xl', md: '3xl', lg: '40px' }} mb={4} color="grey">
                        <Text color="blue.500">For Colleges :</Text>
                        Why Collaborate with TalentConnect?
                    </Heading>
                    <Text fontSize={{ base: 'sm', md: 'lg' }} mb={4}>
                        In Talentconnect, we redefine the journey from academia to professional excellence. Our innovative approach connects bright young talents from colleges and universities with companies, creating synergies that shape future careers. We believe in fostering collaboration among talent, educational institutions, and organizations to cultivate a thriving workforce.
                    </Text>
                    <Link to="/college-form">
                    <Button
                        mt={2}  // Adjusted margin-top for mobile
                        bg="blue.400"
                        color="white"
                        _hover={{ bg: 'blue.300' }}
                        borderRadius="full"
                        px={{ base: 3, md: 4 }}  // Adjusted padding for mobile
                        py={2}  // Adjusted padding for mobile
                    >
                        LEARN MORE
                    </Button>
                    </Link>
                </MotionBox>
            </Flex>
        </Flex>
    );
}

export default OnlineLearningPage;
