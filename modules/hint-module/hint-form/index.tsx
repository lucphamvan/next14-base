import { Button, Card, FormGroup, Input, Title } from "@/design-system"
import { FormPasswordInput } from "@/design-system/form"
import { useNotify } from "@/design-system/toast"
import { HintFormDataInput } from "@/model/hintdata"
import { createHintData, updateHintData } from "@/service/hintdata.service"
import { Flex, Modal, ModalContent, ModalOverlay, Stack } from "@chakra-ui/react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useSession } from "next-auth/react"
import { useEffect } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import z from "zod"

const schema = z
    .object({
        username: z.string().min(1, "Account is required field"),
        password: z.string(),
        confirmPassword: z.string().optional(),
        catalog: z.string().optional(),
        hint: z.string().min(1, "Hint is required field")
    })
    .refine(
        (values) => {
            return values.password === values.confirmPassword
        },
        {
            message: "Confirm password does not match",
            path: ["confirmPassword"]
        }
    )

interface HintFormProps {
    isOpen: boolean
    onClose: () => void
    defaultValue?: HintFormDataInput
    type: "edit" | "create"
    refetch: () => void
}

const HintForm = (props: HintFormProps) => {
    const { data: sessionData } = useSession()
    const { notify } = useNotify()
    const { isOpen, onClose, type, refetch } = props

    const defaultValues = type === "edit" ? props.defaultValue : undefined
    const title = type === "edit" ? "Edit Hint" : "Create Hint"
    const submitText = type === "edit" ? "Yes, update" : "Yes, create"

    const {
        register,
        formState: { errors, isSubmitting },
        handleSubmit,
        reset
    } = useForm<HintFormDataInput>({
        resolver: zodResolver(schema)
    })

    useEffect(() => {
        reset(defaultValues)
        return () => {
            reset()
        }
    }, [defaultValues, reset])

    const handleCreateHintData = async (data: HintFormDataInput) => {
        if (!sessionData?.accessToken) return
        await createHintData(data, sessionData?.accessToken)
        notify("success", "Create hint successfully")
    }

    const handleUpdateHintData = async (data: HintFormDataInput) => {
        if (!sessionData?.accessToken) return
        data.id = defaultValues?.id
        await updateHintData(data, sessionData?.accessToken)
        notify("success", "Update hint successfully")
    }

    const onSubmit: SubmitHandler<HintFormDataInput> = async (data) => {
        try {
            type === "create" ? await handleCreateHintData(data) : await handleUpdateHintData(data)
            onClose()
            reset()
            refetch()
        } catch (error: any) {
            notify("error", error.message)
        }
    }

    return (
        <Modal isOpen={isOpen} size={"md"} onClose={onClose} closeOnOverlayClick={false}>
            <ModalOverlay />
            <ModalContent>
                <Card>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Stack spacing="4">
                            <Title fontSize="xl">{title}</Title>
                            <FormGroup isRequired name="username" errors={errors} label="Account">
                                <Input {...register("username")} />
                            </FormGroup>
                            <FormPasswordInput name="password" label="Password" errors={errors} register={register} />
                            <FormPasswordInput name="confirmPassword" label="Confirm Password" errors={errors} register={register} />
                            <FormGroup name="catalog" errors={errors} label="Catalog">
                                <Input {...register("catalog")} />
                            </FormGroup>
                            <FormGroup isRequired name="hint" errors={errors} label="Hint">
                                <Input {...register("hint")} />
                            </FormGroup>
                            <Flex alignContent="center" gap="4" justifyContent="flex-end">
                                <Button maxW="100%" size="sm" type="submit" disabled={isSubmitting}>
                                    {submitText}
                                </Button>
                                <Button maxW="100%" size="sm" onClick={onClose} variant="outline">
                                    No, cancel
                                </Button>
                            </Flex>
                        </Stack>
                    </form>
                </Card>
            </ModalContent>
        </Modal>
    )
}

export default HintForm
