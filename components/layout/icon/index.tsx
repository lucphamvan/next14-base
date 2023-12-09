import { CSSProperties } from "react"
import { IconContext, IconType } from "react-icons"

interface Props {
    As: IconType
    color?: string
    size?: string
    onClick?: () => void
    style?: CSSProperties
}

const Icon = ({ As, onClick, color, size, style }: Props) => {
    return (
        <IconContext.Provider value={{ color, size, style }}>
            <As onClick={onClick} />
        </IconContext.Provider>
    )
}

export default Icon
