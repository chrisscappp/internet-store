import React from 'react'
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import {AccountCircle, Mail as MailIcon, Notifications as NotificationsIcon} from "@material-ui/icons";
import Box from "@material-ui/core/Box";

const ToolBarIcons = ({handleProfileMenuOpen, menuId, notifications}) => {

    return (
        <>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={0} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={4} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
            </Box>
        </>
    )
}

export default ToolBarIcons