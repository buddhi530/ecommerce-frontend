import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function SortDropdown() {

const [value,setValue] =useState("");
const location =useLocation();
const navigate = useNavigate();

const handleChange =(e)=>{
  setValue(e.target.value);
  console.log("sort value ->",value);
  console.log("sort e.target.value ->",e.target.value);
  
  navigate("/products",{
    state: {
      ...location.state,
      sort : e.target.value //instead of this put here value it print the rendered before valu for that reason need to 
      //get the e.target.value.other functions didnt hppen cos it has button this one hasnt buttn 
    }
  })
}
  return (
    <select className='sort-dropdown' value={value} onChange={handleChange}>
        <option value="created_at:desc" >Latest</option>
        <option  value="created_at:asc">Oldest</option>
        <option  value="price:asc">Price : low to high</option>
        <option  value="price:desc">Price : high to low</option>

    </select>
  )
}

export default SortDropdown