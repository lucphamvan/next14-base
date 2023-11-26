import { auth } from "@/app/api/auth/[...nextauth]/config"
import { Card } from "@/design-system"
import { formatDate } from "@/utils/date.util"
import { Grid, GridItem, Stack } from "@chakra-ui/react"

interface RowProp {
    name: string
    label: string | number
}

const Row = ({ name, label }: RowProp) => {
    return (
        <Grid templateColumns={"1fr 1fr"}>
            <GridItem>{name}</GridItem>
            <GridItem>{label}</GridItem>
        </Grid>
    )
}

const UsersPage = async () => {
    const session = await auth()
    if (!session) {
        return null
    }
    const { user } = session
    return (
        <Card>
            <Stack gap={4}>
                <Row name="Name" label={user.name} />
                <Row name="Email" label={user.email} />
                <Row name="Join date" label={formatDate(new Date(user.createdAt))} />
            </Stack>
        </Card>
    )
}
export default UsersPage
