"use client"

import useColor from "@/hook/useColor"
import { ButtonProps, Button as ChakraButton, chakra } from "@chakra-ui/react"
import styled from "@emotion/styled"
import useRipple from "use-ripple-hook"

const StyledButton = styled(ChakraButton)`
    border-radius: 0.25rem;
    padding: 6px 16px;
    /* text-transform: uppercase; */
    font-weight: 600;
    color: ${({ theme }) => theme.Color.TextBtn};
    background-color: ${({ theme }) => theme.Color.Primary};
    background: linear-gradient(90deg, #b2f35f 0%, #bbe77d 100%);
    &:hover {
        background-color: ${({ theme }) => theme.Color.PrimaryHover};
        background: linear-gradient(90deg, #9eda51 0%, #aacc7b 100%);
    }
    height: initial;
`

const OutlineButton = styled(StyledButton)`
    background: transparent;
    border: 1px solid ${({ theme }) => theme.Color.Primary};
    color: ${({ theme }) => theme.Color.Primary};
    font-weight: 400;
    &:hover {
        background: ${({ theme }) => theme.Color.OutlineHover};
    }
`

const DisabledButton = styled(StyledButton)`
    background: ${({ theme: { Color } }) => Color.TextSecondary};
    color: ${({ theme: { Color } }) => Color.BgMain};
    &:hover {
        background: ${({ theme: { Color } }) => Color.TextSecondary} !important;
    }
    border: none;
    cursor: initial !important;
`

export const Button = (props: ButtonProps) => {
    const Color = useColor()
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
