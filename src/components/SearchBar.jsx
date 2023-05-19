import React from 'react';
import { TextField } from "@mui/material";

const SearchBar = ({query, setQuery}) => {
    return (
        <TextField
        onChange={e=> setQuery(e.target.value)}
        className='[border:none] bg-white rounded-lg '
        sx={{ width: 384 }}
        color='primary'
        variant='outlined'
        type='text'
        name='search'
        label='search'
        placeholder='search...'
        size='medium'
        margin='none'
      />
    );
}

export default SearchBar;
