import React from 'react'
const Search=(props)=>
{
  return(
    <div className='searchContainer'>
      <div className='search'>
        <input type="text" placeholder=' Search github users here' onChange={props.type} value={props.name} />
        <button className='btn search-btn' onClick={props.search}>Search</button>
      </div>
    </div>
  )
}

export default Search;
