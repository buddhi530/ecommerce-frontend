import axios from 'axios'
import React, { useEffect, useState } from 'react'

function CategoriesBar(props) {

    // console.log(props.name)
    const [categories,setCategories] = useState([]);
    
  const category = async () => {
    try {
        const result = await axios.get("http://localhost:1337/categories");
        console.log("categories data : ",result.data);
        setCategories(result.data);
    } catch (error) {
        console.log("error : " ,error);
    }
}

useEffect(()=>{
    category();
},[])

  return (
    <div className='category-bar'>{categories.map((item)=>{

        //add return otherwise this data not displaying
        return(
            <div key={item.id}>{item.name}</div>
        )
       
    })}</div>
  )
}

export default CategoriesBar