"use client"

import { Badge, Button, Card } from "@/design-system"
import { Box, Stack } from "@chakra-ui/react"
import { signOut } from "next-auth/react"

export default function Home() {
    return (
        <Card>
            <Stack spacing="6">
                <Box>
                    Buttons are a type of call to action (CTA) the user can click or press. Button labels should indicate the type of action that will
                    occur when the button is pressed.
                </Box>
                <Button maxW="fit-content">Submit</Button>
                <Button maxW="fit-content" variant="outline" onClick={() => signOut()}>
                    submit
                </Button>
                <Box>
                    <Badge type="primary">Hello</Badge>
                </Box>
            </Stack>
        </Card>
    )
}
