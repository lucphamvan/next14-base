import { Button, Card, FormGroup, Input, InputGroup, Title } from "@/design-system"
import { Box, Flex, HStack, Icon, InputRightElement, Modal, ModalContent, ModalOverlay, Stack } from "@chakra-ui/react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { ImEye, ImEyeBlocked } from "react-icons/im"
import z from "zod"

const schema = z.object({
    username: z.string().min(6, "User name is required and at least 6 characters"),
    password: z.string().min(6, "Password is required and at least 6 characters"),
    catalog: z.string().optional(),
    hint: z.string().min(1, "Hint is required")
})

interface CreateHintFormProps {
    isOpen: boolean
    onClose: () => void
}

const CreateHintForm = ({ isOpen, onClose }: CreateHintFormProps) => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({
        resolver: zodResolver(schema)
    })

    const [showPassword, setShowPassword] = useState(false)
    const pwdType = showPassword ? "text" : "password"
    const pwdIcon = showPassword ? <Icon as={ImEye} color="gary.400" /> : <Icon as={ImEyeBlocked} color="gary.400" />

    const togglePassword = () => setShowPassword((v) => !v)

    const onSubmit = (data: any) => {
        console.log(data)
        onClose()
        reset()
    }

    return (
        <Modal isOpen={isOpen} size="lg" onClose={onClose} closeOnOverlayClick={false} colorScheme="red">
            <ModalOverlay />
            <ModalContent>
                <Card>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Stack spacing="4">
                            <Title fontSize="xl">Create Hint</Title>
                            <FormGroup name="username" errors={errors} label="User name">
                                <Input {...register("username")} />
                            </FormGroup>
                            <FormGroup name="password" errors={errors} label="Password">
                                <InputGroup>
                                    <Input type={pwdType} id="password" {...register("password")} />
                                    <InputRightElement cursor="pointer" onClick={togglePassword}>
                                        {pwdIcon}
                                    </InputRightElement>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup name="catalog" errors={errors} label="Catalog">
                                <Input {...register("catalog")} />
                            </FormGroup>
                            <FormGroup name="hint" errors={errors} label="Hint">
                                <Input {...register("hint")} />
                            </FormGroup>
                            <Flex alignContent="center" gap="4" justifyContent="flex-end">
                                <Button maxW="100%" type="submit">
                                    Yes, create
                                </Button>
                                <Button maxW="100%" onClick={onClose} variant="outline">
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

export default CreateHintForm
