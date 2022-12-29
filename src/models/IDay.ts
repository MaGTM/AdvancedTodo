export interface IDayHours {
    hour: string
    todos: {todo: string, isUrgent: boolean}[]
}

export interface IDay {
    readonly day: number
    readonly month: number
    readonly year: number
    readonly dayHours: IDayHours[]
    getDay(): number
    getMonth(): string
    getYear(): number
    getDayHours(): IDayHours[]
    setHourTodo(hour: string, data: {todo: string, isUrgent: boolean}): void
    getHour(number: number): string
}