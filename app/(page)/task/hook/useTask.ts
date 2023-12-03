import { CreateTaskRequest, Task, TaskStatus } from "@/model/task"
import { deleteTask, getTasks, updateTask } from "@/service/task.service"
import { useSession } from "next-auth/react"
import { useState } from "react"

// this is a custom hook use to handle task such as add, remove, update, ...
const useTask = (initTasks: Task[]) => {
    const [tasks, setTasks] = useState<Task[]>(initTasks || [])
    const { data } = useSession()
    const token = data?.accessToken || ""

    const finishTask = async (id: string) => {
        const updateTaskRequest: Partial<CreateTaskRequest> = {
            status: TaskStatus.DONE
        }
        await updateTask(id, updateTaskRequest, token)
        await fetchTasks()
    }

    const unFinishTask = async (id: string) => {
        const updateTaskRequest: Partial<CreateTaskRequest> = {
            status: TaskStatus.TODO
        }
        await updateTask(id, updateTaskRequest, token)
        await fetchTasks()
    }

    const startTask = async (id: string) => {
        const updateTaskRequest: Partial<CreateTaskRequest> = {
            status: TaskStatus.IN_PROGRESS
        }
        await updateTask(id, updateTaskRequest, token)
        await fetchTasks()
    }

    const removeTask = async (id: string) => {
        await deleteTask(id, token)
        await fetchTasks()
    }

    const fetchTasks = async () => {
        const data = (await getTasks(token)) as GetListResponse<Task>
        setTasks(data.items)
    }

    return { tasks, removeTask, unFinishTask, finishTask, startTask, fetchTasks }
}

export default useTask
