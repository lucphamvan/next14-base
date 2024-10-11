import { ImQuill } from "react-icons/im"
import { IoPersonOutline } from "react-icons/io5"

import { Menu } from "./menu/type"

export const Media = {
    Desktop: "@media screen and (min-width: 1024px)",
    Tablet: "@media screen and (min-width: 768px) and (max-width: 1023px)",
    Mobile: `@media screen and (max-width: 767px)`
}

export const menu: Menu[] = [
    {
        id: "hint",
        name: "Hint",
        icon: ImQuill,
        path: "/"
    },
    {
        id: "profile",
        name: "Profile",
        icon: IoPersonOutline,
        path: "/users"
    }
]
