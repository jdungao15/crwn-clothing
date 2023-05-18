import {CartItemContainer, CartItemImage, ItemDetailsContainer, ItemName} from "./cart-item.styles";


const CartItem = ({cartItem}) => {
    const {name, quantity, imageUrl, price} = cartItem;
    return (
        <CartItemContainer>
            <CartItemImage src={imageUrl} alt={`${name}`}/>
            <ItemDetailsContainer>
                <ItemName>{name}</ItemName>
                <span>{quantity} x ${price}</span>
            </ItemDetailsContainer>
        </CartItemContainer>
    )
}

export default CartItem;