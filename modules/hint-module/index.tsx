"use client"

import { Button, Title } from "@/design-system"
import { HintFormDataInput } from "@/model/hintdata"
import { getListHintData } from "@/service/hintdata.service"
import { HStack, Stack, useDisclosure } from "@chakra-ui/react"
import { useQuery } from "@tanstack/react-query"
import { useSession } from "next-auth/react"
import { useState } from "react"

import HintForm from "./hint-form"
import HintDataList from "./hint-list"

const HintModule = () => {
    const { isOpen, onClose, onToggle } = useDisclosure()
    const [typeForm, setTypeForm] = useState<"create" | "edit">("create")
    const [defaultHintFormValue, setDefaultHintFormValue] = useState<HintFormDataInput>()

    const { data: dataSession } = useSession()
    const accessToken = dataSession?.accessToken || ""

    const {
        data: hintdataResponse,
        refetch,
        isError,
        isLoading
    } = useQuery({
        queryKey: ["hint-data", accessToken],
        queryFn: () => getListHintData(accessToken),
        refetchInterval: 10000
    })

    const openCreateHintForm = () => {
        setTypeForm("create")
        setDefaultHintFormValue(undefined)
        onToggle()
    }

    const openEditHintForm = (hintData: HintFormDataInput) => {
        setTypeForm("edit")
        setDefaultHintFormValue(hintData)
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
                <HintForm refetch={refetch} type={typeForm} defaultValue={defaultHintFormValue} isOpen={isOpen} onClose={onClose} />
            </HStack>
            <HintDataList data={hintdataResponse?.items || []} isLoading={isLoading} openEditHintForm={openEditHintForm} />
        </Stack>
    )
}
export default HintModule
