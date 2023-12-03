"use client"

import { Button, Card, Input } from "@/design-system"
import { Task, TaskStatus } from "@/model/task"
import { Box, Flex, Stack } from "@chakra-ui/react"
import { useCallback } from "react"

import useTask from "../hook/useTask"
import FormView from "./form-view"
import HeadingView from "./heading-view"
import TaskItem from "./item"
import TasksView from "./tasks-view"

interface Props {
    initTasks: Task[]
}
const PageView = ({ initTasks }: Props) => {
    const { tasks, finishTask, removeTask, unFinishTask, startTask, fetchTasks } = useTask(initTasks)

    const renderTask = useCallback(
        (status: TaskStatus) => {
            let filterTask = tasks
                .filter((t) => t.status === status)
                .sort((a, b) => {
                    return b.updatedAt - a.updatedAt
                })
            if (status === TaskStatus.DONE) {
                filterTask = filterTask.slice(0, 10)
            }

            return filterTask.map((task) => {
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
                <HeadingView />
                <FormView fetchTasks={fetchTasks} />
                <TasksView renderTask={renderTask} />
            </Stack>
        </Card>
    )
}

export default PageView
