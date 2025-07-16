import { useState, useEffect } from "react";
import { db } from "../data/db";
import type { Guitar, CartItem } from '../types/guitar';

export const useCart = () => {
    const initialCart = ():CartItem[] => {  
       const getItems = localStorage.getItem("cart");
        return getItems ? JSON.parse(getItems) : [];
      };
      const [data] = useState(db);
      const [cart, setCart] = useState(initialCart);
      const MAX_ITEMS = 5;
      
      const addToCart = (guitar:Guitar) => {
        const itemExists = cart.findIndex((item:Guitar) => item.id === guitar.id);
    
        if (itemExists >= 0) {
          if (cart[itemExists].quantity >= MAX_ITEMS) return;
          const updatedCart = [...cart];
          updatedCart[itemExists].quantity++;
          setCart(updatedCart);
        } else {
          const newCartItem: CartItem = {
            ...guitar,
            quantity: 1,
          }
          
          setCart([...cart, newCartItem]);
        }
      };
    
      useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
      }, [cart]);
    
      const deleteItem = (id: Guitar['id']) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
      };
    
      const clearCart = () => {
        setCart([]);
      };
    
      const incrementItem = (id: Guitar['id']) => {
        const updatedCart = cart.map((prevCart) => {
          if (prevCart.id === id && prevCart.quantity < MAX_ITEMS) {
            return { ...prevCart, quantity: prevCart.quantity + 1 };
          }
          return prevCart;
        });
        setCart(updatedCart);
      };
    
      const decrementItem = (id: Guitar['id']) => {
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