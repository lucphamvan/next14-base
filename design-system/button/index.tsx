"use client"

import { ButtonProps, chakra } from "@chakra-ui/react"
import styled from "@emotion/styled"
import useRipple from "use-ripple-hook"

import { Color } from "../enum/color"

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
    height: max-content;
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

const DisabledButton = styled(StyledButton)`
    background-color: ${Color.TextGray};
    color: ${Color.BgDark};
    &:hover {
        background-color: ${Color.TextGray};
    }
    cursor: initial;
`

export const Button = (props: ButtonProps) => {
    const [ripple, event] = useRipple({
        color: Color.RipleBtn
    })

    if (props.disabled) {
        return <DisabledButton maxW="fit-content" {...props} />
    }

    if (props.variant === "outline") {
        return <OutlineButton maxW="fit-content" {...props} ref={ripple} onMouseDown={event} />
    }

    return <StyledButton maxW="fit-content" {...props} ref={ripple} onMouseDown={event} />
}
