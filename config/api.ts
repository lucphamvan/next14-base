import axios from "axios"

const BASEURL = "https://hintapi.ltool.pro"
const BE_URL = "https://hintapi.ltool.pro"

export const api = axios.create({
    baseURL: BASEURL
})

export enum API {
    LOGIN = BE_URL + "/users/login", // this api call from BE of nextjs => call in docker => if use localhost, it will not work
    REFRESH_TOKEN = BE_URL + "/token/refresh", // this api call from BE of nextjs => call in docker => if use localhost, it will not work
    GET_USER = "/users/me",
    GET_USERS = "/users",
    CREATE_USER = "/users",
    HINTDATA = BASEURL + "/accounts"
}
