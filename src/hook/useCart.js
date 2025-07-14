import { useState, useEffect } from "react";
import { db } from "../data/db";

export const useCart = () => {
    const initialCart = () => {
        const getItems = JSON.parse(localStorage.getItem("cart"));
        return getItems ? getItems : [];
      };
      const [data] = useState(db);
      const [cart, setCart] = useState(initialCart);
      const MAX_ITEMS = 5;
      
      const addToCart = (guitar) => {
        const itemExists = cart.findIndex((item) => item.id === guitar.id);
    
        if (itemExists >= 0) {
          if (cart[itemExists].quantity >= MAX_ITEMS) return;
          const updatedCart = [...cart];
          updatedCart[itemExists].quantity++;
          setCart(updatedCart);
        } else {
          guitar.quantity = 1;
          setCart([...cart, guitar]);
        }
      };
    
      useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
      }, [cart]);
    
      const deleteItem = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
      };
    
      const clearCart = () => {
        setCart([]);
      };
    
      const incrementItem = (id) => {
        const updatedCart = cart.map((prevCart) => {
          if (prevCart.id === id && prevCart.quantity < MAX_ITEMS) {
            return { ...prevCart, quantity: prevCart.quantity + 1 };
          }
          return prevCart;
        });
        setCart(updatedCart);
      };
    
      const decrementItem = (id) => {
        const updatedCart = cart.map((prevCart) => {
          if (prevCart.id === id && prevCart.quantity > 1) {
            return { ...prevCart, quantity: prevCart.quantity - 1 };
          }
          return prevCart;
        });
        setCart(updatedCart);
      };
    return {
        data,
        cart,
        addToCart,
        deleteItem,
        clearCart,
        incrementItem,
        decrementItem
    };
}