import React, {useContext} from 'react';
import {withRouter} from 'react-router-dom';

import Button from '../button/button';
import CartItem from '../cart-item/cart-item';

import {CartContext} from '../../providers/cart/cart.provider';

import './cart-dropdown.scss';

const CartDropdown = ({history}) => {
    const {cartItems, toggleHidden} = useContext(CartContext);

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
            toggleHidden();
        }}>
            Go to checkout
        </Button>
    </div>
)};

export default withRouter(CartDropdown);
