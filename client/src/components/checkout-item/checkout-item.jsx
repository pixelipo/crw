import React from 'react';
import {connect} from 'react-redux';

import {addItem, removeItem, removeAll} from '../../redux/cart/cart.actions';

import './checkout-item.scss';

const CheckoutItem = ({item, removeAll, removeItem, addItem}) => {
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
}

const mapDispatchToProps = dispatch => ({
    removeAll: item => dispatch(removeAll(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
