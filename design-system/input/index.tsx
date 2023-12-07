"use client"

import { Input as ChakraInput, InputProps } from "@chakra-ui/react"
import styled from "@emotion/styled"
import React from "react"

import { Color } from "../config/color"

const borderStyle = `1px solid ${Color.Border}`
const borderFocusStyle = `1px solid ${Color.Primary}`
const borderErrorStyle = `1px solid ${Color.Error}`

const BaseInput = styled(ChakraInput)`
    color: ${Color.TextLight};
    background-color: unset;
    font-weight: 400;
    padding: 0.375rem 1rem;
    box-sizing: border-box;
    outline: none;
    border: ${borderStyle};
    box-shadow: none !important;
    ::placeholder {
        color: ${Color.TextGray};
        font-size: 0.95rem;
        font-weight: 300;
    }
`

const FlushInput = styled(BaseInput)`
    border: none;
    border-bottom: 1px solid ${Color.Border};
    &:focus,
    &:focus-within,
    &:hover {
        border-bottom: ${borderFocusStyle};
    }
`

const OutlineInput = styled(BaseInput)`
    border-radius: 4px;
    &:focus,
    &:focus-within,
    &:hover {
        border: ${borderFocusStyle};
    }
    &[aria-invalid="true"] {
        border: ${borderErrorStyle};
    }
`

interface Props extends InputProps {
    variant?: "outline" | "filled" | "flushed"
}
export const Input = React.forwardRef((props: Props, ref) => {
    if (props.variant === "flushed") {
        return <FlushInput ref={ref} isRequired={false} width="full" {...props} />
    }
    return <OutlineInput ref={ref} isRequired={false} width="full" {...props} />
})

Input.displayName = "Input"
