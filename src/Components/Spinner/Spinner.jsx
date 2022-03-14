import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const Spinner = () => {
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '10vh'}}>
                <CircularProgress />
            </Box>
        </>
    )
}