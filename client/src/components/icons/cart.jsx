import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'

import './cart.scss'

const CartIcon = ({primary, toggleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <svg version="1.1" className="shopping-icon" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 407.45 407.45">
            <path d="M255.1 116.52c4.49 0 8.13-3.63 8.13-8.13 0-4.49-3.64-8.13-8.13-8.13H143.49c-4.49 0-8.13 3.63-8.13 8.13 0 4.5 3.64 8.13 8.13 8.13H255.1z" fill={primary}/>
            <path d="M367.06 100.26H311.69c-4.49 0-8.13 3.63-8.13 8.13 0 4.5 3.64 8.13 8.13 8.13h47.24v274.68H48.52V116.52h44.54c4.49 0 8.13-3.63 8.13-8.13 0-4.49-3.64-8.13-8.13-8.13H40.39c-4.49 0-8.13 3.63-8.13 8.13v290.94c0 4.5 3.64 8.13 8.13 8.13h326.67c4.49 0 8.13-3.63 8.13-8.13V108.39C375.19 103.89 371.56 100.26 367.06 100.26z" fill={primary}/>
            <path d="M282.59 134.8c4.49 0 8.13-3.63 8.13-8.13V67.39C290.72 30.24 250.6 0 201.1 0c-49.31 0-89.41 30.24-89.41 67.39v59.27c0 4.5 3.64 8.13 8.13 8.13s8.13-3.63 8.13-8.13V67.39c0-28.2 32.82-51.14 73.36-51.14 40.33 0 73.16 22.94 73.16 51.14v59.27C274.46 131.16 278.1 134.8 282.59 134.8z" fill={primary}/>
            <path d="M98.89 147.57c0 11.53 9.39 20.91 20.92 20.91 11.53 0 20.92-9.38 20.92-20.91 0-4.49-3.64-8.13-8.13-8.13s-8.13 3.63-8.13 8.13c0 2.56-2.09 4.65-4.67 4.65 -2.57 0-4.67-2.09-4.67-4.65 0-4.49-3.64-8.13-8.13-8.13S98.89 143.07 98.89 147.57z" fill={primary}/>
            <path d="M282.59 168.47c11.53 0 20.92-9.38 20.92-20.91 0-4.49-3.64-8.13-8.13-8.13 -4.49 0-8.13 3.63-8.13 8.13 0 2.56-2.09 4.65-4.67 4.65 -2.58 0-4.67-2.09-4.67-4.65 0-4.49-3.64-8.13-8.13-8.13 -4.49 0-8.13 3.63-8.13 8.13C261.67 159.09 271.06 168.47 282.59 168.47z" fill={primary}/>
        </svg>
        <span className='cart-count' style={{color: primary}}>{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
