import { useEffect, useState } from "react"

export function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia(query)
        setMatches(mediaQuery.matches)

        const handleMediaQueryChange = (event: MediaQueryListEvent) => {
            setMatches(event.matches)
        }

        mediaQuery.addEventListener("change", handleMediaQueryChange)

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange)
        }
    }, [query])

    return matches
}

export const MediaQuery = {
    Desktop: "(min-width: 1024px)",
    Tablet: "(min-width: 768px) and (max-width: 1024px)",
    Mobile: `(max-width: 768px)`
}
