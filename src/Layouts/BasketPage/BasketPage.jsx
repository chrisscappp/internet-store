import React from 'react'
import '../../access/style/style.css'
import {Spinner} from '../../Components/Spinner/Spinner'
import Grid from "@material-ui/core/Grid";
import LikedProductCard from '../../Components/ProductCard/LikedProductCard'
import Container from '@mui/material/Container';
import {Error} from '../../Components/Error/Error'

const BasketPage = ({productsOnBasket, setProductsOnBasket, isLoading, isError}) => {

    return (
        <>
            <Container maxWidth="lg">
                <div className='basket-wrapper'>
                    <Grid container
                          direction="column"
                          rowSpacing={3}
                    >
                        {
                            isLoading ?
                                    <Spinner/>
                                :
                                isError ? 
                                <Error/>
                                :
                                    <div className="testWrapper">
                                        <Grid item container spacing={1} className="likedProducts-wrapper">
                                            {productsOnBasket == false ?
                                                <Grid container item className="basketEmpty">
                                                    <div>
                                                        <h3>Корзина пуста :(</h3>
                                                    </div>
                                                </Grid>
                                                :
                                                <Grid container item spacing={3} className = "likedProducts-container">
                                                    {productsOnBasket?.map((product, index) => {
                                                        return (
                                                            <LikedProductCard
                                                                key={index + product.id}
                                                                product={product}
                                                                productsOnBasket={productsOnBasket}
                                                                setProductsOnBasket={setProductsOnBasket}
                                                            />
                                                        )
                                                    })
                                                    }
                                                </Grid>
                                            }
                                        </Grid>
                                    </div>

                        }
                    </Grid>
                </div>
            </Container>
        </>
    )
}

export default BasketPage