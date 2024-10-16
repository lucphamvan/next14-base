"use client"

import { CardBody, CardProps, Card as ChakraCard, theme } from "@chakra-ui/react"
import styled from "@emotion/styled"

const StyledCard = styled(ChakraCard)`
    background: ${({ bg, theme: { Color } }) => bg || Color.BgCard};
    color: ${({ theme: { Color } }) => Color.TextPrimary};
    box-shadow: none;
`

export const Card = (props: CardProps) => {
    return (
        <StyledCard {...props}>
            <CardBody>{props.children}</CardBody>
        </StyledCard>
    )
}
