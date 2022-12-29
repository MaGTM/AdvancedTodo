import {Box, styled} from "@mui/material";

export const DayHour = styled(Box)({
    backgroundColor: '#484848',
    color: '#fff',
    fontSize: '18px',
    width: '100%',
    fontFamily: 'Roboto, sans-serif',
    padding: '25px',
    borderRadius: '15px',
    cursor: 'pointer',
    '&:hover': {filter: 'brightness(1.1)'},
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

})