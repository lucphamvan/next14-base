"use client"

import { Badge, Button, Card } from "@/design-system"
import { useNotify } from "@/design-system/toast"
import { Box, Flex, Stack, useColorMode } from "@chakra-ui/react"
import { signOut } from "next-auth/react"

export default function Home() {
    const { notify } = useNotify()
    const { toggleColorMode } = useColorMode()
    const showToast = (type: "success" | "error" | "warning" | "info") => {
        notify(type, type, "This is a sample message")
    }

    return (
        <Card>
            <Stack spacing="6">
                <Box>
                    Buttons are a type of call to action (CTA) the user can click or press. Button labels should indicate the type of action that will
                    occur when the button is pressed.
                </Box>
                <Flex gap="2" flexWrap="wrap">
                    <Button onClick={() => showToast("error")}>Show Error</Button>
                    <Button onClick={() => showToast("success")}>Show Success</Button>
                    <Button onClick={() => showToast("info")}>Show Info</Button>
                    <Button onClick={() => showToast("warning")}>Show Warning</Button>
                    <Button variant="outline" isDisabled onClick={() => signOut()}>
                        Logout
                    </Button>
                    <Button variant="outline" onClick={toggleColorMode}>
                        Toggle Theme
                    </Button>
                </Flex>
                <Flex gap="2">
                    <Badge type="primary">Primary Badge</Badge>
                    <Badge type="warning">Warning Badge</Badge>
                    <Badge type="info">Info Badge</Badge>
                </Flex>
            </Stack>
        </Card>
    )
}
