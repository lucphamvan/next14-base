"use client"

import { useMemo } from "react"

import { Ul, Wrapper } from "./index.styled"
import Item from "./item"
import { Menu as MenuType } from "./type"

interface Props {
    showText?: boolean
    items: MenuType[]
}

const Menu = ({ items, showText }: Props) => {
    const menuItems = useMemo(() => {
        return items?.map((item) => {
            return <Item key={item.id} item={item} showText={showText} />
        })
    }, [items, showText])

    return (
        <Wrapper>
            <Ul>{menuItems}</Ul>
        </Wrapper>
    )
}

export default Menu
