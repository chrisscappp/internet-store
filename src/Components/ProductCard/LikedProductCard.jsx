import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuItem from "@material-ui/core/MenuItem";
import CommentIcon from '@mui/icons-material/Comment';
import Menu from "@material-ui/core/Menu";
import {ProductComments} from "./ProductComments";
import Grid from "@material-ui/core/Grid";
import {COMMENTS} from "../../api/urls/urls";
import {getData} from '../../api/get/getData'

const LikedProductCard = ({product}) => {
    const [showComments, setShowComments] = React.useState(false)
    const [commentsData, setCommentsData] = React.useState([])
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    React.useEffect(() => {
        getData(`${COMMENTS}${product.id}`)
            .then((response) => {
                setCommentsData(response.data)
            })
    }, [])

    console.log(commentsData)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleShowComments = (id) => {
        setShowComments(!showComments)
    }

    return (
        <>
            <Grid item xs={4} key={product.id}>
                <Card sx={{maxWidth: 345}}>
                    <CardHeader
                        action={
                            <IconButton
                                aria-label="settings"
                                id="basic-button"
                                aria-controls="basic-menu"
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <MoreVertIcon/>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                                </Menu>
                            </IconButton>
                        }
                        title={product.title}
                        subheader={product.author}
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={product.image}
                        alt="img"
                    />
                    <CardContent>
                        <Typography variant="body1" color="text.secondary" fontWeight="medium">
                            Цена: {product.price} $
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <div><h4>Купить</h4></div>
                        </IconButton>
                        <IconButton onClick={() => handleShowComments(product.id)}>
                            <CommentIcon/>
                        </IconButton>
                    </CardActions>
                    {showComments ? <ProductComments
                        productId = {product.id}
                        commentsData = {commentsData}
                        setCommentsData = {setCommentsData}
                    /> : null}
                </Card>
            </Grid>
        </>
    )
}

export default LikedProductCard