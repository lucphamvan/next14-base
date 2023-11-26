import React from "react"

interface LayoutContextProps {
    isOpenMenu: boolean
    onToggleMenu: () => void
    isOpenMobileMenu: boolean
    onToggleMobileMenu: () => void
    activeItem: string
    setActiveItem: (item: string) => void
}

export const LayoutContext = React.createContext<LayoutContextProps>({} as LayoutContextProps)
