import { API, api } from "@/config/api"
import { CreateTaskRequest, Task } from "@/model/task"
import { sleep } from "@/utils"

import { withToken } from "./utils"

export const createTask = async (data: CreateTaskRequest, token: string) => {
    const response = await api.post(API.CREATE_TASK, data, withToken(token))
    return response.data as Task
}

export const getTasks = async (token: string, limit?: number, offset?: number) => {
    let option = withToken(token)
    if (limit) {
        option = { ...option, params: { limit, offset } }
    }
    const response = await api.get(API.GET_TASKS, option)
    return response.data as GetListResponse<Task>
}

export const getTask = async (id: string, token: string) => {
    const response = await api.get(API.GET_TASKS + "/" + id, withToken(token))
    return response.data as Task
}

export const updateTask = async (id: string, data: Partial<CreateTaskRequest>, token: string) => {
    const response = await api.patch(API.GET_TASKS + "/" + id, data, withToken(token))
    return response.data as Task
}

export const deleteTask = async (id: string, token: string) => {
    const response = await api.delete(API.GET_TASKS + "/" + id, withToken(token))
    return response.data
}
