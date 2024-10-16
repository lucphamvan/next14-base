import { Font } from "@/config/font"
import { Button, Card, FormGroup, Input, Title } from "@/design-system"
import { FormPasswordInput } from "@/design-system/form"
import { useNotify } from "@/design-system/toast"
import { HintData } from "@/model/hintdata"
import { verifyHintPass } from "@/service/hintdata.service"
import { Flex, Modal, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, VStack } from "@chakra-ui/react"
import { useSession } from "next-auth/react"
import { useCallback, useState } from "react"
import { set, useForm } from "react-hook-form"
import { HiMiniCheck, HiMiniXCircle } from "react-icons/hi2"
import { TbShieldCheckFilled } from "react-icons/tb"

enum Status {
    correct = 1,
    incorrect = 2,
    unknown = 0
}
interface HintValidateFormProps {
    isOpen: boolean
    onClose: () => void
    hintData?: HintData
}

const HintValidateForm = ({ isOpen, hintData, onClose }: HintValidateFormProps) => {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting }
    } = useForm()
    const { notify } = useNotify()
    const { data: sessionData } = useSession()
    const [status, setStatus] = useState<Status>(Status.unknown)

    // handle verify password
    const onSubmit = async (data: any) => {
        try {
            if (!hintData) {
                notify("error", "Hint data not found")
                return
            }
            const result = await verifyHintPass(hintData.id, data.password, sessionData?.accessToken || "")
            if (result.isMatch) {
                setStatus(Status.correct)
            } else {
                setStatus(Status.incorrect)
            }
        } catch (error: any) {
            setStatus(Status.incorrect)
        }
    }

    const renderStatus = useCallback(() => {
        switch (status) {
            case Status.correct:
                return (
                    <VStack>
                        <Title fontSize="xl" color="#38A169">
                            Correct
                        </Title>
                        <TbShieldCheckFilled size={48} color="#38A169" />
                    </VStack>
                )
            case Status.incorrect:
                return (
                    <VStack>
                        <Title fontSize="xl" color="#F04248">
                            Incorrect
                        </Title>
                        <HiMiniXCircle size={48} color="#F04248" />
                    </VStack>
                )
            default:
                return null
        }
    }, [status])

    return (
        <Modal isOpen={isOpen} size="md" onClose={onClose} closeOnOverlayClick={false}>
            <ModalOverlay />
            <ModalContent pt="1rem">
                <ModalHeader
                    pt="0.5rem"
                    pb="0"
                    px="1.25rem"
                    fontFamily={Font.title.style.fontFamily}
                    fontWeight={500}
                    textAlign="center"
                    alignItems="center"
                >
                    Check Password
                </ModalHeader>
                <ModalCloseButton />
                <Card>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Stack spacing={4}>
                            <FormPasswordInput name="password" errors={errors} label="" register={register} />
                            {renderStatus()}
                            <Flex alignContent="center" gap="4" justifyContent="center">
                                <Button maxW="100%" size="sm" type="submit" disabled={isSubmitting}>
                                    Start check
                                </Button>
                            </Flex>
                        </Stack>
                    </form>
                </Card>
            </ModalContent>
        </Modal>
    )
}

export default HintValidateForm
