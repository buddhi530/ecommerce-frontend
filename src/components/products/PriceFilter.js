import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function PriceFilter() {

  const [min,setMin] = useState(0);
  const [max,setMax] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();

const handlClick =() =>{

  navigate("/products",{
    state :{

      //searchText : location.state.searchText,
      //instead of using that we can use  ...location.state
      ...location.state,
      min: min,
      max:max
    }
  })
}

  return (
    <div className='price-filter'>
        <h2>Price Filter</h2>
        <div >
            <label>Min</label>
            <input type="text" value={min} onChange={(e)=>setMin(e.target.value)}></input>

            <label>Max</label>
            <input type="text" value={max} onChange={(e)=>setMax(e.target.value)}></input>

            <button className='btn-pricefilter' onClick={handlClick}>Filter</button>
        </div>
    </div>
  )
}

export default PriceFilter