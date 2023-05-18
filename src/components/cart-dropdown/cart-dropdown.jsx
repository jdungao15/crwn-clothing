import Button from "../button/button";
import CartItem from "../cart-item/cart-item";
import {useContext} from "react";
import {CartContext} from "../../contexts/cart";
import {useNavigate} from "react-router-dom";
import {CartDropdownContainer, EmptyMessage, CartItems} from "./cart-dropdown.styles";


const CartDropdown = () => {
   const navigate = useNavigate();

   const goToCheckout = () => {
      navigate('/checkout');
   };
   const {cartItems} = useContext(CartContext);

   return (
      <CartDropdownContainer>
         <CartItems>
            {cartItems.length ? (
               cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem}/>)
            ) : (
               <EmptyMessage>Your cart is empty</EmptyMessage>
            )}

         </CartItems>
         <Button onClick={goToCheckout}>CHECKOUT</Button>
      </CartDropdownContainer>
   );
};
export default CartDropdown;