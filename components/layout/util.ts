import { Menu } from "./menu/type"

export function getAllDescendantIds(menu: Menu): string[] {
    const ids: string[] = []
    function traverse(menuItem: Menu) {
        ids.push(menuItem.id)
        if (menuItem.children?.length) {
            for (const child of menuItem.children) {
                traverse(child)
            }
        }
    }
    traverse(menu)
    return ids
}
