import React, { useState } from 'react'
import { useLocation,useNavigate } from 'react-router-dom';

function SearchBar() {

const [text,setText] = useState("");

const location = useLocation();
const navigate = useNavigate();

console.log("location obj details =>",location);
console.log("navigate obj details =>",navigate);

function handleKeyPress(event){
if(event.key === "Enter"){
  console.log("enter pressed!");
  
  navigate('/products', { 
    state: { 
    ...location.state,
    //using spread operator we can add other state values like min max
    searchText :text } })//type the something to the search bar then re render to the same 
  //page(/products) with search item name and its store the state obj.
  //then easily we can get access this state obj using useLocation hook.
}


}

function searchText(e){
setText(e.target.value);
//console.log("value",e.target.value);
}

  return (
    <div className='search-bar'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>
        <input placeholder='Search ...' type ="text" value={text} onChange ={searchText} onKeyPress={handleKeyPress} />
    </div>
  )
}

export default SearchBar