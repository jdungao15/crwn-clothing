import {createContext, useEffect, useState} from "react";

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
export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {
    },
    cartItems: [],
    addItemToCart: () => {
    },
    cartItemsCount: 0
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

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartItemsCount}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}


