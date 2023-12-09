"use client"

import { FormControl as ChakraFormControl, FormLabel as ChakraFormLabel } from "@chakra-ui/react"
import styled from "@emotion/styled"
import { FieldErrors, FieldValues } from "react-hook-form"

import { Color } from "../config/color"
import { FormError } from "./form-error"

export const FormControl = styled(ChakraFormControl)``

export const FormLabel = styled(ChakraFormLabel)`
    font-size: 0.875rem;
    font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
    color: ${Color.TextPrimary};
    span[role="presentation"] {
        color: ${Color.Error};
    }
    margin-bottom: 0.25rem;
`

interface Props {
    label?: string
    isRequired?: boolean
    errors: FieldErrors<FieldValues>
    name: string
    children: React.ReactNode
}
export const FormGroup: React.FC<Props> = ({ label, errors, name, children, isRequired }: Props) => {
    return (
        <FormControl id={name} isInvalid={Boolean(errors[name])} isRequired={isRequired}>
            {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            {children}
            <FormError errors={errors} name={name} />
        </FormControl>
    )
}

export { FormError } from "./form-error"
