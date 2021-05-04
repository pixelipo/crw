import React, {createContext, useEffect, useState} from 'react';

import {
    addItemToCart,
    removeItemFromCart,
    filterItemFromCart,
    getCartCount,
    getCartTotal
} from './cart.utils';

export const CartContext = createContext({
    hidden: true,
    toggleHidden: () => {},
    cartItems: [],
    addItem: () => {},
    removeItem: () => {},
    removeAll: () => {},
    itemCount: 0,
    totalSum: 0
});

const CartProvider = ({children}) => {
    const [hidden, setHidden] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    const [itemCount, setItemCount] = useState(0);
    const [totalSum, setTotalSum] = useState(0);

    const toggleHidden = () => setHidden(!hidden);
    const addItem = item => setCartItems(addItemToCart(cartItems, item));
    const removeItem = item => setCartItems(removeItemFromCart(cartItems, item));
    const removeAll = item => setCartItems(filterItemFromCart(cartItems, item));

    useEffect(() => {
        setItemCount(getCartCount(cartItems))
    }, [cartItems]);

    useEffect(() => {
        setTotalSum(getCartTotal(cartItems))
    }, [cartItems]);

    return (
        <CartContext.Provider
        value={{
            hidden,
            toggleHidden,
            cartItems,
            addItem,
            removeItem,
            removeAll,
            itemCount,
            totalSum
        }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
