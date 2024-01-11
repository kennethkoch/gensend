import React, { useState } from 'react';
import {
    Box,
    Flex,
    Heading,
    Spacer,
    Button,
    useColorMode,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    IconButton,
    Text,
    ButtonGroup,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const Navbar: React.FC = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    const [showKey, setShowKey] = useState(false);
    const [key, setKey] = useState('');

    const [remainingUses, setRemainingUses] = useState(3);
    const [loggedIn, setLoggedIn] = useState(false);
    const [currentUserName, setCurrentUserName] = useState('test')




    return (
        <Flex
            alignItems='center'
            width='2xl'
            as="nav"
            align="center"
            justify="space-between"
            padding="1.5rem"
            bg={colorMode === 'light' ? 'gray.200' : 'gray.800'}
        >
            <Flex align="center" mr={5}>
                <Heading color="teal.300">GenSend</Heading>
            </Flex>

            <Spacer />
            {loggedIn ? (
                <>
                    <Text fontSize='lg'>{`Welcome back, ${currentUserName}!`}</Text>
                    <Spacer />
                    <Button>
                        My Account
                    </Button>
                </>
            ) : (
                <>


                    <Text mr={3} color='gray' fontSize='lg'>{`${remainingUses} free uses remaining`}</Text>
                    <Spacer />
                    <ButtonGroup>

                        <Button colorScheme="teal" mr={2}>
                            Login
                        </Button>
                        <Button colorScheme="teal" mr={2}>
                            Sign Up
                        </Button>

                    </ButtonGroup>

                </>
            )}

            <Spacer />

            <Box display='flex'>
                <IconButton
                    aria-label="Toggle dark mode"
                    icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    onClick={toggleColorMode}
                />
            </Box>
        </Flex >
    );
};

export default Navbar;
