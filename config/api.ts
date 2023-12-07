import axios from "axios"

const baseURL = "http://localhost:8000"

export const api = axios.create({
    baseURL
})

export enum API {
    LOGIN = "/users/login",
    REFRESH_TOKEN = baseURL + "/token/refresh",
    GET_USER = "/users/me",
    GET_USERS = "/users",
    CREATE_USER = "/users",
    CREATE_TASK = baseURL + "/tasks",
    GET_TASKS = baseURL + "/tasks"
}
