"use client"

import { Icon as ChakraIcon, Tooltip } from "@chakra-ui/react"
import styled from "@emotion/styled"

export const Icon = styled(ChakraIcon)`
    color: ${({ theme }) => theme.Color.Primary};
    cursor: pointer;
    font-size: 16px;
    &:hover {
        color: #507015;
    }
    &:active {
        zoom: 0.95;
    }
    transition: zoom 1s ease-in-out;
`

export const HintText = styled(Tooltip)`
    &.custom-tooltip {
        font-size: 13px;
        font-weight: 400;
        padding: 6px 12px;
        min-height: 32px;
        border-radius: 3px;
    }
`
