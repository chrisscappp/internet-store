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

export const ProductComments = ({product}) => {

    const [initialStateUserComment, setInitialStateUserComment] = React.useState('')
    let userComment = ''
    const placeHolderFromComment = "Оставить коммент..."

    const setComment = (id) => {
        userComment = initialStateUserComment
        setInitialStateUserComment('')
        sendComments(userComment)
        if (userComment === '') {
            alert('Поле пустое :(')
        } else {
            alert('Комментарий опубликован!')
        }
        console.log('GOOD', id)
    }

    return (
        <>
            {product.comments?.map((comment, index) => {
                return (
                    <div key={index + comment.id}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel1a-content"
                                id={index + 1}
                            >
                                <Typography style={{display: 'flex', alignItems: 'center'}}>
                                    <AccountCircleIcon/> {comment.user_name}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {comment.title}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                )
            })}
            {!product.comments ?
                <div style={{marginLeft: '8px', marginBottom: '8px'}}>
                    <Typography>Комментариев к товару не найдено. Стань первым кто его оставит!</Typography>
                </div>
                :
                null
            }
            <div style={{display: 'flex', justifyContent: 'space-between', marginLeft: '8px', marginBottom: '8px'}}>
                <div style={{marginBottom: '0px'}}>
                    <Input
                        type="text"
                        value={initialStateUserComment}
                        placeholder={placeHolderFromComment}
                        inputProps={ariaLabel}
                        onChange={(event) => setInitialStateUserComment(event.target.value)}
                    />
                </div>
                <div style={{marginRight: '8px'}}>
                    <button type="button" className="btn btn-primary" onClick={() => setComment(product.id)}>Опубликовать</button>
                </div>
            </div>
        </>
    )
}