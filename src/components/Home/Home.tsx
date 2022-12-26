import React, {useMemo, useState} from 'react';
import Calendar from "./Calendar/Calendar";
import {Calendar as CalendarModel} from "../../models/Calendar";
import {ICalendarState} from "../../models/ICalendar";
import CalendarMenu from "./CalendarMenu/CalendarMenu";

const Home = () => {
    let calendar = useMemo(() => {
        return new CalendarModel()
    }, [])

    let [calendarState, setCalendarState] = useState<ICalendarState>({
        today: calendar.currentDate,
        month: calendar.currentMonth,
        year: calendar.currentYear
    })

    return (
        <div>
            <CalendarMenu calendarState={calendarState} setCalendarState={setCalendarState} calendar={calendar}/>
            <Calendar calendar={calendar} calendarState={calendarState}/>
        </div>
    );
};

export default Home;