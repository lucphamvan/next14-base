import styled from "@emotion/styled"

export const Overlay = styled.div<{ $isShow: boolean }>`
    width: ${({ $isShow }) => ($isShow ? "100vw" : "0")};
    height: 100vh;
    position: fixed;
    z-index: 3;
    background-color: ${({ $isShow }) => ($isShow ? "rgba(0, 0, 0, 0.5)" : "transparent")};
    left: 0;
    top: 0;
    overflow-x: hidden;
    transition: width 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
`

export const Container = styled.div<{ $isShow: boolean }>`
    width: ${({ $isShow }) => ($isShow ? "70vw" : "0")};
    height: 100%;
    max-width: 300px;
    background-color: #1b2627;
    padding: 0;
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
`

export const Wrapper = styled.div`
    display: flex;
    height: 64px;
    align-items: center;
    padding: 0 1rem;
`

export const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.25rem 0.5rem;
`
