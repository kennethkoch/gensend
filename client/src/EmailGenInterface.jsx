import { useEffect, useState } from 'react';
// import React from 'react';
import {
    Box,
    Button,
    Flex,
    Input,
    Slider,
    SliderFilledTrack,
    SliderMark,
    SliderThumb,
    SliderTrack,
    Textarea,
    useClipboard,
    useDisclosure,
} from '@chakra-ui/react';


const EmailGenInterface = () => {

    const [sliderValue, setSliderValue] = useState(5)
    // const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()
    // const [emailBody, setEmailBody] = useState('Your email body will appear here');
    // const { hasCopied, onCopy } = useClipboard(emailBody);
    const [isModalDisabled, setIsModalDisabled] = useState(true)
    const [isGenerating, setIsGenerating] = useState(false)
    const [senderName, setSenderName] = useState('')
    const [recipientName, setRecipientName] = useState('')
    const [emailSubject, setEmailSubject] = useState('')

    const handleGenerate = () => {
        setIsModalDisabled(true)
        setIsGenerating(true)
        // axios.post(url, {
        //     senderName: senderName,
        //     recipientName: recipientName,
        //     subject: emailSubject,
        //     sliderValue: sliderValue,
        // }).then(res => {
        //     console.log(res.data)
        //     setEmailBody(res.data)
        //     setIsModalDisabled(false)
        //     onOpen()
        //     setIsGenerating(false)
        // })
    }

    useEffect(() => {
        if (isGenerating) {
            handleGenerate()
        } else {
            setIsGenerating(false)
        }
    }, [])

    const handleSenderNameChange = (event) => {
        setSenderName(event.target.value);
    };
    const handleRecipientNameChange = (event) => {
        setRecipientName(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmailSubject(event.target.value);
    }
    const handleReset = () => {
        setSenderName('')
        setRecipientName('')
        setEmailSubject('')
        setSliderValue(5)
        // setEmailBody('Your email body will appear here')
        setIsModalDisabled(true)
    }


    return (<div>

        <Input mt={30} placeholder="Sender's Name"
            value={senderName} onChange={handleSenderNameChange}
            _placeholder={{ opacity: 1, color: 'gray.500' }} />
        <Input mt={30} placeholder="Recipient's Name"
            value={recipientName} onChange={handleRecipientNameChange}
            _placeholder={{ opacity: 1, color: 'gray.500' }} />
        <Textarea mb={30} mt={30}
            placeholder="Email Subject, e.g. 'can't do tuesday meeting'"
            value={emailSubject}
            onChange={handleEmailChange} />

        <Slider
            mt={10} defaultValue={5} min={0} max={10} step={1}
            value={sliderValue}
            onChange={(val) => setSliderValue(val)}
        >
            <SliderMark value={0} mt={5} ml={-2}>
                Casual
            </SliderMark>
            <SliderMark value={5} mt={5} ml={-6}>
                Formal
            </SliderMark>
            <SliderMark value={10} mt={5} ml={-10}>
                Extremely Formal
            </SliderMark>
            <SliderMark
                value={sliderValue}
                textAlign='center'
                bg='teal.500'
                color='white'
                mt='-10'
                ml='-6'
                w='12'
            >
                {sliderValue}
            </SliderMark>
            <SliderTrack bg='teal.100'>
                <Box position='relative' right={10} />
                <SliderFilledTrack bg='teal' />
            </SliderTrack>
            <SliderThumb boxSize={4} />
        </Slider>
        <Flex justify='center' align='center' gap='3' mt={45} p={30}>

            <Button
                isLoading={isGenerating}
                loadingText='Generating'
                onClick={handleGenerate}
            >
                Generate Email
            </Button>
            <Button isDisabled={isModalDisabled} onClick={onOpen}>View Results</Button>
        </Flex>
        <Button onClick={handleReset}>Reset</Button>
    </div>)
}

export default EmailGenInterface



