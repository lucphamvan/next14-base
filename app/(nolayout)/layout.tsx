import { Provider } from "@/components/provider"
import { Font } from "@/config/font"
import { BRAND_NAME } from "@/config/meta"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: BRAND_NAME,
    description: "Nothing is better than a good life"
}

interface Props {
    children: React.ReactNode
}
const AppLayout = ({ children }: Props) => {
    return (
        <html lang="en">
            <body className={Font.primary.className}>
                <Provider>{children}</Provider>
            </body>
        </html>
    )
}

export default AppLayout
