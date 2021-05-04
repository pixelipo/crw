import React, {useContext} from 'react';

import {CartContext} from '../../providers/cart/cart.provider';

import Button from '../button/button';

import './collection-item.scss'

const CollectionItem = ({item}) => {
    const {name, price, imageUrl} = item;
    const {addItem} = useContext(CartContext);

    return (
        <div className='collection-item'>
            <div
                className='image'
                style={{backgroundImage: `url(${imageUrl})`}}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button onClick={() => addItem(item)} styler='inverted'>
                Add to cart
            </Button>
        </div>
    )
};

export default CollectionItem;
