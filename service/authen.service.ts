import { API, api } from "@/config/api"
import { AuthenResponse } from "@/model/auth"
import axios from "axios"

export const refreshAccessToken = async (refreshToken: string) => {
    const response = await fetch(API.REFRESH_TOKEN, {
        body: JSON.stringify({ token: refreshToken }),
        method: "POST"
    })
    const token = (await response.json()) as string
    return token
}

export const login = async (email: string, password: string) => {
    const response = await axios.post(API.LOGIN, { email, password })
    const data = response.data as AuthenResponse
    return data
}
