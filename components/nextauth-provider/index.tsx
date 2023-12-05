"use client"

import { SessionProvider, signOut, useSession } from "next-auth/react"
import { useEffect } from "react"

type Props = {
    children?: React.ReactNode
}

const REFRESH_TOKEN_INTERVAL = 13 * 60 // 13 minutes

export const NextAuthProvider = ({ children }: Props) => {
    return (
        <SessionProvider refetchInterval={REFRESH_TOKEN_INTERVAL} refetchWhenOffline={false} refetchOnWindowFocus={false}>
            {children}
        </SessionProvider>
    )
}

export const SubProvider = ({ children }: Props) => {
    const { data } = useSession()
    useEffect(() => {
        if (data?.error === "RefreshAccessTokenError") {
            signOut() // stop refetch token
        }
    }, [data?.error])
    return <>{children}</>
}
