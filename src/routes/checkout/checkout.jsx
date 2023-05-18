import {useContext} from "react";
import {CartContext} from "../../contexts/cart";
import CheckoutItem from "../../components/checkout-item/checkout-item";
import {CheckoutContainer, CheckoutHeader, CheckoutHeaderBlock, CheckoutTotal} from "./checkout.styles";

const Checkout = () => {
    const {cartItems, cartTotal} = useContext(CartContext);


    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <CheckoutHeaderBlock >
                    <span>Product</span>
                </CheckoutHeaderBlock>
                <CheckoutHeaderBlock>
                    <span>Description</span>
                </CheckoutHeaderBlock>
                <CheckoutHeaderBlock>
                    <span>Quantity</span>
                </CheckoutHeaderBlock>
                <CheckoutHeaderBlock>
                    <span>Price</span>
                </CheckoutHeaderBlock>
                <CheckoutHeaderBlock>
                    <span>Remove</span>
                </CheckoutHeaderBlock>
            </CheckoutHeader>
            {cartItems.map((item) => (
                <CheckoutItem key={item.id} item={item}/>
            ))}
            <CheckoutTotal>Total: ${cartTotal}.00</CheckoutTotal>
        </CheckoutContainer>
    );
};

export default Checkout;