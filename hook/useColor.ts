import { DarkColor, LightColor } from "@/config/color"
import { useColorModeValue } from "@chakra-ui/react"

const useColor = () => {
    const color = useColorModeValue(LightColor, DarkColor)
    return color
}

export default useColor
