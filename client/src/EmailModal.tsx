import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Textarea,
    Button,
} from "@chakra-ui/react"

interface EmailModalProps {
    isOpen: boolean;
    onClose: () => void;
    // Add more props and their types if necessary
}


const EmailModal: React.FC<EmailModalProps> = ({ isOpen, onClose }) => {

    const emailBody = 'test email body'



    return (
        <Modal size="xl" closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Edit your email below:</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Textarea minH="50vh" defaultValue={emailBody}></Textarea>
                </ModalBody>
                <ModalFooter>
                    {/* <Button variant='solid' mr={3} onClick={onCopy}>
                        {hasCopied ? 'Copied!' : 'Copy'}
                    </Button> */}
                    <Button variant='solid' mr={3}>
                        {'copy'}
                    </Button>
                    <Button onClick={onClose}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default EmailModal;