import React from 'react';

import { cartItemsVar } from '../../graphql/cache';
import { addItem, removeItem, removeAll } from '../../graphql/cart.utils';

import './checkout-item.scss';

const CheckoutItem = ({item}) => {
    const {imageUrl, price, name, quantity} = item;

    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img alt={name} src={imageUrl} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <span className='arrow' onClick={() => cartItemsVar(removeItem(cartItemsVar(), item))}>&#10094;</span>
                <span className='value'>{quantity}</span>
                <span className='arrow' onClick={() => cartItemsVar(addItem(cartItemsVar(), item))}>&#10095;</span>
            </span>
            <span className='price'>${price}</span>
            <div className='remove-button' onClick={() => cartItemsVar(removeAll(cartItemsVar(), item))}>&#10005;</div>
        </div>
    );
};

export default CheckoutItem;
