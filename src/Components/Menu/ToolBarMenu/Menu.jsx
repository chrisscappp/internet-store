import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { More as MoreIcon } from '@material-ui/icons';

import ToolBarIcons from '../ToolBarItems/ToolBarIcons/ToolBarIcons'
import StoreBurgerIcon from '../ToolBarItems/ToolBarIcons/StoreBurgerIcon'
import ToolBarHead from '../ToolBarItems/ToolBarHead/ToolBarHead'
import ToolBarSearch from "../ToolBarItems/ToolBarSearch/ToolBarSearch";

export default function TopBarMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null); // Какой-то анчор хз че это.
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null); // Какой-то анчор хз че это.

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
        console.log('event', event)
    }; // Функция открытия профиля.

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    }; // Закрывает, но надо подключать чето.

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    }; // Закрывает, но надо подключать чето.

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    }; // Открывает на мобилке.

    const menuId = 'primary-search-account-menu';
    const mobileMenuId = 'primary-search-account-menu-mobile';

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <StoreBurgerIcon/>
                    <ToolBarHead/>
                    <ToolBarSearch/>
                    <Box sx={{ flexGrow: 1 }} />
                    <ToolBarIcons
                        handleProfileMenuOpen={handleProfileMenuOpen}
                        menuId={menuId}
                    />
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

