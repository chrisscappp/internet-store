import React from 'react'
import TopBarMenu from '../../Components/Menu/ToolBarMenu/Menu'
import ProductCard from "../../Components/ProductCard/ProductCard";
import Grid from "@material-ui/core/Grid";
import '../../access/style/style.css'
import {useDispatch, useSelector} from "react-redux";
import {product} from "../../Redux/Actions/productAction";
import {notification} from '../../Redux/Actions/notificationsAction'

const Home = () => {

    const dispatch = useDispatch()
    const {products} = useSelector(({productsReducer}) => productsReducer)
    const {notifications} = useSelector(({notificationsReducer}) => notificationsReducer)

    React.useEffect(() => {
        dispatch(product())
        dispatch(notification())
    }, [])

    return (
        <Grid container
              direction="column"
              rowSpacing={3}
        >
            <Grid item>
                <TopBarMenu notifications = {notifications.data}/>
            </Grid>
            <Grid item container spacing={1} className = "products_container">
                <Grid container item spacing={3}>
                    {products?.map((product, index) => {
                        return (
                            <ProductCard key = {index + product.id} product = {product}/>
                        )
                    })}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Home