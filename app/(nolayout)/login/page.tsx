"use client"

import { Button, Card, Color, Font, FormGroup, Input, InputGroup, InputRightElement, Title } from "@/design-system"
import { Container, Icon, Stack, useToast } from "@chakra-ui/react"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation"
import React from "react"
import { FieldValues, useForm } from "react-hook-form"
import { ImEye, ImEyeBlocked } from "react-icons/im"
import { z } from "zod"

const schema = z.object({
    email: z.string().min(1, "Email is required").email(),
    password: z.string().min(1, "Password is required").min(3).max(100)
})

const LoginPage = () => {
    const searchParams = useSearchParams()
    const callbackUrl = decodeURI(searchParams.get("callbackUrl") || "/")
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(schema)
    })
    const [showPassword, setShowPassword] = React.useState(false)

    const pwdType = showPassword ? "text" : "password"
    const pwdIcon = showPassword ? <Icon as={ImEyeBlocked} color="gary.400" /> : <Icon as={ImEye} color="gary.400" />

    const toast = useToast()
    const togglePassword = () => setShowPassword((v) => !v)

    const onSubmit = async (data: FieldValues) => {
        const res = await signIn("credentials", { ...data, callbackUrl, redirect: false })
        if (res?.error) {
            toast({
                description: res.error,
                status: "error",
                duration: 3000,
                isClosable: true,
                position: "top-right"
            })
        } else {
            router.push(callbackUrl)
        }
    }

    return (
        <Container maxH="container.lg" minH="100vh" display="flex" justifyItems="center" alignItems="center">
            <Card minW="sm">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={6}>
                        <Title as="h2" fontSize="2xl" fontWeight="600" className={Font.brand.className} color={Color.Primary}>
                            WELCOME
                        </Title>
                        <FormGroup name="email" errors={errors} label="Email">
                            <Input id="email" {...register("email")} />
                        </FormGroup>

                        <FormGroup name="password" errors={errors} label="Email">
                            <InputGroup>
                                <Input type={pwdType} id="password" {...register("password")} />
                                <InputRightElement cursor="pointer" onClick={togglePassword}>
                                    {pwdIcon}
                                </InputRightElement>
                            </InputGroup>
                        </FormGroup>
                        <Button type="submit">Login</Button>
                    </Stack>
                </form>
            </Card>
        </Container>
    )
}

export default LoginPage
