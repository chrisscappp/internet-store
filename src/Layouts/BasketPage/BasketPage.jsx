import React from 'react'
import Grid from "@material-ui/core/Grid";
import '../../access/style/style.css'
import {Spinner} from '../../Components/Spinner/Spinner'
import TopBarMenu from '../../Components/Menu/ToolBarMenu/Menu'

const BasketPage = () => {
    return (
        <div>
            <TopBarMenu/>
            <div>
                Тут будет корзина!
            </div>
        </div>
    )
}

export default BasketPage