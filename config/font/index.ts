import { Oxanium, Roboto_Condensed } from "next/font/google"
import localFont from "next/font/local"

const robotoCondensedFont = Roboto_Condensed({
    weight: ["300", "400", "700"],
    subsets: ["latin-ext"]
})

const dinFont = localFont({
    src: "./din-medium.ttf"
})

const graphikFont = localFont({
    src: [
        { path: "./graphik/Graphik-Regular.ttf", weight: "400" },
        { path: "./graphik/Graphik-Medium.ttf", weight: "500" },
        { path: "./graphik/Graphik-Semibold.ttf", weight: "600" },
        { path: "./graphik/Graphik-Bold.ttf", weight: "700" },
        { path: "./graphik/Graphik-Black.ttf", weight: "800" },
        { path: "./graphik/Graphik-Super.ttf", weight: "900" }
    ],
    display: "swap"
})

const brandFont = Oxanium({
    weight: ["300", "400", "700", "200", "600", "800", "500"],
    subsets: ["latin-ext"]
})

export const Font = {
    primary: robotoCondensedFont,
    title: dinFont,
    secondary: robotoCondensedFont,
    brand: brandFont
}

export const FontSize = "16px"
