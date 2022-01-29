import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Grid from "@material-ui/core/Grid";
import ClearIcon from '@mui/icons-material/Clear';
import {clearOneCardFromBasket} from '../../api/delete/clearOneCard'

const LikedProductCard = ({product, productsOnBasket, setProductsOnBasket}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const clearCardFromBasket = (id) => {
        setProductsOnBasket(productsOnBasket.filter(prod => prod.id !== id))
        clearOneCardFromBasket(id)
    }

    const buyProduct = (id) => {
        setProductsOnBasket(productsOnBasket.filter(prod => prod.id !== id))
        clearOneCardFromBasket(id)
        alert(`Теперь ваши ${product.price} $ у нас))`)
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
                                <ClearIcon onClick={(id) => clearCardFromBasket(product.id)}/>
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
                        <IconButton aria-label="add to favorites" onClick={() => buyProduct(product.id)}>
                            <div><h4>Купить</h4></div>
                        </IconButton>
                    </CardActions>
                </Card>
            </Grid>
        </>
    )
}

export default LikedProductCard