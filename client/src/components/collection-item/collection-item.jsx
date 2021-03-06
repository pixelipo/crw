import React from 'react';

import { cartItemsVar } from '../../graphql/cache';
import { addItem } from '../../graphql/cart.utils';

import Button from '../button/button';

import './collection-item.scss'


const CollectionItem = ({item}) => {
    const {name, price, imageUrl} = item;

    return (
        <div className='collection-item'>
            <div
                className='image'
                style={{backgroundImage: `url(${imageUrl})`}}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </div>
            <Button onClick={() => cartItemsVar(addItem(cartItemsVar(), item))} styler='inverted'>
                Add to cart
            </Button>
        </div>
    )
};

export default CollectionItem;
