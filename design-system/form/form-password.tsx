import { Icon, InputRightElement } from "@chakra-ui/react"
import { useState } from "react"
import { FieldErrors, FieldValues } from "react-hook-form"
import { ImEye, ImEyeBlocked } from "react-icons/im"

import { FormGroup } from "."
import { Input } from "../input"
import { InputGroup } from "../input-group"

interface PasswordInputProps {
    label: string
    name: string
    errors: FieldErrors<FieldValues>
    register: any
}
const PasswordInput = ({ label, errors, name, register }: PasswordInputProps) => {
    const [showPassword, setShowPassword] = useState(false)
    const pwdType = showPassword ? "text" : "password"
    const pwdIcon = showPassword ? <Icon as={ImEye} color="gary.400" /> : <Icon as={ImEyeBlocked} color="gary.400" />

    const togglePassword = () => setShowPassword((v) => !v)

    return (
        <FormGroup name={name} errors={errors} label={label}>
            <InputGroup>
                <Input type={pwdType} placeholder="******" {...register(name)} />
                <InputRightElement cursor="pointer" onClick={togglePassword}>
                    {pwdIcon}
                </InputRightElement>
            </InputGroup>
        </FormGroup>
    )
}

export default PasswordInput
