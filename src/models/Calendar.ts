import {ICalendar, IWeek} from "./ICalendar";


export class Calendar implements ICalendar {
    readonly currentYear: number
    readonly currentMonth: number
    readonly currentDate: number
    readonly currentWeekDay: number
    private calendar: IWeek[][] = []

    constructor() {
        let date = new Date()
        this.currentYear = date.getFullYear()
        this.currentMonth = date.getMonth()
        this.currentDate = date.getDate()
        this.currentWeekDay = date.getDay()
    }

    private daysInMonth(month: number) {
        let date = new Date()
        date.setMonth(month)
        return 33 - new Date(date.getFullYear(), date.getMonth(), 33).getDate();
    }

    private getNormalDay(day: number) {
        if (day === 0) {
            return 6
        }
        return day - 1
    }

    getCalendar(month: number, year: number) { // Getting Calendar Days
        let weekArray: IWeek[] = []
        this.calendar = []
        let startCurrentMonth = new Date()
        startCurrentMonth.setMonth(month)
        startCurrentMonth.setFullYear(year)
        startCurrentMonth.setDate(1)
        let currentMonthFirstDayOfWeek = this.getNormalDay(startCurrentMonth.getDay())

        for (let i = this.daysInMonth(startCurrentMonth.getMonth() - 1) - currentMonthFirstDayOfWeek + 1;
             i <= this.daysInMonth(startCurrentMonth.getMonth() - 1);
             i++) {
            weekArray.push({day: i, isActive: false})
        }

        for (let i = currentMonthFirstDayOfWeek; i < 7; i++) {
            weekArray.push({
                day: i - currentMonthFirstDayOfWeek + 1,
                isActive: true,
                isToday: (i - currentMonthFirstDayOfWeek + 1) === this.currentDate && month === this.currentMonth && year === this.currentYear
            })
        }

        this.calendar.push(weekArray)
        let nextMonth = false
        for (let i = 0; i < 5; i++) {
            weekArray = []
            for (let j = this.calendar[this.calendar.length - 1][6].day + 1; j < this.calendar[this.calendar.length - 1][6].day + 8; j++) {
                if (j > this.daysInMonth(startCurrentMonth.getMonth())) {
                    weekArray.push({day: j - this.daysInMonth(startCurrentMonth.getMonth()), isActive: false})
                    nextMonth = true
                    continue
                }
                if(nextMonth) {
                    weekArray.push({day: j, isActive: false})
                    continue
                }
                weekArray.push({day: j, isActive: true, isToday: this.currentDate === j && month === this.currentMonth && year === this.currentYear})
            }
            this.calendar.push(weekArray)
        }


        return this.calendar
    }
}