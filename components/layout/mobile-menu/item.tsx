import { Color } from "@/design-system"
import { useRouter } from "next/navigation"
import { CSSProperties, useContext, useMemo } from "react"
import { ImCtrl } from "react-icons/im"
import useRipple from "use-ripple-hook"

import { LayoutContext } from "../context"
import { useDisclosure } from "../hook/useDisclosure"
import Icon from "../icon"
import { Menu as MenuType } from "../menu/type"
import { getAllDescendantIds } from "../util"
import { Ul } from "./index.styled"
import { Collapse, Flex, Li } from "./item.styled"

const COLLAPSE_ICON_STYLE: CSSProperties = { position: "absolute", right: "1rem", paddingTop: "0.25rem", transform: "rotate(180deg)" }
const ICON_STYLE = { paddingBottom: "0.25rem" }

interface Props {
    item: MenuType
}

const Item = ({ item }: Props) => {
    const { activeItem, setActiveItem, onToggleMobileMenu } = useContext(LayoutContext)
    const { isOpen, onToggle: onToggleCollapse } = useDisclosure()
    const router = useRouter()
    const [ref, event] = useRipple({ color: Color.Ripple })
    const hasChildren = useMemo(() => item.children?.length, [item.children])

    const onItemClick = () => {
        !hasChildren && setActiveItem(item.id)
        !hasChildren && onToggleMobileMenu()
        hasChildren && onToggleCollapse()
        item.path && router.push(item.path)
    }

    const isActive = useMemo(() => {
        const descentantIds = getAllDescendantIds(item)
        return activeItem === item.id || descentantIds.includes(activeItem)
    }, [activeItem, item])

    return (
        <Li>
            <Flex $isActive={isActive} onClick={onItemClick} ref={ref} onMouseDown={event}>
                {item.icon && <Icon As={item.icon} size="20px" style={ICON_STYLE} />}
                <div>{item.name}</div>
                {hasChildren && <Icon As={ImCtrl} size="20px" style={COLLAPSE_ICON_STYLE} />}
            </Flex>
            {hasChildren && (
                <Collapse $isOpen={isOpen}>
                    <Ul>
                        {item.children?.map((child) => {
                            return <Item key={child.name} item={child} />
                        })}
                    </Ul>
                </Collapse>
            )}
        </Li>
    )
}

export default Item
