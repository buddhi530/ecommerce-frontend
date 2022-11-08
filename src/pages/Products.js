import SearchBar from "../components/products/SearchBar";
import SortDropdown from "../components/products/SortDropdown";
import BackBtn from "../components/shared/BackBtn";
import '../components/products/products.css';
import Filter from "../components/products/Filter";
import ProductGrid from "../components/products/ProductGrid";
import { useLocation } from "react-router-dom";


function Products (){

    const location =useLocation();
    console.log("product main check the location search state value=>",location)

    return (
    <div className="product-container">

        <div className="products-topbar">
           <BackBtn/>
           <SearchBar/>
           <SortDropdown/>
        </div>

        <div className="product-maingrid">
            <Filter/>
            <ProductGrid/>
        </div>

    </div>
        
    );
}

export default Products;