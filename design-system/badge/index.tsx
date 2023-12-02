"use client"

import { BadgeProps, Badge as ChakraBadge } from "@chakra-ui/react"
import styled from "@emotion/styled"

const BaseBadge = styled(ChakraBadge)`
    padding: 1px 8px;
    border-radius: 3px;
    width: max-content;
    font-weight: 700;
`

const PrimaryBadge = styled(BaseBadge)`
    background: linear-gradient(90deg, #b2f35f 0%, #d5ff9c 100%);
    color: #000;
`

const HotBadge = styled(BaseBadge)`
    background: linear-gradient(90deg, #ffdb78 0%, #ffd334 100%);
    color: #000;
`

const InfoBadge = styled(BaseBadge)`
    background: linear-gradient(90deg, #94eaff 0%, #1e8cbb 100%);
    color: #000;
`

interface Props extends BadgeProps {
    children: React.ReactNode
    type?: "primary" | "error" | "warning" | "success" | "info"
}
export const Badge = ({ children, ...props }: Props) => {
    switch (props.type) {
        case "primary":
            return <PrimaryBadge {...props}>{children}</PrimaryBadge>
        case "info":
            return <InfoBadge {...props}>{children}</InfoBadge>
        case "warning":
            return <HotBadge {...props}>{children}</HotBadge>
        case "success":
        default:
            return <BaseBadge {...props}>{children}</BaseBadge>
    }
}
