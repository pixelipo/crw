import {makeVar, InMemoryCache} from '@apollo/client';

export const cartHiddenVar = makeVar(true);
export const cartItemsVar = makeVar([]);
export const itemCountVar = makeVar(0);
export const cartTotalVar = makeVar(0);

export const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                cartHidden: {
                    read() {
                        return cartHiddenVar();
                    }
                },
                itemCount: {
                    read() {
                        return itemCountVar();
                    }
                },
                cartItems: {
                    read() {
                        return cartItemsVar();
                    }
                },
                cartTotal: {
                    read() {
                        return  cartTotalVar();
                    }
                }
            }
        }
    }
});
