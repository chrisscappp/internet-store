import React from 'react'
import {Search as SearchIcon} from "@material-ui/icons";
import {Search, SearchIconWrapper, StyledInputBase} from './consts/search'

const ToolBarSearch = () => {
    return (
        <>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Поиск товара..."
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
        </>
    )
}

export default ToolBarSearch