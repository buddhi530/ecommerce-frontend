import { useAtom } from 'jotai';
import React from 'react';
import { Link } from "react-router-dom";
import { countAtom, userAtom } from '../../state';

const NavBar =() => {

  const [user,setUser] = useAtom(userAtom);
  const [count,setCount] = useAtom(countAtom);

  return (
    <div className='nav-bar'>
        <div className='nav-bar-callus'>Call us : 0332289235</div>
        <div className='nav-bar-title'>Aventure</div>
        <div className='nav-bar-btns'>

        {!user ? <Link to="/login" className="login-btn">Login</Link> : null}
        
        <svg xmlns="http://www.w3.org/2000/svg" class="nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" class="nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>
        </div>
    </div>
  )
}

export default NavBar