export interface AuthenResponse {
    accessToken: string
    refreshToken: string
    user: User
}

export interface User {
    id: string
    name: string
    avatar: string
    email: string
    dob: number
    createdAt: number
    updatedAt: number
}
