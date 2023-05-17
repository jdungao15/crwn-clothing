import './cart-dropdown.scss'
import Button from "../button/button";
import CartItem from "../cart-item/cart-item";
import {useContext} from "react";
import {CartContext} from "../../contexts/cart";
import {useNavigate} from "react-router-dom";


const CartDropdown = () => {
   const navigate = useNavigate();

   const goToCheckout = () => {
      navigate('/checkout')
   }
    const {cartItems} = useContext(CartContext)

    return (
        <div className='cart-dropdown-container'>
            <div className="cart-items">
                {cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem}/>)}
            </div>
            <Button onClick={goToCheckout}>CHECKOUT</Button>
        </div>
    )
}
export default CartDropdown