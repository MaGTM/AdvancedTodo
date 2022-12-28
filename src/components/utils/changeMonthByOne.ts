export const changeMonthByOne = (type: 'next' | 'prev', currentMonth: number, currentYear: number): number[] => {
    let newMonth = currentMonth,
        newYear = currentYear

    if(type === 'next') {
        if(newMonth === 11) {
            newMonth = 0
            newYear += 1
            return [newMonth, newYear]
        }
        newMonth += 1
    }

    if(type === 'prev') {
        if(newMonth === 0) {
            newMonth = 11
            newYear -= 1
            return [newMonth, newYear]
        }
        newMonth -= 1
    }

    return [newMonth, newYear]
}