import './checkout.scss';
import {useContext} from "react";
import {CartContext} from "../../contexts/cart";
import CheckoutItem from "../../components/checkout-item/checkout-item";

const Checkout = () => {
   const {cartItems, cartTotal} = useContext(CartContext);



   return (
      <div className='checkout-container'>
         <div className="checkout-header">
            <div className='header-block'>
               <span>Product</span>
            </div>
            <div className='header-block'>
               <span>Description</span>
            </div>
            <div className='header-block'>
               <span>Quantity</span>
            </div>
            <div className='header-block'>
               <span>Price</span>
            </div>
            <div className='header-block'>
               <span>Remove</span>
            </div>
         </div>
         {cartItems.map((item) => (
            <CheckoutItem key={item.id} item={item}/>
         ))}
         <span className='total'>Total: ${cartTotal}.00</span>
      </div>
   );
};

export default Checkout;