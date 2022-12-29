import React, {FC, SetStateAction, useState} from 'react';
import {Button, Checkbox, FormControl, FormControlLabel, Stack, TextField} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {IDay} from "../../../models/IDay";

interface DayModalProps {
    day: IDay,
    hour: string,
    closeHandler: React.Dispatch<SetStateAction<{ isOpen: boolean, hour: string }>>
}

const DayModal: FC<DayModalProps> = ({day, hour, closeHandler}) => {
    let [formState, setFormState] = useState({todo: '', isUrgent: false})

    let changeStateHandler = (e: any, type: 'todo' | 'urgent'): void => {
        switch (type) {
            case 'todo':
                setFormState(prevState => {
                    return {
                        ...prevState,
                        todo: e.target.value
                    }
                })
                break
            case 'urgent':
                setFormState(prevState => {
                    return {
                        ...prevState,
                        isUrgent: e.target.checked
                    }
                })
                break
        }
    }

    let submitHandler = () => {
        day.setHourTodo(hour, formState)
        setFormState({todo: '', isUrgent: false})
        closeHandler({isOpen: false, hour: ''})
    }

    return (
        <FormControl sx={{backgroundColor: '#484848', p: '25px', borderRadius: '15px', color: '#fff'}} data-modal={true} >
            <Stack spacing={6}>
                <Stack spacing={2}>
                    <TextField label={'Todo'}
                               color={'success'}
                               sx={{input: {color: '#fff'}}}
                               value={formState.todo}
                               onChange={(e) => changeStateHandler(e, 'todo')}
                    />
                    <FormControlLabel control={<Checkbox color={'error'}
                                                         value={formState.isUrgent}
                                                         onChange={(e) => changeStateHandler(e, 'urgent')}/>}
                                                         label="Urgent"
                    />
                </Stack>
                <Button endIcon={<AddIcon />} variant={'contained'} onClick={submitHandler}>Add</Button>
            </Stack>
        </FormControl>
    );
};

export default DayModal;