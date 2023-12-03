import { Box, Center } from "@chakra-ui/react"
import styled from "@emotion/styled"
import { IconType } from "react-icons"
import { IoCheckmarkCircle, IoCloseCircleSharp, IoInformationCircle, IoWarningSharp } from "react-icons/io5"

import { Color } from ".."

export interface Info {
    verticalLine: string
    icon: IconType
    color: string
    background: string
}

export type ToastType = "success" | "error" | "warning" | "info"

export const toastInfo: Record<ToastType, Info> = {
    success: {
        verticalLine: "linear-gradient(90deg, #8ede5b, #6fc296)",
        icon: IoCheckmarkCircle,
        color: "#7acc80",
        background: "linear-gradient(120deg, #28382e, #202c2d)"
    },
    error: {
        verticalLine: "linear-gradient(90deg, #FF093D, #FF6D01)",
        icon: IoCloseCircleSharp,
        color: "#F04248",
        background: "linear-gradient(120deg, #473535, #202c2d)"
    },
    warning: {
        verticalLine: "linear-gradient(90deg, #F7C020, #ffdb78)",
        icon: IoWarningSharp,
        color: "#F7C020",
        background: "linear-gradient(120deg, #423d30, #202c2d)"
    },
    info: {
        verticalLine: "linear-gradient(90deg, #2196f3, #03a9f4)",
        icon: IoInformationCircle,
        color: "#3ea5fa",
        background: "linear-gradient(120deg, #32414e, #202c2d)"
    }
}

export const StyledContainer = styled(Box)<{ type: ToastType }>`
    display: grid;
    grid-template-columns: auto auto 1fr;
    height: max-content;
    position: relative;
    border-radius: 4px;
    gap: 1rem;
    padding: 0 1rem;
    background: ${(props) => toastInfo[props.type].background};
    align-items: center;
`
export const StyledIconBox = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const StyledContentBox = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.5rem 1rem;
    padding-left: 0;
`

export const StyledCloseBox = styled(Center)`
    position: absolute;
    top: 0.25rem;
    right: 0.25rem;
    cursor: pointer;
    border-radius: 50%;
    &:hover {
        background: ${Color.OutlineHover};
    }
`

export const StyledVerticalLine = styled(Box)<{ type: ToastType }>`
    height: 50%;
    width: 2px;
    background: ${(props) => toastInfo[props.type].verticalLine};
    box-shadow: 0 0 6px ${(props) => toastInfo[props.type].color};
    border-radius: 4px;
`
