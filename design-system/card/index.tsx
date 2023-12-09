"use client"

import { CardBody, CardProps, Card as ChakraCard, theme } from "@chakra-ui/react"
import styled from "@emotion/styled"

const StyledCard = styled(ChakraCard)`
    background-color: ${({ bg, theme: { Color } }) => bg || Color.BgCard};
    color: ${({ theme: { Color } }) => Color.TextPrimary};
    box-shadow: ${({ theme }) => theme.Color.BoxShadow_Toast};
`

export const Card = (props: CardProps) => {
    return (
        <StyledCard {...props}>
            <CardBody>{props.children}</CardBody>
        </StyledCard>
    )
}
