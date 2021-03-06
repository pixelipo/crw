export const addItem = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if(existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id ?
                {...cartItem, quantity: cartItem.quantity + 1} :
                cartItem
        );
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}];
};

export const removeItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    );
    
    if(existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id ?
            {...cartItem, quantity: cartItem.quantity - 1} :
            cartItem
    );
};

export const removeAll = (cartItems, cartItemToRemove) =>
    cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);

export const getCartCount = cartItems => cartItems.reduce(
    (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
    0
);

export const getCartTotal = cartItems => cartItems.reduce(
    (totalSum, cartItem) =>
        totalSum + cartItem.price * cartItem.quantity,
    0
);
