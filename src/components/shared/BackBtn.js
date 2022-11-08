import React from 'react'
import './BackBtn.css';
import { Link,useNavigate } from "react-router-dom";


function BackBtn() {

    const navigate = useNavigate(); 

function handleClick(){
    navigate("/");
}

  return (
    <button className='goback-button' onClick={handleClick} >Go Back</button>
  )
}

export default BackBtn