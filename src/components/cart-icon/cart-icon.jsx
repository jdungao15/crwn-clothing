import {useContext} from "react";
import {CartContext} from "../../contexts/cart";
import {CartIconContainer, ShoppingIcon, ItemCount} from "./cart-icon.styles";


const CartIcon = () => {
   const {isCartOpen, setIsCartOpen, cartItemsCount} = useContext(CartContext)

   const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

   return (
      <CartIconContainer onClick={toggleIsCartOpen}>
         <ShoppingIcon />
         <ItemCount >{cartItemsCount}</ItemCount>
      </CartIconContainer>
   )
}

export default CartIcon;