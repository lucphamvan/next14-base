"use client"

import { Button } from "@/design-system"
import { Flex } from "@chakra-ui/react"
import { signIn, signOut } from "next-auth/react"

const Action = () => {
    return (
        <Flex gap="4">
            <Button onClick={() => signIn()}>SignIn</Button>
            <Button onClick={() => signOut()}>SignOut</Button>
        </Flex>
    )
}

export default Action
