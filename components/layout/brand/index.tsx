import { Color } from "@/design-system"
import Link from "next/link"
import { useContext } from "react"
import { ImMenu } from "react-icons/im"
import { MdGrass } from "react-icons/md"

import { LayoutContext } from "../context"
import { MediaQuery, useMediaQuery } from "../hook/useMediaQuery"
import Icon from "../icon"
import { Center, Container, Name } from "./index.styled"

interface BrandProps {
    name: string
}

const Brand = ({ name }: BrandProps) => {
    const { onToggleMenu, onToggleMobileMenu } = useContext(LayoutContext)
    const isMobile = useMediaQuery(MediaQuery.Mobile)
    return (
        <Container>
            {isMobile ? (
                <Center onClick={onToggleMobileMenu}>
                    <Icon As={ImMenu} size="24px" />
                </Center>
            ) : (
                <Center onClick={onToggleMenu}>
                    <Icon As={ImMenu} size="24px" />
                </Center>
            )}
            <Container style={{ paddingLeft: 10, gap: 2 }}>
                <Icon As={MdGrass} color={Color.Primary} size="32px" />
                <Name>
                    <Link href="/">{name}</Link>
                </Name>
            </Container>
        </Container>
    )
}

export default Brand
