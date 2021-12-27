import React from 'react'

const Search = () => {
 return (
 <div className='searchBlock'>
 <form>
 <input type='search' name="search" id="search" placeholder="search products"/>
 <button>
 <span><i class="fa fa-search" aria-hidden="true"></i></span>
 <span style={{padding:"0 0 0 5px"}}>Search</span>
 </button>
 </form>
 
 </div>
 )
}

export default Search