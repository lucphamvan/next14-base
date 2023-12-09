"use client"

import { Font } from "@/config/font"
import { Title } from "@/design-system"
import useColor from "@/hook/useColor"
import { Box, Center, Divider, Flex } from "@chakra-ui/react"

const NotFoundPage = () => {
    const Color = useColor()
    return (
        <Center height="100%">
            <Flex alignItems="center" gap="8">
                <Title fontSize="5xl" fontWeight="500" color={Color.Primary} className={Font.brand.className}>
                    404
                </Title>
                <Box height="40px">
                    <Divider orientation="vertical" />
                </Box>
                <Title fontWeight="500" fontSize="2xl" color={Color.Primary} textTransform="uppercase" className={Font.brand.className}>
                    This page could not be found
                </Title>
            </Flex>
        </Center>
    )
}
export default NotFoundPage
