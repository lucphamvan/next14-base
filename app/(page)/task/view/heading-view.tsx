import { Font } from "@/config/font"
import { Title } from "@/design-system"
import useColor from "@/hook/useColor"
import { Divider, Flex, Icon, Stack, Text } from "@chakra-ui/react"
import { ImRocket } from "react-icons/im"

const HeadingView = () => {
    const Color = useColor()
    return (
        <Stack>
            <Title fontSize="2xl" fontWeight="700">
                Task management
            </Title>
            <Flex h="30px" alignItems="center" gap="4">
                <Icon as={ImRocket} fontSize="24px" color={Color.Primary} />
                <Divider color={Color.BgInput} orientation="vertical" borderLeftWidth="2px" />
                <Text fontSize="0.875rem" color={Color.TextSecondary} className={Font.title.className}>
                    Enjoy your day with task management
                </Text>
            </Flex>
        </Stack>
    )
}
export default HeadingView
