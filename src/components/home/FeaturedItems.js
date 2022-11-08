import {useEffect, useState} from 'react';
import axios from "axios";
import ProductCard from '../shared/ProductCard';


function FeaturedItems (){

    const [items,setItems] =useState([]);


    useEffect(()=>{
        getFeaturedItems();
    },[]);

    const getFeaturedItems = async () =>{
        try{
            const result = await axios.get("http://localhost:1337/products?featured=true");
            console.log(result.data);
            setItems(result.data);
        }
        catch(err){
            console.log("error is : ",err);

        }


    }


    return (
        <div className ="featured-container">
            <div className="featured-title">featured Items</div>
            <div className="featured-items">
             {items.map((item)=>{
                 return(
                  
                  <ProductCard image = {`http://localhost:1337${item.mainImage.url}`} name ={item.name} price={item.price}/>  
                 )
             })}

            </div>
        </div>
    )
}

export default FeaturedItems;