import React from 'react'
import TopBarMenu from '../../Components/Menu/ToolBarMenu/Menu'
import ProductCard from "../../Components/ProductCard/ProductCard";
import Grid from "@material-ui/core/Grid";
import '../../access/style/style.css'

const Home = () => {
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
                    <ProductCard/>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Home