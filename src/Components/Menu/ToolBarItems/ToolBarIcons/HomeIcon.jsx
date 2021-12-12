import React from 'react'
import IconButton from "@material-ui/core/IconButton";
import SvgIcon from '@mui/material/SvgIcon';
import {Link} from 'react-router-dom'

const HomeIcon = () => {

    function HomeIcon(props) {
        return (
            <SvgIcon {...props}>
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </SvgIcon>
        );
    }

    const handleEvent = (event) => {
        console.log('Тут был бругер стор меню', event)
    }

    return (
        <>
            <Link to = "/">
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2 }}
                    onClick={(event) => handleEvent(event)}
                >
                    <HomeIcon sx={{ fontSize: 30 }} />
                </IconButton>
            </Link>
        </>
    )
}

export default HomeIcon