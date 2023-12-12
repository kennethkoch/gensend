// import { useState } from 'react'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import HomePage from './HomePage'
import EmailGenInterface from './EmailGenInterface'
import theme from './theme'

function App(): JSX.Element {

  return (
    <>
      <ChakraProvider theme={theme}>
        <HomePage />
        <EmailGenInterface />
      </ChakraProvider>
    </>
  )
}

export default App
