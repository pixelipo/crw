import React from 'react';
import { withRouter } from 'react-router-dom';
import { useReactiveVar } from '@apollo/client';

import { cartHiddenVar, cartItemsVar } from '../../graphql/cache';

import Button from '../button/button';
import CartItem from '../cart-item/cart-item';

import './cart-dropdown.scss';


const CartDropdown = ({history}) => {
    const cartItems = useReactiveVar(cartItemsVar);

    return (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.length ?
                cartItems.map(cartItem =>
                    <CartItem key={cartItem.id} item={cartItem} />
                ) : (
                    <span className='empty-message'>No items found</span>
                )
            }
        </div>
        <Button onClick={() => {
            history.push('/checkout');
            cartHiddenVar(!cartHiddenVar());
        }}>
            Go to checkout
        </Button>
    </div>
)};

export default withRouter(CartDropdown);
