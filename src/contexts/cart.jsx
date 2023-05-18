import {createContext, useEffect, useState} from "react";
import {logDOM} from "@testing-library/react";
import cartItem from "../components/cart-item/cart-item";


// Add items
const addCartItem = (cartItems, productToAdd) => {
   //find if cartItem already exists
   const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id);

   // if it does, increase quantity by 1
   if (existingCartItem) {
      return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
         {...cartItem, quantity: cartItem.quantity + 1} :
         cartItem
      );
   }
   // if it doesn't, add item to cart
   return [...cartItems, {...productToAdd, quantity: 1}];
};

// Decrement Items

const decrementCartItem = (cartItems, productToDecrement) => {
   //find if cartItem already exists
   const existingCartItem = cartItems.find(cartItem => cartItem.id === productToDecrement.id);

   // if quantity is 1, remove item from cart
   if (existingCartItem.quantity === 1) {
      return cartItems.filter(cartItem => cartItem.id !== productToDecrement.id);
   }
   // if quantity is more than 1, decrease quantity by 1
   return cartItems.map((cartItem) => cartItem.id === productToDecrement.id ?
      {...cartItem, quantity: cartItem.quantity - 1} :
      cartItem
   );
};

// Delete Items
const removeCartItem = (cartItems, productToRemove) => {
   return cartItems.filter(cartItem => cartItem.id !== productToRemove.id)
};

// Context
export const CartContext = createContext({
      isCartOpen: false,
      setIsCartOpen: () => {},
      cartItems: [],
      addItemToCart: () => {},
      cartItemsCount: 0,
      decrementItemCart: () => {},
      deleteItemCart: () => {},
      cartTotal: 0,
   }
);

export const CartProvider = ({children}) => {
   const [isCartOpen, setIsCartOpen] = useState(false);
   const [cartItems, setCartItems] = useState([]);
   const [cartItemsCount, setCartItemsCount] = useState(0);
   const [cartTotal, setCartTotal] = useState(0);

   // Update cart items count
   useEffect(() => {
      const newCartCount = cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0);
      setCartItemsCount(newCartCount);
   }, [cartItems]);

   // Update cart total
   useEffect(() => {
      const newCartTotal = cartItems.reduce(((acc, cartItem) => acc + cartItem.quantity * cartItem.price), 0)
      setCartTotal(newCartTotal);
   }, [cartItems]);



   // Add items
   const addItemToCart = (productToAdd) => {
      setCartItems(addCartItem(cartItems, productToAdd));
   };
   // Decrement Items
   const decrementItemCart = (productToDecrement) => {
      setCartItems(decrementCartItem(cartItems, productToDecrement));
   };
   // Delete Items
   const deleteItemCart = (productToRemove) => {
      setCartItems(removeCartItem(cartItems, productToRemove));
   }

   const value = {
      isCartOpen,
      setIsCartOpen,
      addItemToCart,
      cartItems,
      cartItemsCount,
      decrementItemCart,
      deleteItemCart,
      cartTotal,
   };
   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};


