import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const ProductComments = ({product}) => {
    return (
        <>
            {product.comments?.map((item, index) => {
                console.log(index)
                return (
                    <div>
                        <Accordion key = {item.comment + (Math.random() * 100)}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography style={{display: 'flex', alignItems: 'center'}}>
                                    <AccountCircleIcon/> {item.user_name}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {item.comment}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                )
            })}
        </>
    )
}