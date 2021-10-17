import React from 'react'
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

const StoreBurgerIcon = () => {

    const handleEvent = (event) => {
        console.log('Тут был бругер стор меню', event)
    }

    return (
        <>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
                onClick={(event) => handleEvent(event)}
            >
                <MenuIcon />
            </IconButton>
        </>
    )
}

export default StoreBurgerIcon