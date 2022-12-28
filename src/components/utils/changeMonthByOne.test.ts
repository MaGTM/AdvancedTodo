import {changeMonthByOne} from "./changeMonthByOne";


describe('changeMonthByOne', () => {
    test('[0, 2023]', () => {
        expect(changeMonthByOne('next', 11, 2022)).toEqual([0, 2023])
    })
    test('[11, 2022]', () => {
        expect(changeMonthByOne('next', 10, 2022)).toEqual([11, 2022])
    })
    test('[10, 2022]', () => {
        expect(changeMonthByOne('prev', 11, 2022)).toEqual([10, 2022])
    })
    test('[11, 2022]', () => {
        expect(changeMonthByOne('prev', 0, 2023)).toEqual([11, 2022])
    })
})