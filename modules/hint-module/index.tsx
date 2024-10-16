"use client"

import { Button, Title } from "@/design-system"
import ConfirmPopup from "@/design-system/confirm-popup"
import { useNotify } from "@/design-system/toast"
import { HintData, HintFormDataInput } from "@/model/hintdata"
import { deleteHintData, getListHintData } from "@/service/hintdata.service"
import { HStack, Stack, useDisclosure } from "@chakra-ui/react"
import { useQuery } from "@tanstack/react-query"
import { useSession } from "next-auth/react"
import { useState } from "react"

import HintForm from "./hint-form"
import HintDataList from "./hint-list"

const HintModule = () => {
    const { isOpen, onClose, onToggle } = useDisclosure()
    const { isOpen: isOpenDelete, onClose: onCloseDelete, onToggle: onToggleDelete } = useDisclosure()

    const [typeForm, setTypeForm] = useState<"create" | "edit">("create")
    const [defaultHintFormValue, setDefaultHintFormValue] = useState<HintFormDataInput>()
    const [currentHint, setCurrentHint] = useState<HintData>()

    const { data: dataSession } = useSession()
    const accessToken = dataSession?.accessToken || ""

    const { notify } = useNotify()

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

    const openDeleteHintForm = (hintData: HintData) => {
        setCurrentHint(hintData)
        onToggleDelete()
    }

    const onDeleteHint = async () => {
        try {
            await deleteHintData(currentHint?.id || "", accessToken)
            onCloseDelete()
            refetch()
            notify("success", "Delete hint successfully")
        } catch (error: any) {
            console.log(error)
            notify("error", "Delete hint failed, please try again")
        }
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
                {isOpen && <HintForm refetch={refetch} type={typeForm} defaultValue={defaultHintFormValue} isOpen={isOpen} onClose={onClose} />}
                {isOpenDelete && (
                    <ConfirmPopup
                        isOpen={isOpenDelete}
                        onClose={onCloseDelete}
                        content="Are you sure you want to delete this hint?"
                        btnCancelText="No, cancel"
                        btnOkText="Yes, delete"
                        onConfirm={onDeleteHint}
                    />
                )}
            </HStack>
            <HintDataList
                data={hintdataResponse?.items || []}
                isLoading={isLoading}
                openDeleteHintForm={openDeleteHintForm}
                openEditHintForm={openEditHintForm}
                openValidateHintForm={() => {}}
            />
        </Stack>
    )
}
export default HintModule
