import Banner from "../components/home/Banner";
import FeaturedItems from "../components/home/FeaturedItems";
import Hero from "../components/home/Hero";
import "../components/home/Home.css"; //import the css here so no need to the import that 
//again n again in the components 

function Home (){

    return (
        <div>
            {/* <h1>Home</h1> */}

            <Hero/>


            {/* 
            hero
            featured item
            banner
            best selling items
             */}
            <FeaturedItems/>
             <Banner/>
        </div>
    );
}

export default Home;


//importing Home.css in here no need to add other components like
//(banner,featured items,selling items) 