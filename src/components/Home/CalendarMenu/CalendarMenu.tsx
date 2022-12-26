import React, {FC, SetStateAction, useMemo} from 'react';
import { MenuItem, Select, Stack, Typography} from "@mui/material";
import {ICalendar, ICalendarState} from "../../../models/ICalendar";
import {monthToString} from "../../utils/monthToString";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {CalendarButton} from "../../../styledComponents/CalendarButton";
import {changeMonthByOne} from "../../utils/changeMonthByOne";

interface CalendarMenuProps {
    calendarState: ICalendarState,
    setCalendarState: React.Dispatch<SetStateAction<ICalendarState>>,
    calendar: ICalendar
}

const CalendarMenu: FC<CalendarMenuProps> = ({calendarState, setCalendarState, calendar}) => {

    let monthsOptions = useMemo(() => {
        let array = []
        for(let i = 0; i < 12; i++) {
            array.push(<MenuItem key={i} value={i}>{monthToString(i)}</MenuItem>)
        }
        return array
    }, [])

    let yearOptions = useMemo(() => {
        let array = []
        for(let i = calendarState.year-5; i < calendarState.year+5; i++) {
            array.push(<MenuItem key={i} value={i}>{i}</MenuItem>)
        }
        return array
    }, [])

    let todayHandler = () => {
        setCalendarState({
            year: calendar.currentYear,
            month: calendar.currentMonth,
            today: calendar.currentDate
        })
    }

    let nextMonthHandler = () => {
        let newDates = changeMonthByOne('next',calendarState.month, calendarState.year)
        setCalendarState(prevState => {
            return {
                ...prevState,
                month: newDates[0],
                year: newDates[1]
            }
        })
    }

    let prevMonthHandler = () => {
        let newDates = changeMonthByOne('prev',calendarState.month, calendarState.year)
        setCalendarState(prevState => {
            return {
                ...prevState,
                month: newDates[0],
                year: newDates[1]
            }
        })
    }

    return (
        <Stack direction={'row'} marginBottom={6} justifyContent={'space-between'} alignItems={'center'}>
            <Stack direction={'row'} spacing={2} color={'#fff'}>
                <Select
                    key={`selectMonth-${calendarState.month}`}
                    defaultValue={calendarState.month}
                    value={calendarState.month}
                    sx={{border: '#fff 2px solid', color: '#fff', '& .MuiSelect-icon': {color: '#fff'}, borderRadius: 5}}
                    onChange={(e) => setCalendarState(prevState => {
                        return {
                            ...prevState,
                            month: Number(e.target.value)
                        }
                    })}
                >
                    {monthsOptions}
                </Select>
                <Select
                    key={`selectYear-${calendarState.month}`}
                    defaultValue={calendarState.year}
                    sx={{border: '#fff 2px solid', color: '#fff', '& .MuiSelect-icon': {color: '#fff'}, borderRadius: 5}}
                    onChange={(e) => setCalendarState(prevState => {
                        return {
                            ...prevState,
                            year: Number(e.target.value)
                        }
                    })}
                >
                    {yearOptions}
                </Select>
            </Stack>
            <Stack direction={'row'} spacing={2}>
                <CalendarButton variant={"contained"} size={'small'} onClick={prevMonthHandler}>
                    <ArrowLeftIcon />
                </CalendarButton>
                <CalendarButton variant={"contained"} size={'small'} onClick={todayHandler}>
                    <Typography variant={'body1'}>Today</Typography>
                </CalendarButton>
                <CalendarButton variant={"contained"} size={'small'} onClick={nextMonthHandler}>
                    <ArrowRightIcon />
                </CalendarButton>
            </Stack>
        </Stack>
    );
};

export default CalendarMenu;