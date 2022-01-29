import React from 'react'
import {Search as SearchIcon} from "@material-ui/icons";
import {Search, SearchIconWrapper, StyledInputBase} from './consts/search'

const ToolBarSearch = ({value, setValue}) => {
    return (
        <>
            <Search className="searchArea">
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Фирма кроссовка..."
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={(event) => setValue(event.target.value)}
                />
            </Search>
        </>
    )
}

export default ToolBarSearch