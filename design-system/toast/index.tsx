"use client"

import useColor from "@/hook/useColor"
import { Box, Icon, useToast as useChakraToast } from "@chakra-ui/react"
import { IoCloseOutline } from "react-icons/io5"

import { Font } from "../../config/font"
import { StyledCloseBox, StyledContainer, StyledContentBox, StyledIconBox, StyledVerticalLine, ToastType, toastInfo } from "./index.styled"

interface Props {
    title?: string
    message?: string
    type: ToastType
    onClose?: () => void
}

const ToastMessage = ({ title, message, type, onClose }: Props) => {
    const Color = useColor()
    return (
        <StyledContainer type={type}>
            <StyledIconBox>
                <Icon as={toastInfo[type].icon} color={toastInfo[type].color} boxSize={message ? 8 : 7} />
            </StyledIconBox>
            <StyledVerticalLine type={type} />
            <StyledContentBox>
                {title && (
                    <Box fontSize="16px" color={toastInfo[type].color} fontWeight="bold" className={Font.secondary.className}>
                        {title}
                    </Box>
                )}
                {message && (
                    <Box fontSize="15px" color={Color.TextSecondary} className={Font.secondary.className}>
                        {message}
                    </Box>
                )}
            </StyledContentBox>
            <StyledCloseBox onClick={onClose} color={Color.OutlineHover}>
                <Icon as={IoCloseOutline} color="white" boxSize="5" />
            </StyledCloseBox>
        </StyledContainer>
    )
}

export const useNotify = () => {
    const toast = useChakraToast({
        position: "top-right",
        duration: 5000
    })

    const notify = (type: "success" | "error" | "warning" | "info", title?: string, message?: string) => {
        toast({
            render: ({ onClose }) => <ToastMessage title={title} message={message} type={type} onClose={onClose} />
        })
    }

    return { notify }
}
