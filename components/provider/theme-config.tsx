import { Color, FontSize } from "@/design-system"
import { ThemeOverride } from "@chakra-ui/react"

export const customTheme: ThemeOverride = {
    styles: {
        global: {
            body: {
                minHeight: "100vh",
                backgroundColor: Color.BgDark,
                color: Color.TextPrimary,
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
