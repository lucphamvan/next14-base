import { Inter, Mulish, Oxanium, Roboto, Roboto_Condensed, Work_Sans } from "next/font/google"

const mulistFont = Mulish({
    weight: ["300", "400", "700", "200", "600", "800", "500", "900"],
    subsets: ["latin-ext"]
})

const interFont = Inter({
    weight: ["300", "400", "700", "200", "600", "800", "500", "900"],
    subsets: ["latin-ext"]
})

const robotoCondensedFont = Roboto_Condensed({
    weight: ["300", "400", "700"],
    subsets: ["latin-ext"]
})

const robotoFont = Roboto({
    weight: ["300", "100", "900", "400", "500", "700"],
    subsets: ["latin"]
})

const secondaryFont = Work_Sans({
    weight: ["300", "400", "700", "200", "600", "800", "500", "900"],
    subsets: ["latin-ext"]
})

const brandFont = Oxanium({
    weight: ["300", "400", "700", "200", "600", "800", "500"],
    subsets: ["latin-ext"]
})

export const Font = {
    primary: robotoCondensedFont,
    title: robotoCondensedFont,
    secondary: robotoCondensedFont,
    brand: brandFont
}

export const FontSize = "16px"
