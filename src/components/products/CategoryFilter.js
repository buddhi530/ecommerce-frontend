import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

function CategoryFilter() {

    const [category,setCategory] = useState([]);
    const location = useLocation();

    useEffect(()=>{
        getCategories();
    },[]);

const getCategories = async () =>{

    try {
        const result =  await axios.get("http://localhost:1337/categories");
        setCategory(result.data);
        console.log("cateee data :",result.data);
    } catch (error) {
        
    }
    
}



  return (
    <div>
        <h2>Category Filter</h2>

        <div className='category-filter'>
{
    category.map((item)=>{
        return(
            <Link to ={{
                pathname:"/products",
                state:{
                    ...location.state,
                    catId : item.id
                }
            }} className='category-filter'>
                {item.name}
            </Link>
        )
    })
}
        </div>
    </div>
  )
}

export default CategoryFilter