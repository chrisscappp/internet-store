import React from 'react'
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import {AccountCircle, Mail as MailIcon, Notifications as NotificationsIcon} from "@material-ui/icons";
import Box from "@material-ui/core/Box";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
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

const ToolBarIcons = ({handleProfileMenuOpen, menuId, notifications}) => {

    const [showNotifications, setShowNotifications] = React.useState(false)
    const [notificationsLength, setNotificationsLength] = React.useState(notifications.length)
    const handleClose = () => setShowNotifications(false);

    const viewNotifications = () => {
        setShowNotifications(!showNotifications)
        setNotificationsLength(0)
    }

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
                    <Badge badgeContent={notificationsLength} color="error">
                        <NotificationsIcon onClick={viewNotifications}/>
                        <div>
                            <Modal
                                open={showNotifications}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                        Твои уведомления:
                                    </Typography>
                                    {notifications.length === 0 ? <Typography>Уведомлений пока нет</Typography>
                                        :notifications.map((item, index) => {
                                        return (
                                            <>
                                                <Typography key = {index + item.title} id="modal-modal-description" sx={{mt: 2}}>
                                                    {item.title}
                                                </Typography>
                                            </>
                                        )
                                    })}
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
                    <AccountCircle />
                </IconButton>
            </Box>
        </>
    )
}

export default ToolBarIcons