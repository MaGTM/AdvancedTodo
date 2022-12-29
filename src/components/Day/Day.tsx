import React, {useMemo, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {Day as DayModel} from '../../models/Day'
import {Backdrop, Box, Stack, Typography} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DayItem from "./DayItem/DayItem";
import DayModal from "./DayModal/DayModal";

const Day = () => {
    let {date} = useParams()
    let navigate = useNavigate()
    let [isModalOpen, setIsModalOpen] = useState<{ isOpen: boolean, hour: string }>({isOpen: false, hour: ''})

    let day = useMemo(() => {
        return new DayModel(date!)
    }, [])

    let closeHandler = (e?: React.MouseEvent) => {
        if ((e?.target as Element).getAttribute('data-backdrop') ||
            ((e?.target as Element).parentElement!.getAttribute('data-backdrop') && (e?.target as Element).nodeName === 'path')) {
            setIsModalOpen({isOpen: false, hour: ''})
        }

    }

    return (
        <>
            <Stack spacing={4}>
                <Box sx={{
                    border: '2px #fff solid',
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    pl: '5px',
                    cursor: 'pointer'
                }}
                     onClick={() => navigate(-1)}
                >
                    <ArrowBackIcon sx={{color: '#fff'}} fontSize={'large'}/>
                </Box>
                <Typography variant={'h3'} component={'h1'} color={'#fff'}>
                    {day.getDay()} {day.getMonth()} {day.getYear()}
                </Typography>
                <Stack spacing={2}>
                    {day.getDayHours().map(item => {
                        return <DayItem key={item.hour} hour={item} setIsModalOpen={setIsModalOpen}/>
                    })}
                </Stack>
            </Stack>
            <Backdrop open={isModalOpen.isOpen} onClick={closeHandler} data-backdrop={true}>
                <DayModal day={day} hour={isModalOpen.hour} closeHandler={setIsModalOpen}/>
                <CloseIcon sx={{position: 'absolute', top: '15px', right: '15px', color: '#fff', cursor: 'pointer'}}
                           fontSize={'large'} data-backdrop={true}/>
            </Backdrop>
        </>
    );
};

export default Day;