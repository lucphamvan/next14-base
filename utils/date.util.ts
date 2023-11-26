// Date utils

// format date with HH:mm AM/PM dd/MM/yyyy
export function formatDate(date: Date): string {
    const hours = new Intl.DateTimeFormat("default", {
        hour12: true,
        hour: "numeric",
        minute: "numeric"
    }).format(date)
    const day = date.getDate().toString().padStart(2, "0")
    const month = (date.getMonth() + 1).toString().padStart(2, "0")
    const year = date.getFullYear().toString()

    return `${hours} ${day}/${month}/${year}`
}
