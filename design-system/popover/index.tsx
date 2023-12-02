"use client"

import { PopoverContent as ChakraPopOverContent, PopoverContentProps } from "@chakra-ui/react"
import styled from "@emotion/styled"

import { BoxShadow, Color } from "../enum/color"

const StyledPopoverContent = styled(ChakraPopOverContent)`
    background: rgb(40, 55, 56);
    background: linear-gradient(120deg, rgba(40, 55, 56, 1), rgb(27, 38, 39));
    color: ${Color.TextLight};
    box-shadow: ${BoxShadow.Default};
    border-radius: 4px;
    border: none;
`

interface Props extends PopoverContentProps {
    children: React.ReactNode
}

export const PopoverContent = ({ children, ...props }: Props) => {
    return <StyledPopoverContent {...props}>{children}</StyledPopoverContent>
}

export { Popover, PopoverAnchor, PopoverArrow, PopoverBody, PopoverTrigger, PopoverFooter, PopoverCloseButton } from "@chakra-ui/react"
