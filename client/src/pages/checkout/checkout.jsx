import React from 'react';
import { useReactiveVar } from '@apollo/client';

import CheckoutItem from '../../components/checkout-item/checkout-item';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button';

import { cartItemsVar } from '../../graphql/cache';
import { getCartTotal } from '../../graphql/cart.utils';

import './checkout.scss';

const CheckoutPage = () => {
    const cartItems = useReactiveVar(cartItemsVar);
    const totalSum = getCartTotal(cartItems);

    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>quantity</span>
                </div>
                <div className='header-block'>
                    <span>price</span>
                </div>
                <div className='header-block'>
                    <span>remove</span>
                </div>
            </div>
            {cartItems.length ?
                cartItems.map(cartItem =>
                    <CheckoutItem key={cartItem.id} item={cartItem} />
                ) : (
                    <span className='empty-message'>No items found</span>
                )
            }
            <div className='total'><span>TOTAL: ${totalSum}</span></div>
            <div className='test-warning'>
                *Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242  - Exp: 10/21 - CVV:123
            </div>
            <StripeCheckoutButton price={totalSum} />
        </div>
    );
};


export default CheckoutPage;
