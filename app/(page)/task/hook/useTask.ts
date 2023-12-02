import { randomString } from "@/utils/string.util"
import { useCallback, useEffect, useState } from "react"

export enum TaskStatus {
    TODO = "todo",
    DONE = "done",
    IN_PROGRESS = "in_progress"
}
export interface Task {
    id: string
    name: string
    status: TaskStatus
    updatedAt: number
}

// this is a custom hook use to handle task such as add, remove, update, ...
const useTask = () => {
    const [tasks, setTasks] = useState<Task[]>([])
    const [text, setText] = useState("")
    const [loading, setLoading] = useState(true)

    const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const handleAddTask = () => {
        if (!text) return
        const newTask: Task = {
            id: randomString(6),
            name: text,
            status: TaskStatus.TODO,
            updatedAt: Date.now()
        }

        setTasks((prevTasks) => {
            localStorage.setItem("tasks", JSON.stringify([...prevTasks, newTask]))
            return [...prevTasks, newTask]
        })
        setText("")
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleAddTask()
        }
    }

    const finishTask = useCallback(
        (id: string) => {
            setTasks((prevTasks) => {
                const newTasks = [...prevTasks]
                const taskIndex = newTasks.findIndex((task) => task.id === id)
                newTasks[taskIndex].status = TaskStatus.DONE
                newTasks[taskIndex].updatedAt = Date.now()
                localStorage.setItem("tasks", JSON.stringify(newTasks))
                return newTasks
            })
        },
        [setTasks]
    )

    const unFinishTask = useCallback(
        (id: string) => {
            setTasks((prevTasks) => {
                const newTasks = [...prevTasks]
                const taskIndex = newTasks.findIndex((task) => task.id === id)
                newTasks[taskIndex].status = TaskStatus.TODO
                newTasks[taskIndex].updatedAt = Date.now()
                localStorage.setItem("tasks", JSON.stringify(newTasks))
                return newTasks
            })
        },
        [setTasks]
    )

    const removeTask = useCallback(
        (id: string) => {
            setTasks((prevTasks) => {
                const newTasks = [...prevTasks]
                const taskIndex = newTasks.findIndex((task) => task.id === id)
                newTasks.splice(taskIndex, 1)
                localStorage.setItem("tasks", JSON.stringify(newTasks))
                return newTasks
            })
        },
        [setTasks]
    )

    const startTask = useCallback(
        (id: string) => {
            setTasks((prevTasks) => {
                const newTasks = [...prevTasks]
                const taskIndex = newTasks.findIndex((task) => task.id === id)
                newTasks[taskIndex].status = TaskStatus.IN_PROGRESS
                newTasks[taskIndex].updatedAt = Date.now()
                localStorage.setItem("tasks", JSON.stringify(newTasks))
                return newTasks
            })
        },
        [setTasks]
    )

    useEffect(() => {
        const tasks = localStorage.getItem("tasks")
        if (tasks) {
            setTasks(JSON.parse(tasks))
        }
        setLoading(false)
    }, [])

    return { text, onTextChange, tasks, handleAddTask, removeTask, unFinishTask, finishTask, handleKeyDown, startTask, loading }
}

export default useTask
