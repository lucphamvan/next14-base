import { Badge } from "@/design-system"
import useColor from "@/hook/useColor"
import { Task, TaskStatus } from "@/model/task"
import { formatDate } from "@/utils/date.util"
import { Flex, Stack, Text, Tooltip } from "@chakra-ui/react"
import styled from "@emotion/styled"
import React from "react"
import { ImCheckmark, ImFire, ImPlay, ImRedo, ImStop } from "react-icons/im"

import { Icon } from "./index.styled"

const StyledStack = styled(Stack)`
    background: linear-gradient(120deg, rgba(40, 55, 56, 1), #263233);
    color: ${({ theme }) => theme.Color.TextPrimary};
    box-shadow: ${({ theme }) => theme.Color.BoxShadow_Toast};
    border-radius: 4px;
    border: none;
    padding: 1rem;
`

const HintText = ({ label, children }: { label: string; children: React.ReactNode }) => {
    return (
        <Tooltip label={label} placement="top" py="2" rounded="4px" bg="gray.600" _dark={{ bg: "gray.600" }}>
            <Flex>{children}</Flex>
        </Tooltip>
    )
}

interface Props {
    task: Task
    finishTask: (id: string) => void
    unFinishTask: (id: string) => void
    removeTask: (id: string) => void
    startTask: (id: string) => void
    status: string
}

const TaskItem = ({ task, finishTask, unFinishTask, removeTask, startTask }: Props) => {
    const Color = useColor()
    const isInProgress = task.status === TaskStatus.IN_PROGRESS
    const isDone = task.status === TaskStatus.DONE
    const isTodo = task.status === TaskStatus.TODO
    const showFinishIcon = task.status === TaskStatus.TODO || task.status === TaskStatus.IN_PROGRESS

    return (
        <StyledStack key={task.id}>
            <Flex alignItems="center" gap="2">
                <Flex flexGrow={1} alignItems="center" gap="2">
                    {isTodo && (
                        <HintText label="Start task">
                            <Icon as={ImPlay} onClick={() => startTask(task.id)} />
                        </HintText>
                    )}
                    {isInProgress && (
                        <HintText label="Stop task">
                            <Icon as={ImStop} onClick={() => unFinishTask(task.id)} />
                        </HintText>
                    )}
                    <Text _firstLetter={{ textTransform: "uppercase" }} textDecoration={task.status === "done" ? "line-through" : "initial"}>
                        {task.name}
                    </Text>
                </Flex>
                {showFinishIcon && (
                    <HintText label="Finish task">
                        <Icon as={ImCheckmark} onClick={() => finishTask(task.id)} />
                    </HintText>
                )}
                {isDone && (
                    <HintText label="Unfinish task">
                        <Icon as={ImRedo} onClick={() => unFinishTask(task.id)} />
                    </HintText>
                )}
                <HintText label="Remove task">
                    <Icon as={ImFire} onClick={() => removeTask(task.id)} />
                </HintText>
            </Flex>
            <Text as="span" fontSize="12.5px" color={Color.TextSecondary}>
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
