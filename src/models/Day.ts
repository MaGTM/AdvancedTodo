import {monthToString} from "../components/utils/monthToString";
import {IDay, IDayHours} from "./IDay";

export class Day implements IDay{
    readonly day: number
    readonly month: number
    readonly year: number
    dayHours: IDayHours[] = []

    constructor(date: string) {
        this.day = Number(date.split('-')[0])
        this.month = Number(date.split('-')[1])
        this.year = Number(date.split('-')[2])
    }

    getHour(number: number) {
        if(number < 10) {
            return `0${number}:00`
        }
        if(number >= 10) {
            return `${number}:00`
        }
        return ''
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
        if(this.dayHours.length > 0) return this.dayHours

        if(localStorage.getItem(`${this.day}-${this.month}-${this.year}`)) {
            this.dayHours = JSON.parse(localStorage.getItem(`${this.day}-${this.month}-${this.year}`)!)
            return this.dayHours
        }

        for(let i = 0; i <= 24; i++) {
            this.dayHours.push({hour: this.getHour(i), todos: []})
        }
        return this.dayHours
    }

    setHourTodo(hour: string, data: {todo: string, isUrgent: boolean}) {
        if(!data.todo) return
        this.dayHours[this.dayHours.findIndex(el => el.hour === hour)].todos.push(data)
        localStorage.setItem(String(`${this.day}-${this.month}-${this.year}`), JSON.stringify(this.dayHours))
    }
}