import { API, api } from "@/config/api"
import { User } from "@/model/auth"
import { CreateUserInput } from "@/model/user"

import { withToken } from "./utils"

export const getUsers = async (token?: string) => {
    const response = await api.get(API.GET_USERS, withToken(token))
    const data = response.data as GetListResponse<User>
    return data
}

export const createUser = async (createUserInput: CreateUserInput) => {
    const response = await api.post(API.CREATE_USER, createUserInput)
    const data = response.data as User
    return data
}
