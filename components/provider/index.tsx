"use client"

import { NextAuthProvider } from "@/components/nextauth-provider"
import { CacheProvider } from "@chakra-ui/next-js"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"

import ThemeProvider from "./ThemeProvider"
import { customTheme } from "./theme-config"

export const theme = extendTheme(customTheme)

export function Provider({ children }: { children: React.ReactNode }) {
    return (
        <NextAuthProvider>
            <CacheProvider>
                <ChakraProvider theme={theme}>
                    <ThemeProvider>{children}</ThemeProvider>
                </ChakraProvider>
            </CacheProvider>
        </NextAuthProvider>
    )
}