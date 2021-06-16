import React from 'react'
import './search-box.css'

export const SearchBox = ({search}) =>
<input className="search-bar" 
        type="search" 
        placeholder="type your monster" 
        onChange={search} 
/>

