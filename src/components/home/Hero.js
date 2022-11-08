import { Link } from "react-router-dom";

function Hero (){
    return (

        <div className="hero-container">
            <img src="/images/hero.jpg"  alt ="" className="hero-image"/>
            <Link to="/products" className="hero-link">Shop Now</Link> 
            {/* using this link to page is not refresh */}
            {/* <a href="/products" className="hero-link">Shop Now </a> */}
        </div>

    );
}

export default Hero;