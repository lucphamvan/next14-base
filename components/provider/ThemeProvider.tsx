"use client"

import { ReactProps } from "@/type"
import { useColorMode } from "@chakra-ui/react"
import { ThemeProvider as EmotionProvider } from "@emotion/react"

const ThemeProvider = ({ children }: ReactProps) => {
    const { colorMode } = useColorMode()
    return <EmotionProvider theme={{ mode: colorMode }}>{children}</EmotionProvider>
}

export default ThemeProvider
