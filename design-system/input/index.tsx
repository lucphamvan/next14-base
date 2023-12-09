"use client"

import { Input as ChakraInput, InputProps } from "@chakra-ui/react"
import styled from "@emotion/styled"
import React from "react"

const borderStyle = (Color: any) => `1px solid ${Color.Border}`
const borderFocusStyle = (Color: any) => `1px solid ${Color.Primary}`
const borderErrorStyle = (Color: any) => `1px solid ${Color.Error}`

const BaseInput = styled(ChakraInput)`
    color: ${({ theme: { Color } }) => Color.TextPrimary};
    background-color: unset;
    font-weight: 400;
    padding: 0.375rem 1rem;
    box-sizing: border-box;
    outline: none;
    border: ${({ theme: { Color } }) => borderStyle(Color)};
    box-shadow: none !important;
    ::placeholder {
        color: ${({ theme: { Color } }) => Color.TextSecondary};
        font-size: 0.95rem;
        font-weight: 300;
    }
`

const FlushInput = styled(BaseInput)`
    border: none;
    border-bottom: 1px solid ${({ theme: { Color } }) => Color.Border};
    &:focus,
    &:focus-within,
    &:hover {
        border-bottom: ${({ theme: { Color } }) => borderFocusStyle(Color)};
    }
`

const OutlineInput = styled(BaseInput)`
    border-radius: 4px;
    &:focus,
    &:focus-within,
    &:hover {
        border: ${({ theme: { Color } }) => borderFocusStyle(Color)};
    }
    &[aria-invalid="true"] {
        border: ${({ theme: { Color } }) => borderErrorStyle(Color)};
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
