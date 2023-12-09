"use client"

import { ButtonProps, Button as ChakraButton, chakra } from "@chakra-ui/react"
import styled from "@emotion/styled"
import useRipple from "use-ripple-hook"

import { Color } from "../config/color"

const StyledButton = styled(ChakraButton)`
    border-radius: 0.25rem;
    padding: 6px 16px;
    /* text-transform: uppercase; */
    font-weight: 600;
    color: ${Color.TextBtn};
    background-color: ${Color.Primary};
    background: linear-gradient(90deg, #b2f35f 0%, #bbe77d 100%);
    &:hover {
        background-color: ${Color.PrimaryHover};
        background: linear-gradient(90deg, #9eda51 0%, #aacc7b 100%);
    }
    height: initial;
`

const OutlineButton = styled(StyledButton)`
    background: transparent;
    border: 1px solid ${Color.Primary};
    color: ${Color.Primary};
    font-weight: 400;
    &:hover {
        background: ${Color.OutlineHover};
    }
`

const DisabledButton = styled(StyledButton)`
    background: ${Color.TextSecondary};
    color: ${Color.BgDark};
    &:hover {
        background: ${Color.TextSecondary} !important;
    }
    border: none;
    cursor: initial !important;
`

export const Button = (props: ButtonProps) => {
    const [ripple, event] = useRipple({
        color: Color.RipleBtn
    })

    if (props.isDisabled) {
        return <DisabledButton maxW="fit-content" {...props} />
    }

    if (props.variant === "outline") {
        return <OutlineButton maxW="fit-content" {...props} ref={ripple} onMouseDown={event} />
    }

    return <StyledButton maxW="fit-content" {...props} ref={ripple} onMouseDown={event} />
}
