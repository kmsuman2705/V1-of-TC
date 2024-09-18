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
            my={[-60, 10, -20]}
            p={{ base: 6, md: 12 }}
            fontFamily="Arial, sans-serif"
            overflow={'hidden'}
            flexDirection={{ base: 'column', md: 'row' }} // Column for mobile
        >
            {/* Left Section with Content */}
            <MotionBox
                p={{ base: 4, md: 8 }}
                width={{ base: '100%', md: '50%' }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                textAlign={{ base: 'center', md: 'left' }}
                mb={{ base: 8, md: 0 }} // Margin bottom for mobile
            >
                <Heading as="h2" fontSize={{ base: '3xl', md: '4xl' }} mb={4} color="gray.600">
                    <Text as="span" color="blue.500" fontSize={{ base: '2xl', md: '4xl' }}>
                        For Companies:
                    </Text> Why Partner with TalentConnect?
                </Heading>
                <Text fontSize={{ base: 'sm', md: 'lg' }} mb={6} color="gray.600">
                    At TalentConnect, we're revolutionizing the way companies discover fresh talent. We have partnerships with various colleges and universities. Our platform is a gateway to a vibrant community of skilled graduates from there, each equipped with passion and proficiency in their desired fields. Whether you seek innovative thinkers, analytical minds, or creative visionaries, TalentConnect offers a diverse pool of candidates poised to make an impact.
                </Text>
                <Link to="/company-form">
                <Button
                    bg="blue.500"
                    color="white"
                    _hover={{ bg: 'blue.400', transform: 'translateY(-2px)', boxShadow: 'lg' }}
                    borderRadius="full"
                    px={6}
                    py={4}
                    shadow="md"
                    transition="all 0.3s ease"
                >
                    LEARN MORE
                </Button>
                </Link>
            </MotionBox>

            {/* Right Section with Image */}
            <MotionBox
                width={{ base: '100%', md: '50%' }}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                display="flex"
                justifyContent="center"
                alignItems="center"
                overflow="hidden"
                p={10}
            >
                <Image
                    src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fENvbXBhbnklMjBidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
                    alt="Online learning image"
                    objectFit="cover"
                    w="100%"
                    h={{ base: '250px', md: 'auto' }}
                    maxH={{ base: '300px', md: '600px' }} // Adjust max height for mobile
                    borderRadius={20}
                />
            </MotionBox>
        </Flex>
    );
}

export default OnlineLearningPage;
