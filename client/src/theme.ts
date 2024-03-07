import { extendTheme } from '@chakra-ui/react'


const theme = extendTheme({
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: false,
    },
    components: {
        Button: {
            defaultProps: {
                colorScheme: 'teal',
                variant: 'outline',
            }
        },
        Input: {
            defaultProps: {
                focusBorderColor: 'teal.300',
            }
        },
        Textarea: {
            baseStyle: {
                '::placeholder': {
                    color: 'gray.500',
                    opacity: 1
                }
            },
            defaultProps: {
                focusBorderColor: 'teal.300',
            }

        }
    }
})

export default theme