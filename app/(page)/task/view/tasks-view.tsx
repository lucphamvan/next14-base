import { Color, Title } from "@/design-system"
import { TaskStatus } from "@/model/task"
import { Grid, GridItem, Stack } from "@chakra-ui/react"
import { Suspense } from "react"

import Page from "../loading"

interface Props {
    renderTask: (status: TaskStatus) => JSX.Element[]
}
const TasksView = ({ renderTask }: Props) => {
    return (
        <Suspense fallback={<Page />}>
            <Grid
                columnGap={[4, 8]}
                templateColumns={[
                    "repeat(1, minmax(0,1fr))",
                    "repeat(1, minmax(0,1fr))",
                    "repeat(3, minmax(0,1fr))",
                    "repeat(3, minmax(0,1fr))",
                    "repeat(3, minmax(0,1fr))"
                ]}
                gap="2"
            >
                <GridItem>
                    <Stack spacing="6" w="100%">
                        <Title color={Color.Primary} fontWeight="500" pl={4}>
                            TODO
                        </Title>
                        {renderTask(TaskStatus.TODO)}
                    </Stack>
                </GridItem>
                <GridItem>
                    <Stack spacing="6" w="100%">
                        <Title color={Color.Primary} fontWeight="500" pl={4}>
                            IN PROGRESS
                        </Title>
                        {renderTask(TaskStatus.IN_PROGRESS)}
                    </Stack>
                </GridItem>
                <GridItem>
                    <Stack spacing="6" w="100%">
                        <Title color={Color.Primary} fontWeight="500" pl={4}>
                            RECENT DONE
                        </Title>
                        {renderTask(TaskStatus.DONE)}
                    </Stack>
                </GridItem>
            </Grid>
        </Suspense>
    )
}

export default TasksView
