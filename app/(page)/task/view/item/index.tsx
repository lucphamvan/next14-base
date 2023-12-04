import { Badge, BoxShadow, Color } from "@/design-system"
import { Task, TaskStatus } from "@/model/task"
import { formatDate } from "@/utils/date.util"
import { Flex, Stack, Text } from "@chakra-ui/react"
import styled from "@emotion/styled"
import React from "react"
import { ImCheckmark, ImFire, ImPlay, ImRedo, ImStop } from "react-icons/im"

import { HintText, Icon } from "./index.styled"

interface Props {
    task: Task
    finishTask: (id: string) => void
    unFinishTask: (id: string) => void
    removeTask: (id: string) => void
    startTask: (id: string) => void
    status: string
}

const Tooltip = ({ label, children, ...props }: { label: string; children: React.ReactNode; className?: string }) => {
    return (
        <HintText label={label} placement="top" hasArrow bg="gray.600" {...props} className="custom-tooltip">
            <Flex>{children}</Flex>
        </HintText>
    )
}

const StyledStack = styled(Stack)`
    background: linear-gradient(120deg, rgba(40, 55, 56, 1), #263233);
    color: ${Color.TextLight};
    box-shadow: ${BoxShadow.Toast};
    border-radius: 4px;
    border: none;
    padding: 1rem;
`
const TaskItem = ({ task, finishTask, unFinishTask, removeTask, startTask }: Props) => {
    const isInProgress = task.status === TaskStatus.IN_PROGRESS
    const isDone = task.status === TaskStatus.DONE
    const isTodo = task.status === TaskStatus.TODO
    const showFinishIcon = task.status === TaskStatus.TODO || task.status === TaskStatus.IN_PROGRESS

    return (
        <StyledStack key={task.id}>
            <Flex alignItems="center" gap="2">
                <Flex flexGrow={1} alignItems="center" gap="2">
                    {isTodo && (
                        <Tooltip label="Start task">
                            <Icon as={ImPlay} onClick={() => startTask(task.id)} />
                        </Tooltip>
                    )}
                    {isInProgress && (
                        <Tooltip label="Stop task">
                            <Icon as={ImStop} onClick={() => unFinishTask(task.id)} />
                        </Tooltip>
                    )}
                    <Text _firstLetter={{ textTransform: "uppercase" }} textDecoration={task.status === "done" ? "line-through" : "initial"}>
                        {task.name}
                    </Text>
                </Flex>
                {showFinishIcon && (
                    <Tooltip label="Finish task">
                        <Icon as={ImCheckmark} onClick={() => finishTask(task.id)} />
                    </Tooltip>
                )}
                {isDone && (
                    <Tooltip label="Unfinish task">
                        <Icon as={ImRedo} onClick={() => unFinishTask(task.id)} />
                    </Tooltip>
                )}
                <Tooltip label="Remove task">
                    <Icon as={ImFire} onClick={() => removeTask(task.id)} />
                </Tooltip>
            </Flex>
            <Text as="span" fontSize="12.5px" color={Color.TextGray}>
                Updated at {formatDate(new Date(task.updatedAt))}
            </Text>
            {isInProgress && (
                <Badge type="info" w="max-content">
                    {task.status}
                </Badge>
            )}
            {isDone && (
                <Badge type="primary" w="max-content">
                    {task.status}
                </Badge>
            )}
        </StyledStack>
    )
}
export default React.memo(TaskItem)
