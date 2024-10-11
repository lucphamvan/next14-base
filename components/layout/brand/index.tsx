import useColor from "@/hook/useColor"
import Link from "next/link"
import { useContext } from "react"
import { ImMenu, ImQuill } from "react-icons/im"

import { LayoutContext } from "../context"
import { MediaQuery, useMediaQuery } from "../hook/useMediaQuery"
import Icon from "../icon"
import * as Styled from "./index.styled"

interface Props {
    name: string
}

const Brand = ({ name }: Props) => {
    const Color = useColor()
    const { onToggleMenu, onToggleMobileMenu } = useContext(LayoutContext)
    const isMobile = useMediaQuery(MediaQuery.Mobile)

    return (
        <Styled.Wrapper>
            {isMobile ? (
                <Styled.Center onClick={onToggleMobileMenu}>
                    <Icon As={ImMenu} size="24px" color={Color.TextMenuActive} />
                </Styled.Center>
            ) : (
                <Styled.Center onClick={onToggleMenu}>
                    <Icon As={ImMenu} size="24px" color={Color.TextMenuActive} />
                </Styled.Center>
            )}
            <Styled.Wrapper style={{ paddingLeft: 10, gap: 2 }}>
                <Icon As={ImQuill} color={Color.Primary} size="32px" />
                <Styled.Text>
                    <Link href="/">{name}</Link>
                </Styled.Text>
            </Styled.Wrapper>
        </Styled.Wrapper>
    )
}

export default Brand
