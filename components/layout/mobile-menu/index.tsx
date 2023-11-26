import { BRAND_NAME } from "@/config/meta"
import { useContext } from "react"

import Brand from "../brand"
import { LayoutContext } from "../context"
import { MediaQuery, useMediaQuery } from "../hook/useMediaQuery"
import { Menu as MenuType } from "../menu/type"
import { BrandContainer, Container, Overlay, UL } from "./index.styled"
import Item from "./item"

interface MobileMenuProps {
    menu: MenuType[]
}

export const MobileMenu = ({ menu }: MobileMenuProps) => {
    const isMobile = useMediaQuery(MediaQuery.Mobile)
    const { isOpenMobileMenu, onToggleMobileMenu } = useContext(LayoutContext)

    const ListItems = menu.map((item) => {
        return <Item key={item.id} item={item} />
    })

    if (!isMobile) return null

    return (
        <Overlay $isShow={isOpenMobileMenu} onClick={onToggleMobileMenu}>
            <Container $isShow={isOpenMobileMenu} onClick={(e) => e.stopPropagation()}>
                <BrandContainer>
                    <Brand name={BRAND_NAME} />
                </BrandContainer>
                <UL>{ListItems}</UL>
            </Container>
        </Overlay>
    )
}
