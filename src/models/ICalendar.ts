export interface ICalendar {
    readonly currentYear: number
    readonly currentMonth: number
    readonly currentDate: number
    readonly currentWeekDay: number
    getCalendar(month: number, year: number): IWeek[][]
}

export interface IWeek {
    day: number,
    isActive: boolean,
    isToday?: boolean
}
export interface ICalendarState {
    today: number,
    month: number,
    year: number
}