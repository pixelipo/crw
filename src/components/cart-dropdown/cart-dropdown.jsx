import React from 'react';

import Button from '../button/button';

import './cart-dropdown.scss';

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            <Button>Go to checkout</Button>
        </div>
    </div>
);

export default CartDropdown;
