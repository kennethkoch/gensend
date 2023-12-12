import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
// const config = {
//     initialColorMode: 'dark',
//     useSystemColorMode: false,
// }

// const components = {
//     Textarea: {
//         focusBorderColor: 'red.500',
//     }
// }

// 3. extend the theme
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