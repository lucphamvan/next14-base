import { Im500Px, ImCheckmark, ImDropbox, ImEdge, ImFilter, ImGift, ImHome, ImLoop2, ImSortAmountAsc, ImSteam, ImUser } from "react-icons/im"

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
        icon: ImCheckmark,
        path: "/task"
    },
    {
        id: "profile",
        name: "Profile",
        icon: ImUser,
        path: "/users"
    },
    {
        id: "setting",
        name: "Setting",
        icon: ImHome,
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
