import React from 'react'
import Home from './Layouts/Home/Home'
import Login from './Layouts/Login/Login'
import BasketPage from './Layouts/BasketPage/BasketPage'
import Container from "@material-ui/core/Container";
import {Routes, Route} from "react-router-dom";

function App() {

    return (
        <div className="App">
            <Routes>
                <Route exact path="/" element=
                    {
                        <Container maxWidth="xl">
                            <Home/>
                        </Container>
                    }
                />
                <Route path="login" element=
                    {
                        <Container maxWidth="xl">
                            <Login/>
                        </Container>
                    }
                />
                <Route path="basket" element=
                    {
                        <Container>
                            <BasketPage/>
                        </Container>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
