import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import ProductCard from '../shared/ProductCard';

function ProductGrid() {

const [products,setProdcuts] =useState([]);
const location = useLocation();

console.log("grid",location);
//using useLocation hook we can access the state object of this page.
//navigating use navigate this state object comes

useEffect(()=>{
    getProducts();
    //right now only run getProducts() first load
    //after the cahnging the state still we didnot call that so need to call that again
},[location.state])
//base on the chnge the location.state value need re render the page .

const getProducts = async ()=>{
//get the values from the location state

    let queryString ="";
    const state =location.state;
    console.log("location state ->" ,state);
//check whether state undefined or not???
    if(state){
        //check whether state searchText has value or not???
        if(state.searchText){
            queryString+= `&name_contains=${state.searchText}`;
            //name_containers backend parameter
        }
        if(state.min){
            queryString+=`&price_gte=${state.min}`;
        }
        if(state.max){
            queryString+=`&price_lte=${state.max}`; 
        }
        if(state.catId){
            queryString+=`&categories.id=${state.catId}`;
        }
        if(state.sort){
            //backend keys 
            //1)created_asc 2)created_desc 3)price asc 4)price desc
            queryString+=`&_sort=${state.sort}`;
        }
    }
console.log("queryString ->",queryString);
    try {
        const result = await axios.get(`http://localhost:1337/products?${queryString}`);
        setProdcuts(result.data);
        console.log("newest:",result.data)

    } catch (error) {
        
    }
    
}


  return (
    <div>
        <div className='products-grid'>
            {products.map((item)=>{
                return(
                    <ProductCard name={item.name} image={`http://localhost:1337${item.mainImage.formats.medium.url}`} price={item.price} />
                )
              
            })}
        </div>
    </div>
    
  )
}

export default ProductGrid