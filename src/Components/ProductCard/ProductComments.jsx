import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const ProductComments = ({comments}) => {
    console.log(comments)
    return (
        <>
                    <div>
                        <Accordion key = {(Math.random() * 100)}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography style={{display: 'flex', alignItems: 'center'}}>
                                    <AccountCircleIcon/> {comments.id}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {comments.comment}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
        </>
    )
}