export enum TaskStatus {
    TODO = "todo",
    DONE = "done",
    IN_PROGRESS = "in_progress"
}

export interface Task {
    id: string
    name: string
    status: TaskStatus
    createdAt: number
    updatedAt: number
}

export interface CreateTaskRequest {
    name: string
    status: TaskStatus
}

export interface UpdateTaskRequest {
    name?: string
    status?: TaskStatus
}
