import { cookies, headers } from "next/headers"
import type { NextRequest } from "next/server"

interface ReqOption {
    params: { id: string }
}
export async function GET(req: NextRequest, { params }: ReqOption) {
    // headers readonly
    const headersList = headers() // headers readonly
    const contentType = headersList.get("content-type")

    // cookies
    const cookiesList = cookies()
    cookiesList.get("token")
    cookiesList.set("token", "123456", {
        domain: "example.com",
        path: "/",
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
        secure: true,
        httpOnly: true,
        sameSite: "strict"
    })

    // request query
    const serachParams = req.nextUrl.searchParams
    const query = serachParams.get("query")
    // query is "hello" for /api/search?query=hello

    // request params
    const id = params.id

    // to set header, use it in response
    return Response.json(
        { msg: "OK" },
        {
            status: 200,
            headers: {
                "request-content-type": contentType || ""
            }
        }
    )
}

export async function POST(req: Request) {
    // request body
    const body = await req.json()
    // request form data
    const form = await req.formData()
    const username = form.get("username")
    const password = form.get("password")

    return Response.json(
        { body, form: { username, password } },
        {
            status: 200,
            statusText: "Bad Request"
        }
    )
}

// we will call this api from client
// Path: /api/example
