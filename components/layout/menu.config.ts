import { ImFilter, ImHome, ImLoop2, ImSortAmountAsc, ImUser } from "react-icons/im"
import { IoCreateOutline, IoPersonOutline, IoSettingsOutline } from "react-icons/io5"

import { Menu } from "./menu/type"

export const Media = {
    Desktop: "@media screen and (min-width: 1024px)",
    Tablet: "@media screen and (min-width: 768px) and (max-width: 1023px)",
    Mobile: `@media screen and (max-width: 767px)`
}

export const menu: Menu[] = [
    {
        id: "task",
        name: "Task",
        icon: IoCreateOutline,
        path: "/task"
    },
    {
        id: "profile",
        name: "Profile",
        icon: IoPersonOutline,
        path: "/users"
    },
    {
        id: "setting",
        name: "Setting",
        icon: IoSettingsOutline,
        children: [
            {
                id: "setting-filter",
                name: "Filter",
                path: "/setting/filter",
                icon: ImFilter
            },
            {
                id: "setting-add",
                name: "Add",
                path: "/setting/add",
                icon: ImSortAmountAsc
            },
            {
                id: "setting-visit",
                name: "Visit",
                path: "/setting/visit",
                icon: ImLoop2
            }
        ]
    }
]
