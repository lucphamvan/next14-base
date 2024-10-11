"use client"

import { Button, Title } from "@/design-system"
import { HStack, Icon, Stack, VStack, useDisclosure } from "@chakra-ui/react"

import CreateHintForm from "./create-hint-form"

const HintModule = () => {
    const { isOpen, onClose, onToggle } = useDisclosure()
    return (
        <Stack>
            <HStack alignItems="center" justifyContent="space-between">
                <Title fontSize="lg" color="white">
                    Your Hint
                </Title>
                <Button variant="outline" onClick={onToggle}>
                    Create Hint
                </Button>
                <CreateHintForm isOpen={isOpen} onClose={onClose} />
            </HStack>
        </Stack>
    )
}
export default HintModule
