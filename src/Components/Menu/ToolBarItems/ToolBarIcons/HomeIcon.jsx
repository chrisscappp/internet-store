import React from 'react'
import IconButton from "@material-ui/core/IconButton";
import SvgIcon from '@mui/material/SvgIcon';
import {NavLink} from 'react-router-dom'

const HomeIcon = () => {

    function HomeIcon(props) {
        return (
            <SvgIcon {...props}>
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </SvgIcon>
        );
    }

    return (
        <>
        <NavLink to = "/" className="inactive" activeclassname="active">
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2 }}
                >

                        <HomeIcon sx={{ fontSize: 30 }} />

                </IconButton>
        </NavLink>
        </>
    )
}

export default HomeIcon