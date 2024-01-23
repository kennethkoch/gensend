import React, { useState } from 'react';
import {
    Box,
    Flex,
    Heading,
    Spacer,
    Button,
    useColorMode,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    Text,
    ButtonGroup,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons';

const Navbar: React.FC = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const [loggedIn, setLoggedIn] = useState(false);
    const [currentUserName, setCurrentUserName] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogin = () => {
        setLoggedIn(true);
        setCurrentUserName('test user')
    }

    const handleAccountToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const handleLogout = () => {
        setLoggedIn(false);
    }

    return (
        <Flex
            alignItems='center'
            width='100%'
            top={0}
            p={4}
            zIndex={100}
            as="nav"
            position="sticky"
            mb={10}
            bg={colorMode === 'light' ? 'gray.300' : 'black'}
        >
            <Flex align="center" mr={5}>
                <Heading color={colorMode === 'light' ? 'teal.600' : 'teal.300'}>GenSend</Heading>
            </Flex>
            {loggedIn ? (
                <>
                    <Spacer />
                    <Menu>
                        <Text mr={3} color='gray' fontSize='lg'>{`Welcome back, ${currentUserName}!`}</Text>
                        <MenuButton mr={2} as={IconButton} icon={<HamburgerIcon />} onClick={handleAccountToggle} />
                        <MenuList>
                            <MenuItem>My Account</MenuItem>
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        </MenuList>
                    </Menu>

                </>
            ) : (
                <>

                    <Spacer />
                    <Spacer />
                    <ButtonGroup>

                        <Button colorScheme="teal" onClick={handleLogin}>
                            Login
                        </Button>
                        <Button colorScheme="teal" mr={2}>
                            Sign Up
                        </Button>

                    </ButtonGroup>

                </>
            )}

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
