import { AxiosRequestConfig } from "axios"

export function withToken(token?: string): AxiosRequestConfig<any> | undefined {
    if (!token) return undefined
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}
