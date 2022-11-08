
import './App.css';
import Home from './pages/Home';
import Products from './pages/Products';
import Login from './pages/Login';
import Register  from './pages/Register';
import ProductDetails from './pages/ProductDetails';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Topbar from './components/layout/Topbar';
import "./components/layout/Layout.css";
import NavBar from './components/layout/NavBar';
import CategoriesBar from './components/layout/CategoriesBar';
import Profile from './pages/Profile';

function App() {
  return (

    <div>
   <BrowserRouter>
    {/* if u want to add navbar for every page u can use this section for that */}
  <Topbar/>
  <NavBar/>
  <CategoriesBar/>
   <Routes>
      <Route path ="/login" exact element={<Login/>}/>
     
    

      <Route path ="/register" exact element={<Register/>}/>
     
     

      <Route path ="/products" exact element={<Products/>}/>
      
 

      <Route path ="/productdetails" exact element={<ProductDetails/>}/>
  


      <Route path ="/profile" exact element={<Profile/>}/>


      <Route path ="/" exact element={<Home/>}/>

    </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
