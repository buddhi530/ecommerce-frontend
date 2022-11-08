import "./ProductCard.css";

const ProductCard = (props) => { 
  return (
    <div className="product-card">
       {/* <div>{props.image}</div> */}
       {/* image need a full path so we need add http:1337 */}
        <img src ={props.image} className="product-card-image"/>
        <div  className="product-card-name">{props.name}</div>
        <div  className="product-card-price">Rs :  {props.price}</div>
    </div>
  )
}

export default ProductCard;