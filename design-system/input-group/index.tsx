"use client"

import { InputGroup as ChakraInputGroup } from "@chakra-ui/react"
import styled from "@emotion/styled"

export const InputGroup = styled(ChakraInputGroup)`
    .chakra-input__left-element + .chakra-input {
        padding-left: 2.25rem;
    }
    .chakra-input__right-element + .chakra-input {
        padding-right: 2.25rem;
    }
`
