"use client"

import { useMemo, useState } from "react"

import { Container, UL } from "./index.styled"
import Item from "./item"
import { Menu as MenuType } from "./type"

interface MenuProps {
    showText?: boolean
    items: MenuType[]
}

const Menu = ({ items, showText }: MenuProps) => {
    const Items = useMemo(() => {
        return items?.map((item) => {
            return <Item key={item.id} item={item} showText={showText} />
        })
    }, [items, showText])

    return (
        <Container>
            <UL>{Items}</UL>
        </Container>
    )
}

export default Menu
