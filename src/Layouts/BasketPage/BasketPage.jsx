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
    const {likedProducts} = useSelector(({likedProductsReducer}) => likedProductsReducer)

    React.useEffect(() => {
        dispatch(getLikedProducts())
    }, [])

    console.log('like',likedProducts)

    return (
        <Grid container
              direction="column"
              rowSpacing={3}
        >
            <Grid item>
                <TopBarMenu likedProducts={likedProducts}/>
            </Grid>
            <Grid item container spacing={1} className = "likedProducts_container">
                <Grid container item spacing={3}>
                    {likedProducts.length === 0 ?
                        <Spinner/>
                        :
                        likedProducts.map((product, index) => {
                            return (
                                <LikedProductCard key = {index + product.id} product = {product}/>
                            )
                        })
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}

export default BasketPage