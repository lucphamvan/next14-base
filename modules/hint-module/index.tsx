"use client"

import { Button, Title } from "@/design-system"
import { useNotify } from "@/design-system/toast"
import { HintFormDataInput } from "@/model/hintdata"
import { createHintData } from "@/service/hintdata.service"
import { HStack, Stack, useDisclosure } from "@chakra-ui/react"
import { useSession } from "next-auth/react"
import { useState } from "react"

import HintForm from "./hint-form"

const HintModule = () => {
    const { isOpen, onClose, onToggle } = useDisclosure()
    const [typeForm, setTypeForm] = useState<"create" | "edit">("create")
    const [defaultHintFormValue, setDefaultHintFormValue] = useState<HintFormDataInput>()
    const { data: sessionData } = useSession()
    const { notify } = useNotify()

    const openCreateHintForm = () => {
        setTypeForm("create")
        setDefaultHintFormValue(undefined)
        onToggle()
    }

    return (
        <Stack>
            <HStack alignItems="center" justifyContent="space-between">
                <Title fontSize="lg" color="white">
                    Your Hint
                </Title>
                <Button variant="outline" onClick={openCreateHintForm}>
                    Create Hint
                </Button>
                <HintForm type={typeForm} defaultValue={defaultHintFormValue} isOpen={isOpen} onClose={onClose} />
            </HStack>
        </Stack>
    )
}
export default HintModule
