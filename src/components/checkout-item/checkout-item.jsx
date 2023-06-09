import {useContext} from "react";
import {CartContext} from "../../contexts/cart";

import './checkout-item.scss';

const CheckoutItem = ({item}) => {
   const {name, imageUrl, price, quantity} = item;
   const {removeItemToCart, addItemToCart, clearItemFromCart} = useContext(CartContext);


   const removeItem = () => removeItemToCart(item);
   const addItem = () => addItemToCart(item);
   const clearItem = () => clearItemFromCart(item);


   return (<div className="checkout-item-container">
      <div className="image-container">
         <img src={imageUrl} alt={`${name}`}/>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
         <div className="arrow" onClick={removeItem}>
            &#10094;
         </div>
            <span className='value'>{quantity}</span>
         <div className="arrow" onClick={addItem}>
            &#10095;
         </div>
      </span>
      <span className="price">{price}</span>
      <span onClick={clearItem} className="remove-button">&#10005;</span>

   </div>);
};


export default CheckoutItem;