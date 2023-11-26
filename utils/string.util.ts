// Random a string with length n
export function randomString(n: number): string {
    const alphanumeric = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let result = ""
    for (let i = 0; i < n; i++) {
        result += alphanumeric.charAt(Math.floor(Math.random() * alphanumeric.length))
    }
    return result
}
