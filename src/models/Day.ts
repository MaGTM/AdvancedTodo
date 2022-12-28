import {monthToString} from "../components/utils/monthToString";

export class Day {
    private readonly day: number
    private readonly month: number
    private readonly year: number

    constructor(date: string) {
        this.day = Number(date.split('-')[0])
        this.month = Number(date.split('-')[1])
        this.year = Number(date.split('-')[2])
    }

    private getHour(number: number) {
        if(number < 10) {
            return `0${number}:00`
        }
        if(number >= 10) {
            return `${number}:00`
        }
    }

    getDay() {
        return this.day
    }

    getMonth() {
        return monthToString(this.month-1)
    }

    getYear() {
        return this.year
    }

    getDayHours() {
        let dayHours = []

        for(let i = 0; i <= 24; i++) {
            dayHours.push({hour: this.getHour(i), todos: []})
        }
        return dayHours
    }
}