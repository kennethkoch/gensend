
import {
    Box,
    Flex,
    Heading,
    Spacer,
    Button,
    useColorMode,
    IconButton,
    Text,
    ButtonGroup,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons';

const Navbar: React.FC = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (

        <Flex
            alignItems='center'
            width='100%'
            // flexGrow={1}
            top={0}
            p={4}
            zIndex={100}
            as="nav"
            position="sticky"
            mb={10}
            bg={colorMode === 'light' ? 'gray.300' : 'black'}
        >
            <Flex align="center" >
                <Heading color={colorMode === 'light' ? 'teal.600' : 'teal.300'}>GenSend</Heading>
            </Flex>
            <Spacer />
            {colorMode === 'light' ? (
                <Text as='i' color='teal.600' mr={2}>
                    <Text as="span" fontWeight="bold">Light</Text>/Dark
                </Text>

            ) : (
                <Text as='i' color='teal.300' mr={2}>
                    Light/<Text as="span" fontWeight="bold">Dark</Text>
                </Text>

            )}

            <Flex>
                <IconButton
                    aria-label="Toggle dark mode"
                    icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    onClick={toggleColorMode}
                />
            </Flex>
        </Flex >
    );
};

export default Navbar;
