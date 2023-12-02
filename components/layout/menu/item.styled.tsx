import { Color, Font } from "@/design-system"
import styled from "@emotion/styled"

export const UL = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 250px;
    padding: 0.25rem 0;
    margin-left: 0.5rem;
    border-radius: 4px;
    background-color: ${Color.BgMenu};
`

export const LI = styled.li`
    position: relative;
    padding: 0;
`

interface ItemContainerProps {
    $isActive: boolean
    $isHover: boolean
}

export const ItemContainer = styled.div<ItemContainerProps>`
    cursor: pointer;
    align-items: center;
    display: flex;
    gap: 0.75rem;
    min-height: 40px;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-weight: 400;
    ${Font.title.style};

    transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    background-color: ${({ $isActive, $isHover }) => ($isActive || $isHover ? `${Color.BgMenu}` : "transparent")};
    color: ${({ $isActive, $isHover }) => ($isActive || $isHover ? Color.TextLight : Color.TextGray)};
    &:hover {
        background-color: ${Color.BgMenu};
    }
`
export const Stack = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    /* position="absolute" left="100%" top="0" */
    position: absolute;
    left: 100%;
    top: 0;
`