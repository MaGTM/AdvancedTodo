import React, {FC, SetStateAction} from 'react';
import { MenuItem, Select, Stack} from "@mui/material";
import {ICalendarState} from "../../../models/ICalendar";
import {monthToString} from "../../utils/monthToString";

interface CalendarMenuProps {
    calendarState: ICalendarState,
    setCalendarState: React.Dispatch<SetStateAction<ICalendarState>>
}

const CalendarMenu: FC<CalendarMenuProps> = ({calendarState, setCalendarState}) => {

    let monthsOptions = () => {
        let array = []
        for(let i = 0; i < 12; i++) {
            array.push(<MenuItem key={i} value={i}>{monthToString(i)}</MenuItem>)
        }
        return array
    }

    return (
        <Stack direction={'row'} marginBottom={6}>
            <Stack direction={'row'} gap={5} color={'#fff'}>
                <Select
                    defaultValue={calendarState.month}
                    sx={{border: '#fff 2px solid', color: '#fff', '& .MuiSelect-icon': {color: '#fff'}, borderRadius: 5}}
                    onChange={(e) => setCalendarState(prevState => {
                        return {
                            ...prevState,
                            month: Number(e.target.value)
                        }
                    })}
                >
                    {monthsOptions()}
                </Select>
            </Stack>
        </Stack>
    );
};

export default CalendarMenu;