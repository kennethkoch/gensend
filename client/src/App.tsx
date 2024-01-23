import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import EmailGenInterface from './EmailGenInterface'
import theme from './theme'
import Navbar from './Navbar'

function App(): JSX.Element {

  return (
    <>
      <ChakraProvider theme={theme}>
        <Navbar />
        <EmailGenInterface />
      </ChakraProvider>
    </>
  )
}

export default App
