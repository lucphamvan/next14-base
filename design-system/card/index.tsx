"use client"

import { Color } from "../enum/color"
import { CardBody, CardProps, Card as ChakraCard } from "@chakra-ui/react"
import styled from "@emotion/styled"

const StyledCard = styled(ChakraCard)`
    background-color: ${({ bg }) => bg || Color.BgCard};
    box-shadow: unset;
    color: ${Color.TextLight};
`

export const Card = (props: CardProps) => {
    return (
        <StyledCard {...props}>
            <CardBody>{props.children}</CardBody>
        </StyledCard>
    )
}