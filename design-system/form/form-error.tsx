import { Text } from "@chakra-ui/react"
import styled from "@emotion/styled"
import { FieldErrors, FieldValues } from "react-hook-form"

import { Color } from "../enum/color"

const FormErrorMessage = styled(Text)`
    color: ${Color.Error};
    font-weight: 300;
    margin-top: 0.25rem;
    font-size: 0.85rem;
`

interface FormErrorProps {
    errors: FieldErrors<FieldValues>
    name: string
}

export const FormError = ({ errors, name }: FormErrorProps) => {
    if (!errors[name] || !errors[name]?.message) {
        return null
    }
    return <FormErrorMessage>{errors[name]?.message?.toString()}</FormErrorMessage>
}
