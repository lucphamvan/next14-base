import { BoxShadow, Color, Font } from "@/design-system"
import styled from "@emotion/styled"

export const Ul = styled.ul`
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

export const Li = styled.li`
    position: relative;
    padding: 0;
`

interface WrapperProps {
    $isActive: boolean
    $isHover: boolean
}

export const Wrapper = styled.div<WrapperProps>`
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
    color: ${({ $isActive, $isHover }) => ($isActive || $isHover ? Color.TextPrimary : Color.TextSecondary)};
    &:hover {
        background-color: ${Color.BgMenu};
    }
    box-shadow: ${({ $isActive, $isHover }) => ($isActive || $isHover ? `${BoxShadow.Toast}` : "unset")};
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
