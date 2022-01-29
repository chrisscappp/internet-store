import React from 'react'
import '../../access/style/style.css'
import {Spinner} from '../../Components/Spinner/Spinner'
import TopBarMenu from '../../Components/Menu/ToolBarMenu/Menu'
import {getLikedProducts} from "../../Redux/Actions/likedProductsAction";
import {useDispatch, useSelector} from "react-redux";
import Grid from "@material-ui/core/Grid";
import LikedProductCard from '../../Components/ProductCard/LikedProductCard'

const BasketPage = () => {
    const dispatch = useDispatch()
    const {likedProducts, isLoading} = useSelector(({likedProductsReducer}) => likedProductsReducer)
    const [productsOnBasket, setProductsOnBasket] = React.useState([])

    React.useEffect(() => {
        dispatch(getLikedProducts())
    }, [])

    React.useEffect(() => {
        setProductsOnBasket(likedProducts.data)
    }, [likedProducts])

    return (
        <Grid container
              direction="column"
              rowSpacing={3}
        >
            <Grid item>
                <TopBarMenu likedProducts={likedProducts.data}/>
            </Grid>
            {
                isLoading ?
                <Grid>
                    <Spinner/>
                </Grid>
                :
                    <Grid item container spacing={1} className = "likedProducts_container">
                        {productsOnBasket == false ?
                            <div className="basketEmpty">
                                <h3>Корзина пуста</h3>
                            </div>
                            :
                            <Grid container item spacing={3}>
                                {productsOnBasket?.map((product, index) => {
                                    return (
                                        <LikedProductCard
                                            key={index + product.id}
                                            product={product}
                                            likedProductsData={likedProducts.data}
                                            productsOnBasket={productsOnBasket}
                                            setProductsOnBasket={setProductsOnBasket}
                                        />
                                    )
                                })
                                }
                            </Grid>
                        }
                    </Grid>
            }
        </Grid>
    )
}

export default BasketPage