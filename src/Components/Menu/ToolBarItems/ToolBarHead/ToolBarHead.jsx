import React from 'react'
import Typography from "@material-ui/core/Typography";

const ToolBarHead = () => {
    return (
        <>
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: 'none', sm: 'block' } }}
            >
                Store
            </Typography>
        </>
    )
}

export default ToolBarHead