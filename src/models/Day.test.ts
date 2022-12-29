import {Day} from "./Day";


describe('Calendar Model', () => {
    test('Day', () => {
        const day = new Day(`22-11-2022`)
        expect(day.getDay()).toBe(22)
    })
    test('Hour', () => {
        const day = new Day(`22-11-2022`)
        expect(day.getHour(11)).toBe('11:00')
    })
    test('Hour', () => {
        const day = new Day(`22-11-2022`)
        expect(day.getHour(9)).toBe('09:00')
    })
    test('Year', () => {
        const day = new Day(`22-11-2022`)
        expect(day.getYear()).toBe(2022)
    })
    test('Month', () => {
        const day = new Day(`22-11-2022`)
        expect(day.getDayHours()).toMatchSnapshot()
    })
})
