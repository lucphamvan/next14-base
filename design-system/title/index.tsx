"use client"

import { Text as ChakraText } from "@chakra-ui/react"
import styled from "@emotion/styled"

import { Color } from "../config/color"
import { Font } from "../config/font"

export const Title = styled(ChakraText)`
    ${Font.title.style};
    color: ${(prop) => prop.color ?? Color.TextLight};
`
