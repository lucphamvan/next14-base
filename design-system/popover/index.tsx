"use client"

import { PopoverContent as ChakraPopOverContent, PopoverContentProps } from "@chakra-ui/react"

import { Color } from "../enum/color"

interface Props extends PopoverContentProps {
    children: React.ReactNode
}

export const PopoverContent = ({ children, ...props }: Props) => {
    return (
        <ChakraPopOverContent border="none" bg={Color.BgCard} color={Color.TextLight} boxShadow={Color.BoxShadow} borderRadius="4px" {...props}>
            {children}
        </ChakraPopOverContent>
    )
}

export { Popover, PopoverAnchor, PopoverArrow, PopoverBody, PopoverTrigger, PopoverFooter, PopoverCloseButton } from "@chakra-ui/react"
