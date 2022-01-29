import React from 'react'
import {Route, Routes} from "react-router-dom";
import Container from "@material-ui/core/Container";
import Home from "./Home/Home";
import Login from "./Login/Login";
import BasketPage from "./BasketPage/BasketPage";

const AppLayout = () => {
    return (
        <>
            <Container maxWidth="xl" className="layouts_container">
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route path="login`" element={<Login/>} />
                    <Route path="basket" element={<BasketPage/>} />
                </Routes>
            </Container>
        </>
    )
}

export default AppLayout