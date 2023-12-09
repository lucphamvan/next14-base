"use client"

import { DarkColor, LightColor } from "@/config/color"
import { ReactProps } from "@/type"
import { useColorMode } from "@chakra-ui/react"
import { ThemeProvider as EmotionProvider } from "@emotion/react"

const ThemeProvider = ({ children }: ReactProps) => {
    const { colorMode: mode } = useColorMode()
    const isDark = mode === "dark"
    const Color = isDark ? DarkColor : LightColor
    return <EmotionProvider theme={{ mode, isDark, Color }}>{children}</EmotionProvider>
}

export default ThemeProvider
