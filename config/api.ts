import axios from "axios"

const baseURL_CALL_FROM_FE = "http://localhost:7070"
const URL_CALL_FROM_BE_NEXTJS = "hhttp://192.168.20.144:7070"

export const api = axios.create({
    baseURL: baseURL_CALL_FROM_FE
})

export enum API {
    LOGIN = URL_CALL_FROM_BE_NEXTJS + "/users/login", // this api call from BE of nextjs => call in docker => if use localhost, it will not work
    REFRESH_TOKEN = URL_CALL_FROM_BE_NEXTJS + "/token/refresh", // this api call from BE of nextjs => call in docker => if use localhost, it will not work
    GET_USER = "/users/me",
    GET_USERS = "/users",
    CREATE_USER = "/users",
    HINTDATA = baseURL_CALL_FROM_FE + "/accounts"
}
