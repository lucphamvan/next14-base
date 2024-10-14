"use client"

import { NextAuthProvider } from "@/components/nextauth-provider"
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react"
import { QueryClient, QueryClientProvider, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useEffect, useState } from "react"

import ThemeProvider from "./ThemeProvider"
import { customTheme } from "./theme-config"

const queryClient = new QueryClient()

export const theme = extendTheme(customTheme)

export function Provider({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <NextAuthProvider>
            <QueryClientProvider client={queryClient}>
                <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                <ChakraProvider theme={theme}>
                    <ThemeProvider>{children}</ThemeProvider>
                </ChakraProvider>
            </QueryClientProvider>
        </NextAuthProvider>
    )
}
