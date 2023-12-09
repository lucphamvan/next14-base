import styled from "@emotion/styled"

import { Media } from "./menu.config"

export const StyledContainer = styled.div`
    display: flex;
    height: 100%;
`

export const StyledMainContent = styled.div<{ sidebarExpand: boolean }>`
    flex: 1;
    padding: 4.4rem 2rem 2rem 0;
    margin-left: ${({ sidebarExpand }) => (sidebarExpand ? "250px" : "100px")};
    transition: margin-left 0.3s;
    height: 100%;

    ${Media.Mobile} {
        margin-left: 0;
        padding: 4.4rem 1rem 2rem 1rem;
    }
`

export const StyledSidebar = styled.div<{ isExpand: boolean }>`
    width: ${({ isExpand }) => (isExpand ? "250px" : "fit-content")};
    padding: 1.75rem;
    padding-top: 4.4rem;
    position: fixed;
    height: 100vh;
    z-index: 1;
    transition: all 0.3s;
    display: block;

    ${Media.Mobile} {
        display: none;
    }
`

export const StyledHeader = styled.div`
    width: 100%;
    height: 64px;
    background-color: ${({ theme }) => theme.Color.BgMain};
    position: fixed;
    z-index: 2;
    display: flex;
    align-items: center;
    padding: 0 2rem;
    ${Media.Mobile} {
        padding: 0 1rem;
    }
    justify-content: space-between;
`
