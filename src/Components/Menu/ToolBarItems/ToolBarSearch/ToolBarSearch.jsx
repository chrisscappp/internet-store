import React from 'react'
import {Search as SearchIcon} from "@material-ui/icons";
import Search from './consts/search'
import SearchIconWrapper from './consts/searchIconWrapper'
import StyledInputBase from './consts/styledInputBase'

const ToolBarSearch = () => {
    return (
        <>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
        </>
    )
}

export default ToolBarSearch