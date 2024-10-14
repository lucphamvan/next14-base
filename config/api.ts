import axios from "axios"

const baseURL = "http://localhost:7070"

export const api = axios.create({
    baseURL
})

export enum API {
    LOGIN = "/users/login",
    REFRESH_TOKEN = baseURL + "/token/refresh",
    GET_USER = "/users/me",
    GET_USERS = "/users",
    CREATE_USER = "/users",
    HINTDATA = baseURL + "/accounts"
}
