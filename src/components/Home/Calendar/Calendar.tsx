import React, {FC} from 'react';
import {Box, Grid, Typography} from "@mui/material";
import {CalendarItem} from '../../../styledComponents/CalendarItem';
import {ICalendar, ICalendarState} from "../../../models/ICalendar";
import {useNavigate} from "react-router-dom";

interface CalendarProps {
    calendar: ICalendar,
    calendarState: ICalendarState
}

const Calendar: FC<CalendarProps> = ({calendar, calendarState}) => {

    let navigate = useNavigate()

    let calendarArray = calendar.getCalendar(calendarState.month, calendarState.year).map(item=> {
        return item.map(weekDay => {
            return (
                <Grid item sm={1.7} key={Math.random()}>
                    <CalendarItem
                        sx={{backgroundColor: weekDay.isActive ? '#484848' : '#343434', '&:hover': {filter: weekDay.isActive ? 'brightness(1.1)' : 'brightness(1)'}}}
                        onClick={weekDay.isActive ? () => navigate(`day/${weekDay.day}-${calendarState.month+1}-${calendarState.year}`) : () => {}}
                    >
                        <Box
                            width={30}
                            height={30}
                            sx={{backgroundColor: weekDay.isToday ? 'red' : 'transparent', padding: '0 2px', borderRadius: '100%'}}
                            display={'flex'}
                            justifyContent={'center'}
                            alignItems={'center'}
                        >
                            <Typography variant={'body1'}>
                                {weekDay.day}
                            </Typography>
                        </Box>
                    </CalendarItem>
                </Grid>
            )
        })
    })
    return (
        <Grid container justifyContent={'space-between'} rowGap={'2px'}>
            {calendarArray}
        </Grid>
    );
};

export default Calendar;