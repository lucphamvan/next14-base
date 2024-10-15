import { Card } from "@/design-system/card"
import { Flex, Modal, ModalContent, ModalOverlay, Stack } from "@chakra-ui/react"

import { Button } from "../button"
import { Title } from "../title"

interface Props {
    isOpen: boolean
    onClose: () => void
    btnOkText?: string
    btnCancelText?: string
    content: string | React.ReactNode
    onConfirm: () => void
}

const ConfirmPopup = ({ isOpen, onClose, btnCancelText, btnOkText, onConfirm, content }: Props) => {
    const handleConfirm = () => {
        onConfirm()
        onClose()
    }

    return (
        <Modal isOpen={isOpen} size="lg" onClose={onClose} closeOnOverlayClick={false}>
            <ModalOverlay />
            <ModalContent>
                <Card>
                    <Stack spacing="4">
                        <Title>{content}</Title>
                        <Flex alignContent="center" gap="4" justifyContent="flex-end">
                            <Button maxW="100%" size="sm" onClick={handleConfirm}>
                                {btnOkText || "Yes, delete"}
                            </Button>
                            <Button maxW="100%" size="sm" onClick={onClose} variant="outline">
                                {btnCancelText || "No, cancel"}
                            </Button>
                        </Flex>
                    </Stack>
                </Card>
            </ModalContent>
        </Modal>
    )
}

export default ConfirmPopup
