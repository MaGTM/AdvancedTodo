import React, {FC, SetStateAction, useState} from 'react';
import {DayHour} from "../../../styledComponents/DayHour";
import {Todos} from '../../../styledComponents/Todos'
import AddIcon from '@mui/icons-material/Add';
import {IDayHours} from "../../../models/IDay";
import {Stack} from "@mui/material";

interface DayItemProps {
    hour: IDayHours,
    setIsModalOpen: React.Dispatch<SetStateAction<{ isOpen: boolean, hour: string }>>
}


const DayItem: FC<DayItemProps> = ({hour, setIsModalOpen}) => {
    let [isHover, setIsHover] = useState(false)
    return (
        <DayHour
            sx={{width: {xs: '100%', lg: '50%'}}}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            onClick={() => setIsModalOpen({isOpen: true, hour: hour.hour})}
        >
            {hour.hour}
            <Stack direction={'row'} width={'100%'} p={'0 30px'} gap={2} flexWrap={'wrap'} >
                {hour.todos.map(item => {
                    return <Todos sx={{
                        backgroundColor: item.isUrgent ? 'rgba(255, 60, 49, 0.5)' : 'rgba(162, 4, 236, 0.5)',
                        border: item.isUrgent ? 'rgba(255, 60, 49, 1) 3px solid' : 'rgba(162, 4, 236, 1) 3px solid'
                    }}>
                        {item.todo}
                    </Todos>
                })}
            </Stack>
            <AddIcon sx={{opacity: isHover ? '0.5' : '0'}}/>
        </DayHour>
    );
};

export default DayItem;