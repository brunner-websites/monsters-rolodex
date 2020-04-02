import React from 'react'
import './search-box.style.css'

const SearchBox = ({ placeholder, onChange }) => {
  return (
    <input
      className='search'
      type="search"
      placeholder={placeholder}
      onChange={e => { onChange(e) }} />
  )
}

export default SearchBox;
