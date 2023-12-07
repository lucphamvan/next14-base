import { Flex, Icon, Text } from "@chakra-ui/react"
import styled from "@emotion/styled"
import { FieldErrors, FieldValues } from "react-hook-form"
import { IoWarningSharp } from "react-icons/io5"

import { Color } from "../config/color"

const FormErrorMessage = styled.div`
    color: ${Color.Error};
    font-weight: 400;
    font-size: 0.875rem;
    margin-top: 0.125rem;
`

interface FormErrorProps {
    errors: FieldErrors<FieldValues>
    name: string
}

export const FormError = ({ errors, name }: FormErrorProps) => {
    if (!errors[name] || !errors[name]?.message) {
        return null
    }
    return (
        <Flex alignItems="center" gap="1" mt="0.25rem">
            <Icon as={IoWarningSharp} color={Color.Error} />
            <FormErrorMessage>{errors[name]?.message?.toString()}</FormErrorMessage>
        </Flex>
    )
}
