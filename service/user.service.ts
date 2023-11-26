import { API, api } from "@/config/api"
import { User } from "@/model/auth"

import { withToken } from "./utils"

export const getUsers = async (token?: string) => {
    const response = await api.get(API.GET_USERS, withToken(token))
    const data = response.data as GetListResponse<User>
    return data
}
