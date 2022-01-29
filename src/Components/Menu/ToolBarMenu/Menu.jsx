import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { More as MoreIcon } from '@material-ui/icons';
import ToolBarIcons from '../ToolBarItems/ToolBarIcons/ToolBarIcons'
import ToolBarHead from '../ToolBarItems/ToolBarHead/ToolBarHead'
import ToolBarSearch from "../ToolBarItems/ToolBarSearch/ToolBarSearch";
import {useDispatch, useSelector} from "react-redux";
import {notification} from '../../../Redux/Actions/notificationsAction'
import HomeIcon from "../ToolBarItems/ToolBarIcons/HomeIcon";

export default function TopBarMenu({likedProducts, value, setValue}) {

    const dispatch = useDispatch()
    const {notifications} = useSelector(({notificationsReducer}) => notificationsReducer)

    React.useEffect(() => {
        dispatch(notification())
    }, [])

    const menuId = 'primary-search-account-menu';
    const mobileMenuId = 'primary-search-account-menu-mobile';

    return (
        <Box sx={{ flexGrow: 1 }} className="headerMenu">
            <AppBar position="static">
                <Toolbar>
                    <HomeIcon/>
                    <ToolBarHead/>
                    <ToolBarSearch
                        value={value}
                        setValue={setValue}
                    />
                    <Box sx={{ flexGrow: 1 }} />
                    <ToolBarIcons
                        menuId={menuId}
                        notifications = {notifications}
                        likedProducts={likedProducts}
                    />
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
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