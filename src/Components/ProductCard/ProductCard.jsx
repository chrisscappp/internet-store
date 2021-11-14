import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuItem from "@material-ui/core/MenuItem";
import CommentIcon from '@mui/icons-material/Comment';
import Menu from "@material-ui/core/Menu";
import {ProductComments} from "./ProductComments.jsx";
import Grid from "@material-ui/core/Grid";
import {useDispatch, useSelector} from "react-redux";
import {product} from "../../Redux/Actions/productAction";
import {comment} from "../../Redux/Actions/commentsAction";

const ProductCard = () => {
    const [showComments, setShowComments] = React.useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const dispatch = useDispatch()
    const {products} = useSelector(({productsReducer}) => productsReducer)
    const {comments} = useSelector(({commentsReducer}) => commentsReducer)

    React.useEffect(() => {
        dispatch(product())
        dispatch(comment())
    }, [])

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleShowComments = (id) => {
        comments.forEach((item) => {
            console.log(item)
            console.log(products.find((product) => product.id === item.id))
        })
    }

    return (
        <>
            {products?.map((product) => {
                return (
                    <Grid item xs={4} key={product.id}>
                        <Card sx={{ maxWidth: 345 }}>
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
                                <Typography variant="body2" color="text.secondary">
                                    {product.description}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton onClick={() => handleShowComments(product.id)}>
                                    <CommentIcon/>
                                </IconButton>
                            </CardActions>
                            {showComments ? <ProductComments comments={comments}/> : null}
                        </Card>
                    </Grid>
                )
            })}
        </>
    )
}

export default ProductCard