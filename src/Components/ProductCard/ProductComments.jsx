import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Input from '@mui/material/Input';
import {sendComments} from '../../api/sendComment/sendComment'

const ariaLabel = { 'aria-label': 'description' };

export const ProductComments = ({productId, commentsData, setCommentsData}) => {
    const [userComment, setUserComment] = React.useState('')
    const placeHolderFromComment = "Оставить коммент..."

    const setComment = () => {
        let data = {
            user_name: 'Боба',
            title: userComment
        }
        if (data.title !== '') {
            sendComments(productId, data)
            setCommentsData([...commentsData, data])
            setUserComment('')
        }
    }

    return (
        <>
            {commentsData?.map((comment, index) => {
                return (
                    <div key={index + comment.id}>
                        <Accordion style={{backgroundColor: '#fafafa'}}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel1a-content"
                                id={index + 1}
                            >
                                <Typography style={{display: 'flex', alignItems: 'center', color: 'black'}}>
                                    <AccountCircleIcon/> {comment.user_name}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography style={{color: 'black'}}>
                                    {comment.title}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                )
            })}
            {commentsData.length === 0 ?
                <div style={{marginLeft: '8px', marginBottom: '8px'}}>
                    <Typography>Комментариев к товару не найдено. Стань первым кто его оставит!</Typography>
                </div>
                :
                null
            }
            <div style={{display: 'flex', justifyContent: 'space-between', marginLeft: '8px', marginBottom: '8px'}}>
                <div style={{marginBottom: '0px'}}>
                    <Input
                        style={{color: 'black'}}
                        type="text"
                        value={userComment}
                        placeholder={placeHolderFromComment}
                        inputProps={ariaLabel}
                        onChange={(event) => setUserComment(event.target.value)}
                    />
                </div>
                <div style={{marginRight: '8px'}}>
                    <button type="button" className="btn btn-primary" style={{backgroundColor: 'black'}} onClick={setComment}>Опубликовать</button>
                </div>
            </div>
        </>
    )
}