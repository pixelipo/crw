import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';

import './checkout.scss';

const CheckoutPage = ({cartItems, totalSum}) => (
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

    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalSum: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
