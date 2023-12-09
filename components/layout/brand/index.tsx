import { Color } from "@/design-system"
import Link from "next/link"
import { useContext } from "react"
import { ImMenu } from "react-icons/im"
import { MdGrass } from "react-icons/md"

import { LayoutContext } from "../context"
import { MediaQuery, useMediaQuery } from "../hook/useMediaQuery"
import Icon from "../icon"
import * as Styled from "./index.styled"

interface Props {
    name: string
}

const Brand = ({ name }: Props) => {
    const { onToggleMenu, onToggleMobileMenu } = useContext(LayoutContext)
    const isMobile = useMediaQuery(MediaQuery.Mobile)
    return (
        <Styled.Wrapper>
            {isMobile ? (
                <Styled.Center onClick={onToggleMobileMenu}>
                    <Icon As={ImMenu} size="24px" />
                </Styled.Center>
            ) : (
                <Styled.Center onClick={onToggleMenu}>
                    <Icon As={ImMenu} size="24px" />
                </Styled.Center>
            )}
            <Styled.Wrapper style={{ paddingLeft: 10, gap: 2 }}>
                <Icon As={MdGrass} color={Color.Primary} size="32px" />
                <Styled.Text>
                    <Link href="/">{name}</Link>
                </Styled.Text>
            </Styled.Wrapper>
        </Styled.Wrapper>
    )
}

export default Brand
