import React from 'react'
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import {AccountCircle, Notifications as NotificationsIcon} from "@material-ui/icons";
import Box from "@material-ui/core/Box";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {NavLink} from 'react-router-dom'

const styleForModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ToolBarIcons = ({handleProfileMenuOpen, menuId, notifications, likedProducts}) => {

    const [showNotifications, setShowNotifications] = React.useState(false)
    const [componentNotifications, setComponentNotifications] = React.useState([])
    const [likedProductsLength, setLikedProductsLength] = React.useState([])
    const handleClose = () => setShowNotifications(false);

    React.useEffect(() => {
        setComponentNotifications(notifications)
    }, [notifications])

    React.useEffect(() => {
        setLikedProductsLength(likedProducts)
    }, [likedProducts])

    const viewNotifications = () => {
        setShowNotifications(!showNotifications)
    }

    const clearNotifications = () => {
        setComponentNotifications([])
        setShowNotifications(false)
    }

    return (
        <>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={likedProductsLength?.length} color="error">
                            <NavLink to="/basket" className="inactive" activeClassName="active">
                                <ShoppingBasketIcon />
                            </NavLink>
                        </Badge>
                    </IconButton>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={componentNotifications.length} color="error">
                        <NotificationsIcon onClick={viewNotifications}/>
                        <div>
                            <Modal
                                open={showNotifications}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={styleForModal}>
                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                        Твои уведомления:
                                    </Typography>
                                    {componentNotifications.length === 0 ?
                                        <div style={{marginTop: '5px'}}>
                                            <Typography>Уведомлений пока нет</Typography>
                                        </div>
                                        :notifications.map((item, index) => {
                                        return (
                                            <div key = {index + item.title}>
                                                <Typography id="modal-modal-description" sx={{mt: 2}}>
                                                    {item.title}
                                                </Typography>
                                            </div>
                                        )
                                    })}
                                    {componentNotifications.length === 0 ? null
                                    :
                                        <div style={{marginTop: '5px'}}>
                                            <Button variant="outlined" color="error" onClick={clearNotifications}>
                                                Очистить уведомления
                                            </Button>
                                        </div>
                                    }
                                </Box>
                            </Modal>
                        </div>
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
                        <NavLink to = "/login" className="inactive" activeClassName="active">
                            <AccountCircle />
                        </NavLink>
                    </IconButton>
            </Box>
        </>
    )
}

export default ToolBarIcons