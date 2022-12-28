import {Calendar} from "./Calendar";

const calendar = new Calendar()
const date = new Date()

describe('Calendar Model', () => {
    test('Month 1', () => {
        expect(calendar.getCalendar(date.getMonth(), date.getFullYear())).toMatchSnapshot()
    })
    test('Month 2', () => {
        expect(calendar.getCalendar(date.getMonth()-1, date.getFullYear())).toMatchSnapshot()
    })
    test('Year 1', () => {
        expect(calendar.getCalendar(date.getMonth(), date.getFullYear()+1)).toMatchSnapshot()
    })
    test('Year 2', () => {
        expect(calendar.getCalendar(date.getMonth(), date.getFullYear()-1)).toMatchSnapshot()
    })
})
