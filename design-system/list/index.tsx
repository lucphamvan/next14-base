"use client"

import { ListItem as ChakraListItem, ListItemProps } from "@chakra-ui/react"
import useRipple from "use-ripple-hook"

import { Color } from "../config/color"

export { List, ListIcon } from "@chakra-ui/react"

interface Props extends ListItemProps {
    children: React.ReactNode
}
export const ListItem = ({ children, ...props }: Props) => {
    const [ref, event] = useRipple({ color: Color.Ripple })
    return (
        <ChakraListItem ref={ref} onMouseDown={event} alignItems="center" display="flex" py="2" px="4" {...props}>
            {children}
        </ChakraListItem>
    )
}
