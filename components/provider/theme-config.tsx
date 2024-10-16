import { DarkColor, LightColor } from "@/config/color"
import { Font, FontSize } from "@/config/font"
import { ThemeOverride } from "@chakra-ui/react"

export const customTheme: ThemeOverride = {
    styles: {
        global: {
            body: {
                minHeight: "100vh",
                background: LightColor.BgMain,
                color: LightColor.TextPrimary,
                height: "100%",
                fontFamily: Font.primary.style.fontFamily
            },
            html: {
                fontSize: FontSize,
                fontWeight: 400,
                height: "100%"
            },
            _dark: {
                body: {
                    background: DarkColor.BgMain,
                    color: DarkColor.TextPrimary,
                    fontFamily: Font.primary.style.fontFamily
                }
            }
        }
    },

    colors: {},
    config: {
        initialColorMode: "light",
        useSystemColorMode: false
    }
}
