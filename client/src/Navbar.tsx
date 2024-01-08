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
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const Navbar: React.FC = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    const [showKey, setShowKey] = useState(false);
    const [key, setKey] = useState('');

    const handleKeyVisibility = () => {
        setShowKey(!showKey);
    };

    const handleSubmit = () => {
        console.log('Submitted API Key:', key);
    };

    return (
        <Flex
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

            <Box>
                <Flex align="center">
                    <InputGroup width="20rem">

                        <InputLeftElement >
                            <IconButton
                                h="1.75rem"
                                size="sm"
                                onClick={handleKeyVisibility}
                                aria-label={showKey ? 'Hide password' : 'Show password'}
                                icon={showKey ? <ViewOffIcon /> : <ViewIcon />}
                            />
                        </InputLeftElement>
                        <Input
                            type={showKey ? 'text' : 'password'}
                            placeholder="Enter an OpenAI API Key"
                            value={key}
                            onChange={(e) => setKey(e.target.value)}
                            _placeholder={{ opacity: 1, color: 'gray.500' }}
                        />
                        <InputRightElement width="4.5rem">
                            <Button ml="2" onClick={handleSubmit}>
                                Submit
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </Flex>
            </Box>

            <Spacer />

            <Box>
                <IconButton
                    aria-label="Toggle dark mode"
                    icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    onClick={toggleColorMode}
                />
            </Box>
        </Flex>
    );
};

export default Navbar;
