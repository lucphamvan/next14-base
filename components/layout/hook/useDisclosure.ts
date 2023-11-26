import { useState } from "react"

export const useDisclosure = (value = false) => {
    const [isOpen, setIsOpen] = useState(value)
    const onOpen = () => setIsOpen(true)
    const onClose = () => setIsOpen(false)
    const onToggle = () => setIsOpen((v) => !v)
    return { isOpen, onOpen, onClose, onToggle }
}
