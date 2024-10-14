"use client"

import { Font } from "@/config/font"
import { Badge, Button, Card, FormGroup, Input, InputGroup, InputRightElement, Title } from "@/design-system"
import useColor from "@/hook/useColor"
import { Box, Container, Flex, Icon, Stack, Text, useToast } from "@chakra-ui/react"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react"
import Link from "next/link"
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
    const Color = useColor()
    const searchParams = useSearchParams()
    const callbackUrl = decodeURI(searchParams.get("callbackUrl") || "/")
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm({
        resolver: zodResolver(schema)
    })
    const [showPassword, setShowPassword] = React.useState(false)

    const pwdType = showPassword ? "text" : "password"
    const pwdIcon = showPassword ? <Icon as={ImEye} color="gary.400" /> : <Icon as={ImEyeBlocked} color="gary.400" />

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
        <Container maxW="container.lg" minH="100vh" display="flex" alignItems="center">
            <Flex justifyContent="center" flexWrap="wrap" width="100%">
                <Card minW="sm">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Stack spacing={6}>
                            <Title as="h2" fontSize="2xl" fontWeight="600" className={Font.brand.className} color={Color.Primary}>
                                Sign in to Intelligent X
                            </Title>
                            <Flex fontSize="15px" gap="2">
                                <Text>Don’t have an account</Text>
                                <Link href="/register">
                                    <Text color={Color.Primary} textDecor="underline" fontWeight="400">
                                        Get Start
                                    </Text>
                                </Link>
                            </Flex>
                            <FormGroup name="email" errors={errors} label="Email">
                                <Input id="email" {...register("email")} />
                            </FormGroup>
                            <FormGroup name="password" errors={errors} label="Password">
                                <InputGroup>
                                    <Input type={pwdType} id="password" {...register("password")} />
                                    <InputRightElement cursor="pointer" onClick={togglePassword}>
                                        {pwdIcon}
                                    </InputRightElement>
                                </InputGroup>
                            </FormGroup>

                            <Button type="submit" disabled={isSubmitting}>
                                Login
                            </Button>
                        </Stack>
                    </form>
                </Card>
            </Flex>
        </Container>
    )
}

export default LoginPage
