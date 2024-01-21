import { useEffect, useState } from 'react';
import EmailModal from './EmailModal';
import axios from 'axios';
// import React from 'react';
import {
    Box,
    Button,
    Container,
    Flex,
    Input,
    Slider,
    SliderFilledTrack,
    SliderMark,
    SliderThumb,
    SliderTrack,
    Switch,
    Text,
    Textarea,
    useDisclosure,
} from '@chakra-ui/react';


const EmailGenInterface = () => {

    const [sliderValue, setSliderValue] = useState(5)
    // const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [emailBody, setEmailBody] = useState('Your email body will appear here');
    // const { hasCopied, onCopy } = useClipboard(emailBody);
    const [isModalDisabled, setIsModalDisabled] = useState(true)
    const [isGenerating, setIsGenerating] = useState(false)
    const [senderName, setSenderName] = useState('')
    const [recipientName, setRecipientName] = useState('')
    const [emailSubject, setEmailSubject] = useState('')
    const [instructions, setInstructions] = useState('')
    const [emojiMode, setEmojiMode] = useState<boolean>(false);

    const url = "http://localhost:3000/api/generate"

    const handleGenerate = () => {
        setIsModalDisabled(true)
        setIsGenerating(true)

        axios.post(url, {
            senderName: senderName,
            recipientName: recipientName,
            subject: emailSubject,
            instructions: instructions,
            sliderValue: sliderValue,
            emojiMode: emojiMode,
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true, // Include cookies in the request
        }).then((res) => {
            console.log(res.data)
            setEmailBody(res.data)
            setIsGenerating(false);
            setIsModalDisabled(false)
            onOpen()
        })

    }

    useEffect(() => {
        if (isGenerating) {
            handleGenerate()
        } else {
            setIsGenerating(false)
        }
    }, [])

    const handleSenderNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSenderName(event.target.value);
    };
    const handleRecipientNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRecipientName(event.target.value);
    };
    const handleEmailChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setEmailSubject(event.target.value);
    }
    const handleInstructionsChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInstructions(event.target.value);
    }

    const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmojiMode(event.target.checked);
    }

    const handleReset = () => {
        setSenderName('')
        setRecipientName('')
        setEmailSubject('')
        setInstructions('')
        setSliderValue(5)
        setEmailBody('Your email body will appear here')
        setIsModalDisabled(true)
        setEmojiMode(false)
    }


    return (<div>
        <Container>

            <Input mt={30} placeholder="Sender's Name"
                value={senderName} onChange={handleSenderNameChange}
                _placeholder={{ opacity: 1, color: 'gray.500' }} />
            <Input mt={30} placeholder="Recipient's Name"
                value={recipientName} onChange={handleRecipientNameChange}
                _placeholder={{ opacity: 1, color: 'gray.500' }} />
            <Textarea mb={30} mt={30}
                placeholder="Email Subject, e.g. 'can't do tuesday meeting'"
                sx={{
                    height: '10vh',
                    resize: 'vertical',
                }}
                value={emailSubject}
                onChange={handleEmailChange} />
            <Textarea mb={30}
                placeholder="Special Instructions (optional), e.g. 'add a holiday greeting, mention basketball, construct email in the form of a haiku', etc."
                sx={{
                    height: '10vh',
                    resize: 'vertical',
                }}
                value={instructions}
                onChange={handleInstructionsChange} />
            <Flex mb={5} alignItems="center" justifyContent="center">
                <Text mr="2">Enable Emoji Mode 😎 </Text>
                <Switch
                    id="experimental-mode"
                    colorScheme="teal"
                    isChecked={emojiMode}
                    onChange={handleSwitchChange} />
            </Flex>

            <Slider
                mt={10} defaultValue={5} min={0} max={10} step={1}
                value={sliderValue}
                onChange={(val) => setSliderValue(val)}
            >
                <SliderMark color='teal.100' value={0} mt={5} ml={-2}>
                    Casual
                </SliderMark>
                <SliderMark color='teal.100' value={5} mt={5} ml={-6}>
                    Formal
                </SliderMark>
                <SliderMark color='teal.100' value={10} mt={5} ml={-10}>
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
        </Container>
        <Flex justify='center' align='center' gap='3' mt={45} p={30}>

            <Button
                isLoading={isGenerating}
                loadingText='Generating'
                onClick={handleGenerate}
            >
                Generate Email
            </Button>
            <Button isDisabled={isModalDisabled} onClick={onOpen}>View Results
                {<EmailModal emailBody={emailBody} isOpen={isOpen} onClose={onClose} />}
            </Button>
        </Flex>
        <Button onClick={handleReset}>Reset</Button>
    </div>)
}

export default EmailGenInterface