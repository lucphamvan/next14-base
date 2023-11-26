"use client"

import { ProfileButton } from "@/components/profile-button"
import { BRAND_NAME } from "@/config/meta"
import React, { useEffect, useState } from "react"

import Brand from "./brand"
import { LayoutContext } from "./context"
import { useDisclosure } from "./hook/useDisclosure"
import { StyledContainer as Container, StyledHeader as Header, StyledMainContent as MainContent, StyledSidebar as Sidebar } from "./index.styled"
import Menu from "./menu"
import { menu } from "./menu.config"
import { MobileMenu } from "./mobile-menu"

interface Props {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    const { isOpen: isOpenMenu, onToggle: onToggleMenu } = useDisclosure(true)
    const { isOpen: isOpenMobileMenu, onToggle: onToggleMobileMenu } = useDisclosure()
    const [activeItem, setActiveItem] = useState("")

    useEffect(() => {
        // prevent scroll when mobile menu is open
        window.document.body.style.overflow = isOpenMobileMenu ? "hidden" : "auto"
    }, [isOpenMobileMenu])

    return (
        <Container>
            <LayoutContext.Provider value={{ isOpenMenu, onToggleMenu, isOpenMobileMenu, onToggleMobileMenu, activeItem, setActiveItem }}>
                <Header>
                    <Brand name={BRAND_NAME} />
                    <ProfileButton />
                </Header>
                <Sidebar isExpand={isOpenMenu}>
                    <Menu showText={isOpenMenu} items={menu} />
                </Sidebar>
                <MobileMenu menu={menu} />
                <MainContent sidebarExpand={isOpenMenu}>{children}</MainContent>
            </LayoutContext.Provider>
        </Container>
    )
}

export default Layout
