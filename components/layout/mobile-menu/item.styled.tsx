import { Font } from "@/config/font"
import styled from "@emotion/styled"

export const Li = styled.li`
    list-style: none;
`

export const Flex = styled.div<{ $isActive: boolean }>`
    display: flex;
    align-items: center;
    cursor: pointer;
    ${Font.title.style};
    color: ${({ $isActive, theme: { Color } }) => ($isActive ? Color.TextMenuActive : Color.TextSecondary)};
    gap: 0.75rem;
    min-height: 40px;
    padding: 0.5rem 1rem;
    font-weight: 400;
    border-radius: 4px;
    background-color: ${({ $isActive, theme: { Color } }) => ($isActive ? `${Color.BgMenu}` : "transparent")};
    &:hover {
        background-color: ${({ theme }) => theme.Color.BgMenu};
    }
    position: relative;
`

export const Collapse = styled.div<{ $isOpen: boolean }>`
    height: ${({ $isOpen }) => ($isOpen ? "initial" : "0")};
    transition: height 1.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    overflow: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
    padding-left: 0.5rem;
`
