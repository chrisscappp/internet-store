import React from 'react'
import TopBarMenu from '../../Components/Menu/ToolBarMenu/Menu'
import ProductCard from "../../Components/ProductCard/ProductCard";
import Grid from "@material-ui/core/Grid";
import '../../access/style/style.css'
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../Redux/Actions/productAction";
import {Spinner} from '../../Components/Spinner/Spinner'
import {Link} from "react-router-dom";

const Home = () => {
    const dispatch = useDispatch()
    const {products} = useSelector(({productsReducer}) => productsReducer)

    React.useEffect(() => {
        dispatch(getProducts())
    }, [])

    return (
        <Grid container
              direction="column"
              rowSpacing={3}
        >
            <Grid item>
                <TopBarMenu/>
            </Grid>
            <Grid item container spacing={1} className = "products_container">
                <Grid container item spacing={3}>
                    {products.length === 0 ?
                        <Spinner/>
                    :
                        products.map((product, index) => {
                            return (
                                <ProductCard key = {index + product.id} product = {product}/>
                            )
                        })
                    }
                </Grid>
                <Grid container item spacing={3}>
                    <Grid item xs={6}>
                        <div style={{display: 'flex',justifyContent: 'center', alignItems: 'center'}}>тут был саня)</div>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Home