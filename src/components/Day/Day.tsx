import React, {useMemo} from 'react';
import {useParams} from "react-router-dom";
import {Day as DayModel} from '../../models/Day'
import {Stack, Typography} from "@mui/material";
import {DayHour} from "../../styledComponents/DayHour";

const Day = () => {
    let {date} = useParams()
    let day = useMemo(() => {
        return new DayModel(date!)
    }, [])

    return (
        <Stack spacing={4}>
            <Typography variant={'h3'} component={'h1'} color={'#fff'}>
                {day.getDay()} {day.getMonth()} {day.getYear()}
            </Typography>
            <Stack spacing={2}>
                {day.getDayHours().map(item => {
                    return <DayHour>{item.hour}</DayHour>
                })}
            </Stack>
        </Stack>
    );
};

export default Day;