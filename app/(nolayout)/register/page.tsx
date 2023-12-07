"use client"

import { Button, Card, Color, Font, FormGroup, Input, InputGroup, InputRightElement, Title } from "@/design-system"
import { useNotify } from "@/design-system/toast"
import { CreateUserInput } from "@/model/user"
import { createUser } from "@/service/user.service"
import { Container, Flex, Grid, GridItem, Icon, Stack } from "@chakra-ui/react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { ImEye, ImEyeBlocked } from "react-icons/im"
import { z } from "zod"

const schema = z
    .object({
        name: z.string().min(1, "Name is required").max(100),
        email: z.string().min(1, "Email is required").email(),
        password: z.string().min(1, "Password is required").min(3).max(100),
        confirmPassword: z.string().min(1, "Confirm Password is required").min(3).max(100)
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

const Page = () => {
    const {
        handleSubmit,
        formState: { errors, isSubmitting },
        register
    } = useForm({ resolver: zodResolver(schema) })
    const { notify } = useNotify()
    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false)
    const pwdType = showPassword ? "text" : "password"
    const pwdIcon = showPassword ? <Icon as={ImEyeBlocked} color="gary.400" /> : <Icon as={ImEye} color="gary.400" />

    const togglePassword = () => setShowPassword((v) => !v)

    // submit form data
    const onSubmit = async (data: any) => {
        try {
            await createUser(data as CreateUserInput)
            notify("success", "Create user successfully")
            router.push("/login")
        } catch (error: any) {
            notify("error", error.message)
        }
    }

    return (
        <Container maxW="container.lg" minH="100vh" display="flex" alignItems="center">
            <Flex justifyContent="center" flexWrap="wrap" width="100%">
                <Card w={["sm", "sm", "sm"]}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Stack spacing={6}>
                            <Title as="h2" fontSize="2xl" fontWeight="600" className={Font.brand.className} color={Color.Primary}>
                                Register
                            </Title>
                            <FormGroup name="name" errors={errors}>
                                <Input id="name" {...register("name")} placeholder="User name" />
                            </FormGroup>
                            <FormGroup name="email" errors={errors}>
                                <Input id="email" {...register("email")} placeholder="Email" />
                            </FormGroup>

                            <FormGroup name="password" errors={errors}>
                                <InputGroup>
                                    <Input type={pwdType} id="password" {...register("password")} placeholder="Password" />
                                    <InputRightElement cursor="pointer" onClick={togglePassword}>
                                        {pwdIcon}
                                    </InputRightElement>
                                </InputGroup>
                            </FormGroup>

                            <FormGroup name="confirmPassword" errors={errors}>
                                <InputGroup>
                                    <Input type={pwdType} id="confirmPassword" {...register("confirmPassword")} placeholder="Confirm password" />
                                    <InputRightElement cursor="pointer" onClick={togglePassword}>
                                        {pwdIcon}
                                    </InputRightElement>
                                </InputGroup>
                            </FormGroup>

                            <Button type="submit" disabled={isSubmitting} maxW="initial" mt="1">
                                Register
                            </Button>
                        </Stack>
                    </form>
                </Card>
            </Flex>
        </Container>
    )
}

export default Page
