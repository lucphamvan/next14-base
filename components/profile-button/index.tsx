import { List, ListIcon, ListItem, Popover, PopoverContent, PopoverTrigger } from "@/design-system"
import useColor from "@/hook/useColor"
import { Avatar, Stack, Text } from "@chakra-ui/react"
import { signOut, useSession } from "next-auth/react"
import { MdLogout } from "react-icons/md"

export const ProfileButton = () => {
    const { data, status } = useSession()
    const Color = useColor()

    if (status === "unauthenticated") {
        return null
    }

    return (
        <Popover placement="bottom-end">
            <PopoverTrigger>
                <button>
                    <Avatar bg={Color.Primary} size="sm" />
                </button>
            </PopoverTrigger>
            <PopoverContent>
                <Stack alignItems="center" py="4">
                    <Avatar bg={Color.Primary} />
                    <Text fontSize="lg" letterSpacing={1} mt="2">
                        {data?.user.name}
                    </Text>
                    <Text fontSize="sm" letterSpacing={1}>
                        {data?.user.email}
                    </Text>
                </Stack>
                <Stack py="4">
                    <List>
                        <ListItem cursor="pointer" fontSize="sm" _hover={{ background: Color.BgMenu }} onClick={() => signOut()} letterSpacing={1}>
                            <ListIcon as={MdLogout} />
                            Sign out
                        </ListItem>
                    </List>
                </Stack>
            </PopoverContent>
        </Popover>
    )
}
