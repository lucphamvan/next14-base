"use client"

import { Button, Card, Color, Font, Input, Title } from "@/design-system"
import { Box, Divider, Flex, Grid, GridItem, Icon, Stack, Text } from "@chakra-ui/react"
import { Suspense, useCallback } from "react"
import { ImRocket } from "react-icons/im"

import useTask from "./hook/useTask"
import TaskItem from "./item"
import Loading from "./loading"

const Page = () => {
    const { text, tasks, finishTask, handleAddTask, handleKeyDown, onTextChange, removeTask, unFinishTask, startTask } = useTask()

    const renderTask = useCallback(
        (status: "todo" | "in progress" | "done") => {
            return tasks
                .filter((t) => t.status === status)
                .map((task) => {
                    return (
                        <TaskItem
                            key={task.id}
                            task={task}
                            startTask={startTask}
                            finishTask={finishTask}
                            unFinishTask={unFinishTask}
                            removeTask={removeTask}
                            status={task.status}
                        />
                    )
                })
        },
        [tasks, finishTask, removeTask, unFinishTask, startTask]
    )

    return (
        <Card minHeight="100%">
            <Stack gap="2rem">
                <Stack>
                    <Title fontSize="2xl" fontWeight="700">
                        Task management
                    </Title>
                    <Flex h="30px" alignItems="center" gap="4">
                        <Icon as={ImRocket} fontSize="24px" color={Color.Primary} />
                        <Divider color={Color.BgInput} orientation="vertical" borderLeftWidth="2px" />
                        <Text fontSize="0.875rem" color={Color.TextGray} className={Font.title.className}>
                            Enjoy your day with task management
                        </Text>
                    </Flex>
                </Stack>
                <Flex gap="4" w="100%">
                    <Input
                        value={text}
                        onChange={onTextChange}
                        placeholder="Insert your task"
                        variant="flushed"
                        flexGrow={1}
                        onKeyDown={handleKeyDown}
                    />
                    <Box>
                        <Button onClick={handleAddTask} w="max-content">
                            Add task
                        </Button>
                    </Box>
                </Flex>
                <Suspense fallback={<Loading />}>
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
                                {renderTask("todo")}
                            </Stack>
                        </GridItem>
                        <GridItem>
                            <Stack spacing="6" w="100%">
                                <Title color={Color.Primary} fontWeight="500" pl={4}>
                                    IN PROGRESS
                                </Title>
                                {renderTask("in progress")}
                            </Stack>
                        </GridItem>
                        <GridItem>
                            <Stack spacing="6" w="100%">
                                <Title color={Color.Primary} fontWeight="500" pl={4}>
                                    DONE
                                </Title>
                                {renderTask("done")}
                            </Stack>
                        </GridItem>
                    </Grid>
                </Suspense>
            </Stack>
        </Card>
    )
}

export default Page
