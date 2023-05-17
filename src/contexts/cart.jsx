import {createContext, useEffect, useState} from "react";
import {logDOM} from "@testing-library/react";
import cartItem from "../components/cart-item/cart-item";


// Add items
const addCartItem = (cartItems, productToAdd) => {
    //find if cartItem already exists
    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id)

    // if it does, increase quantity by 1
    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
            {...cartItem, quantity: cartItem.quantity + 1} :
            cartItem
        )
    }
    //return new array with updated
    return [...cartItems, {...productToAdd, quantity: 1}]
}

// Decrement Items

const decrementCartItem = (cartItems, productToDecrement) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToDecrement.id)

    if (existingCartItem) {
        return cartItems.map(item => item.id === productToDecrement.id ?
            {...cartItems, quantity: item.quantity - 1} :
            cartItem
        )
    }

}


const remoteCartItem = (cartItems, productToRemove) => {

}
export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {
    },
    cartItems: [],
    addItemToCart: () => {
    },
    cartItemsCount: 0,
    decrementProductToCart: () => {
    },

})

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([]);
    const [cartItemsCount, setCartItemsCount] = useState(0);

    useEffect(() => {
        const newCardCount = cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0);
        setCartItemsCount(newCardCount)
    }, [cartItems]);


    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const decrementProductToCart = (productToDecrement) => {
        setCartItems(decrementCartItem(cartItems, productToDecrement))
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartItemsCount, decrementProductToCart}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}


