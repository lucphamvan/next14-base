import { auth } from "@/app/api/auth/[...nextauth]/config"

export default auth

// See "Matching Paths" below to learn more
export const config = {
    matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)"
}
