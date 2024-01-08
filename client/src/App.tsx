// import { useState } from 'react'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import HomePage from './HomePage'
import EmailGenInterface from './EmailGenInterface'
import theme from './theme'
import Navbar from './Navbar'

function App(): JSX.Element {

  return (
    <>
      <ChakraProvider theme={theme}>
        <Navbar />
        {/* <HomePage /> */}
        <EmailGenInterface />
      </ChakraProvider>
    </>
  )
}

export default App
