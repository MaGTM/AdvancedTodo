import {monthToString} from "./monthToString";

describe('monthToString', () => {
    test('December', () => {
        expect(monthToString(11)).toBe('December')
    })
    test('November', () => {
        expect(monthToString(10)).toBe('November')
    })
    test('January', () => {
        expect(monthToString(0)).toBe('January')
    })
})