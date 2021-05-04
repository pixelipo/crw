import React, {useContext} from 'react';

import {CartContext} from '../../providers/cart/cart.provider';

import './checkout-item.scss';

const CheckoutItem = ({item}) => {
    const {addItem, removeItem, removeAll} = useContext(CartContext);
    const {imageUrl, price, name, quantity} = item;

    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img alt={name} src={imageUrl} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <span className='arrow' onClick={() => removeItem(item)}>&#10094;</span>
                <span className='value'>{quantity}</span>
                <span className='arrow' onClick={() => addItem(item)}>&#10095;</span>
            </span>
            <span className='price'>${price}</span>
            <div className='remove-button' onClick={() => removeAll(item)}>&#10005;</div>
        </div>
    );
};

export default CheckoutItem;
