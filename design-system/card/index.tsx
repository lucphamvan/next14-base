"use client"

import { CardBody, CardProps, Card as ChakraCard } from "@chakra-ui/react"
import styled from "@emotion/styled"

import { BoxShadow, Color } from "../config/color"

const StyledCard = styled(ChakraCard)`
    background-color: ${({ bg }) => bg || Color.BgCard};
    color: ${Color.TextPrimary};
    box-shadow: ${BoxShadow.Toast};
`

export const Card = (props: CardProps) => {
    return (
        <StyledCard {...props}>
            <CardBody>{props.children}</CardBody>
        </StyledCard>
    )
}
