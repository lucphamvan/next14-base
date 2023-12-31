import { Font } from "@/config/font"
import styled from "@emotion/styled"

export const Text = styled.div`
    font-size: 1.35rem;
    font-weight: 700;
    color: ${({ theme }) => theme.Color.Primary};
    ${Font.brand.style}
    /* text-transform: uppercase; */
    white-space: nowrap;
    margin-top: 0.25rem;
`

export const Wrapper = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    cursor: pointer;
    flex-wrap: nowrap;
    user-select: none;
`

export const Center = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-color: ${({ theme }) => theme.Color.BgMenu};
    min-width: 40px;
    min-height: 40px;
`
