"use client"

import { Color } from "../enum/color"
import { ButtonProps, chakra } from "@chakra-ui/react"
import styled from "@emotion/styled"
import useRipple from "use-ripple-hook"

const StyledButton = styled(chakra.button)`
    border-radius: 0.25rem;
    padding: 0.25rem 1.5rem;
    text-transform: uppercase;
    font-weight: 600;
    color: ${Color.TextDark};
    background-color: ${Color.Primary};
    &:hover {
        background-color: ${Color.PrimaryHover};
    }
`

const OutlineButton = styled(StyledButton)`
    background-color: transparent;
    border: 1px solid ${Color.Primary};
    color: ${Color.Primary};
    font-weight: 400;
    &:hover {
        background-color: ${Color.OutlineHover};
    }
`

export const Button = (props: ButtonProps) => {
    const [ripple, event] = useRipple({
        color: Color.RipleBtn
    })
    if (props.variant === "outline") {
        return <OutlineButton {...props} ref={ripple} onMouseDown={event} />
    }
    return <StyledButton {...props} ref={ripple} onMouseDown={event} />
}
