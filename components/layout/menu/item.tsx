import { Color } from "@/design-system"
import { useRouter } from "next/navigation"
import { useContext, useMemo, useState } from "react"
import { ImCtrl } from "react-icons/im"
import useRipple from "use-ripple-hook"

import { LayoutContext } from "../context"
import Icon from "../icon"
import { getAllDescendantIds } from "../util"
import { Li, Stack, Ul, Wrapper } from "./item.styled"
import { Menu as MenuType } from "./type"

type Props = {
    item: MenuType
    showText?: boolean
}

const EXPAND_ICON_STYLE: React.CSSProperties = { position: "absolute", right: "1rem", paddingTop: "0.25rem", transform: "rotate(90deg)" }
const ICON_STYLE = { paddingBottom: "0.125rem" }

const Item = ({ item, showText }: Props) => {
    const router = useRouter()
    const { setActiveItem, activeItem } = useContext(LayoutContext)
    const [ref, event] = useRipple({ color: Color.Ripple })

    const [isHover, setIsHover] = useState(false)
    const hasChildren = useMemo(() => item.children?.length, [item.children])

    // render children items
    const renderSubMenuItems = () => {
        return item.children?.map((child) => {
            return <Item key={child.id} item={child} showText />
        })
    }

    // on item click
    const onItemClick = () => {
        !hasChildren && setActiveItem(item.id)
        item.path && router.push(item.path)
    }

    const isActive = useMemo(() => {
        const descentantIds = getAllDescendantIds(item)
        return activeItem === item.id || descentantIds.includes(activeItem)
    }, [activeItem, item])

    return (
        <Li>
            <Wrapper
                $isActive={isActive}
                $isHover={isHover}
                onClick={onItemClick}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                onMouseDown={event}
                ref={ref}
            >
                {item.icon && <Icon As={item.icon} size="20px" style={ICON_STYLE} />}
                {showText && <div>{item.name}</div>}
                {showText && item.children?.length && <Icon As={ImCtrl} size="20px" style={EXPAND_ICON_STYLE} />}
            </Wrapper>
            {isHover && hasChildren && (
                <Stack onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                    <Ul>{renderSubMenuItems()}</Ul>
                </Stack>
            )}
        </Li>
    )
}

export default Item
