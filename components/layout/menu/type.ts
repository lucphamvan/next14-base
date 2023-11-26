import { IconType } from "react-icons"

export interface Menu {
    id: string
    name: string
    icon?: IconType
    path?: string
    children?: Menu[]
}
