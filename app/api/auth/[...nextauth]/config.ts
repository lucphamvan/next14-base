import { login, refreshAccessToken } from "@/service/authen.service"
import { JWT } from "@auth/core/jwt"
import NextAuth, { NextAuthConfig } from "next-auth"
import { User as JwtUser } from "next-auth"
import CredentialProvider from "next-auth/providers/credentials"

const ignorePaths = ["/register", "/login"]
const isIgnorePath = (path: string) => ignorePaths.some((p) => path.startsWith(p))

const refreshToken = async (token: JWT): Promise<JWT> => {
    // try {
    const accessToken = await refreshAccessToken(token.refreshToken)
    return { ...token, accessToken, verifyAt: Date.now() }
    // } catch (error) {
    //     throw error
    //     // console.log("Error refreshing access token", error)
    //     // return { ...token, error: "RefreshAccessTokenError" }
    // }
}

const authOptions: NextAuthConfig = {
    providers: [
        CredentialProvider({
            name: "Credentials",
            credentials: {
                email: {},
                password: {}
            },
            async authorize(credentials) {
                const { email, password } = credentials
                const data = await login(email as string, password as string)
                const user: JwtUser = {
                    ...data.user,
                    accessToken: data.accessToken,
                    refreshToken: data.refreshToken
                }
                return user
            }
        })
    ],
    callbacks: {
        async authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user
            // prevent redirect to login page when user is logged in
            if (nextUrl.pathname.startsWith("/login") && isLoggedIn) {
                return Response.redirect(new URL("/", nextUrl))
            }
            if (isIgnorePath(nextUrl.pathname) && !isLoggedIn) {
                return true
            }
            if (!isLoggedIn) {
                if (nextUrl.pathname === "/") {
                    return Response.redirect(new URL("/login", nextUrl))
                }
                return Response.redirect(new URL("/login?callbackUrl=" + nextUrl.href, nextUrl))
            }
            return isLoggedIn
        },
        async jwt({ account, token, user }) {
            // for the 1st time login, this code will be called
            if (account && user) {
                return {
                    ...token,
                    accessToken: user.accessToken,
                    refreshToken: user.refreshToken,
                    user: user as any,
                    verifyAt: Date.now()
                }
            }
            // prevent call refresh token too many times by checking time call jwt (1 minute)
            if (Date.now() - token.verifyAt < 60 * 1000) {
                return token
            }
            // force refresh token
            return await refreshToken(token)
        },
        async session({ session, token }) {
            if (token) {
                const { accessToken, refreshToken, error, user } = token
                return { ...session, accessToken, refreshToken, error, user }
            }
            return session
        }
    },
    pages: {
        signIn: "/login"
    }
}

export const {
    auth,
    handlers: { GET, POST }
} = NextAuth(authOptions)
