import { ThemeConfig } from "@chakra-ui/react"
import { CSSProperties } from "react"

export type ReactProps = {
    children?: React.ReactNode
}

declare module "@emotion/react" {
    export interface Theme {
        mode: "dark" | "light"
    }
}
