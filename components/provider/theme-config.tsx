import { LightColor } from "@/config/color"
import { FontSize } from "@/config/font"
import { ThemeOverride } from "@chakra-ui/react"

export const customTheme: ThemeOverride = {
    styles: {
        global: {
            body: {
                minHeight: "100vh",
                backgroundColor: LightColor.BgMain,
                color: LightColor.TextPrimary,
                height: "100%"
            },
            html: {
                fontSize: FontSize,
                fontWeight: 400,
                height: "100%"
            }
        }
    },

    colors: {},
    config: {
        initialColorMode: "light",
        useSystemColorMode: false
    }
}
