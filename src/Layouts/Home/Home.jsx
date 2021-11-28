import React from 'react'
import TopBarMenu from '../../Components/Menu/ToolBarMenu/Menu'
import ProductCard from "../../Components/ProductCard/ProductCard";
import Grid from "@material-ui/core/Grid";
import '../../access/style/style.css'
import {useDispatch, useSelector} from "react-redux";
import {product} from "../../Redux/Actions/productAction";
import {Spinner} from '../../Components/Spinner/Spinner'

const Home = () => {
    const [showSpinner, setShowSpinner] = React.useState(true)
    const [test, setTest] = React.useState(false)
    const dispatch = useDispatch()
    const {response} = useSelector(({productsReducer}) => productsReducer)

    React.useEffect(() => {
        dispatch(product())
        if (response.status !== 200) {
            setShowSpinner(!showSpinner)
        }
        if (response.status === 404) {
            setTest(true)
        }
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
                    {response.data ? response.data.map((product, index) => {
                        return (
                            <ProductCard key = {index + product.id} product = {product}/>
                        )
                    })
                    :
                        <Spinner/>
                    }
                    {test ? <div>error</div> : null}
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