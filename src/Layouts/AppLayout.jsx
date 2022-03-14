import React from 'react'
import {Route, Routes} from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Login/Login";
import BasketPage from "./BasketPage/BasketPage";
import TopBarMenu from '../Components/Menu/ToolBarMenu/Menu'
import Grid from "@material-ui/core/Grid";
import {getLikedProducts} from "../Redux/Actions/likedProductsAction";
import {useDispatch, useSelector} from "react-redux";

const AppLayout = () => {
    const dispatch = useDispatch()
    const [value, setValue] = React.useState('')
    const {isLogin, user} = useSelector(({loginReducer}) => loginReducer)
    const {likedProducts, isLoading, isError} = useSelector(({likedProductsReducer}) => likedProductsReducer)
    const [productsOnBasket, setProductsOnBasket] = React.useState([])

    React.useEffect(() => {
        dispatch(getLikedProducts())
    }, [])

    React.useEffect(() => {
        setProductsOnBasket(likedProducts.data)
    }, [likedProducts])

    let productsOnBasketLength = productsOnBasket?.length

    return (
        <>
            <Grid item>
                <TopBarMenu
                    value={value}
                    setValue={setValue}
                    productsOnBasketLength={productsOnBasketLength}
                />
            </Grid>
            <Routes>
                    <Route path="/" element={<Home value={value}/>}/>
                    <Route path="/basket" element=
                    {
                    <BasketPage
                        productsOnBasket={productsOnBasket}
                        setProductsOnBasket={setProductsOnBasket}
                        isLoading={isLoading}
                        isError={isError}
                        value={value}
                    />
                    }/>
                    <Route path="/login" element={<Login/>}/>
            </Routes>
        </>
    )
}

export default AppLayout