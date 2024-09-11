import { Box, Heading, Text, Button, Flex, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion'; // For animations

const HeroPage = () => {
    return (
        <Box
            as={motion.div}
            bg="white"
            minH="100vh"
            position="relative"
            overflow="hidden"
        >
            {/* Background Animations */}
            <Box
                position="absolute"
                top="-100px"
                left="-100px"
                w={{ base: '150px', md: '400px' }}  // Adjusted for mobile
                h={{ base: '150px', md: '400px' }}  // Adjusted for mobile
                bg="teal.300"
                borderRadius="50%"
                as={motion.div}
                animate={{
                    scale: [1, 1.4, 1],  // Pop-in and Pop-out effect
                    opacity: [0.4, 0.8, 0.4],  // Adjust the transparency during animation
                }}
                transition={{
                    duration: 2.5,  // Speed up the animation to emphasize the pop effect
                    ease: 'easeInOut',
                    repeat: Infinity,
                }}
                zIndex={0}
            />

            <Box
                position="absolute"
                bottom="-150px"
                right="-150px"
                w={{ base: '150px', md: '300px' }}  // Adjusted for mobile
                h={{ base: '150px', md: '300px' }}  // Adjusted for mobile
                bg="blue.300"
                borderRadius="50%"
                as={motion.div}
                animate={{
                    scale: [1, 1.4, 1],  // Pop-in and Pop-out effect
                    opacity: [0.5, 1, 0.5],  // Adjust the transparency during animation
                }}
                transition={{
                    duration: 3,  // Different duration for variation
                    ease: 'easeInOut',
                    repeat: Infinity,
                }}
                zIndex={0}
            />

            <Flex
                direction={{ base: 'column', md: 'row' }}
                align="center"
                justify="center"
                w="100%"
                maxW="1200px"
                mt={{ base: 16, md: 16 }}
                px={6}
                position="relative"
                zIndex={2} // Keeps content above the animated backgrounds
                spacing={{ base: 8, md: 0 }} // Adjust spacing for mobile
            >
                {/* Text Section */}
                <Box
                    textAlign={{ base: 'center', md: 'left' }}
                    maxW={{ base: '90%', md: '600px' }} // Adjusted for mobile
                    mb={{ base: 8, md: 0 }}  // Adjust margin for mobile view
                >
                    <Heading
                        as={motion.h1}
                        size={{ base: 'xl', md: '2xl' }} // Adjusted size for mobile
                        mb={4}
                        initial={{ y: -50 }}
                        animate={{ y: 0 }}
                        transition={{ type: 'spring', stiffness: 100 }}
                    >
                        <Text color="blue.500">CampusToCubicle:</Text>
                        Partnering for Future Success
                    </Heading>
                                    {/* Image / Vector Section */}
                <Box
                    display={{ base: 'block', md: 'none' }} // Show image on mobile
                    mt={8}  // Margin to separate from heading
                    mb={8}  // Margin to separate from text
                    textAlign="center"
                    position="relative"
                >
                    <Image
                        src="https://img.freepik.com/free-vector/virtual-graduation-ceremony_52683-39852.jpg?ga=GA1.2.733541098.1725531636&semt=ais_hybrid" // Replace with your vector URL
                        alt="Hero Vector"
                        w="80%" // Adjust size for mobile
                        maxW="300px" // Max width for mobile
                        h="auto" // Maintain aspect ratio
                        borderRadius={40}
                        mx="auto" // Center horizontally on mobile
                    />
                </Box>
                    <Text
                        as={motion.p}
                        fontSize={{ base: 'md', md: 'lg' }}  // Adjusted for mobile
                        mb={6}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        TalentConnect revolutionizes the campus-to-cubicle journey for colleges and companies. Our tech platform integrates company needs with college engagement, ensuring efficient recruitment and personalized campaigns.
                    </Text>
                    <Button
                        as={motion.button}
                        size="lg"
                        colorScheme="blue"
                        borderRadius={40}
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200 }}
                    >
                        Get Started
                    </Button>
                </Box>



                <Box
                    display={{ base: 'none', md: 'block' }} // Hide image on mobile
                    as={motion.div}
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.7 }}
                    position="relative"
                    mt={8}
                >
                    {/* Animated Background for the Vector */}
                    <Box
                        display={{ base: 'none', md: 'block' }} // Hide this box on mobile
                        position="absolute"
                        top="-80px"
                        left="80px"
                        w={{ base: '150px', md: '200px' }}  // Adjusted for mobile
                        h={{ base: '150px', md: '200px' }}  // Adjusted for mobile
                        bg="blue.100"
                        borderRadius="50%"
                        zIndex={-1}
                        as={motion.div}
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 180, 360],
                        }}
                        transition={{
                            duration: 6,
                            ease: 'easeInOut',
                            repeat: Infinity,
                        }}
                    />
                    <Image
                        src="https://img.freepik.com/free-vector/virtual-graduation-ceremony_52683-39852.jpg?ga=GA1.2.733541098.1725531636&semt=ais_hybrid" // Replace with your vector URL
                        alt="Hero Vector"
                        w={{ base: '200px', md: '490px' }} // Adjusted for mobile
                        h="auto" // Maintain aspect ratio
                        zIndex={1}
                        marginLeft={{ base: 0, md: 40 }}  // Centered on mobile
                        mt={{ base: 8, md: 0 }} // Adjust margin for mobile
                        borderRadius={40}
                    />
                </Box>
            </Flex>
        </Box>
    );
};

export default HeroPage;
