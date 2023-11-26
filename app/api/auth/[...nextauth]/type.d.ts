import { User as CustomUser } from "@/model/auth"
import type {} from "next-auth"

declare module "next-auth" {
    interface User {
        id: string
        email?: string | null | undefined
        name?: string | null | undefined
        accessToken: string
        refreshToken: string
    }
}

declare module "@auth/core/types" {
    interface Session {
        error?: "RefreshAccessTokenError"
        accessToken: string
        refreshToken: string
        user: CustomUser
    }
}

declare module "@auth/core/jwt" {
    interface JWT {
        accessToken: string
        refreshToken: string
        error?: "RefreshAccessTokenError" | undefined
        user: CustomUser
        verifyAt: number
    }
}
