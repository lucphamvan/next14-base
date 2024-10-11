"use client"

import { Button, Title } from "@/design-system"
import { HStack, Icon, Stack, VStack } from "@chakra-ui/react"
import { ImBoxAdd } from "react-icons/im"
import { IoAdd } from "react-icons/io5"

const HintModule = () => {
    return (
        <Stack>
            <HStack alignItems="center" justifyContent="space-between">
                <Title fontSize="lg" color="white">
                    Your Hint
                </Title>
                <Button variant="outline">Create Hint</Button>
            </HStack>
        </Stack>
    )
}
export default HintModule
