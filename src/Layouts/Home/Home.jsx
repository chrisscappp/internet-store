import React from 'react'
import TopBarMenu from '../../Components/Menu/ToolBarMenu/Menu'
import ProductCard from "../../Components/ProductCard/ProductCard";
import Grid from "@material-ui/core/Grid";

const Home = () => {
    return (
        <Grid container
              direction="column"
              rowSpacing={3}
        >
            <Grid item>
                <TopBarMenu/>
            </Grid>
            <Grid item>
                <ProductCard/>
            </Grid>
        </Grid>
    )
}

export default Home