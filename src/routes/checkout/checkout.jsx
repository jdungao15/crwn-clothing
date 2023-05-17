import './checkout.scss'
import {useContext} from "react";
import {CartContext} from "../../contexts/cart";

const Checkout = () => {
    const {cartItems, decrementProductToCart} = useContext(CartContext)

    const decreaseItem = (evt) => {
        decrementProductToCart(cartItems)
        console.log('from checkout',cartItems)
    }

    return (
        <h1>
            {cartItems.map(({name, imageUrl, price, quantity, id}) => (
                <div key={id}>
                    <img src={imageUrl} alt={`${name}`}/>
                    <h1>{name}</h1>
                    <h5>
                        <span>add </span>
                        Quantity:{quantity}
                        <button onClick={decreaseItem}>Decrease</button>
                        <span>X</span>
                    </h5>

                    <h5>Price:{price}</h5>
                </div>

            ))}
        </h1>
    )
}

export default Checkout;