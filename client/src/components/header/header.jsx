import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';

import CrownIcon from '../icons/crown';
import CartIcon from '../icons/cart';
import CartDropdown from '../cart-dropdown/cart-dropdown';

import {CartContext} from '../../providers/cart/cart.provider';
import CurrentUserContext from '../../contexts/current-user/current-user';

import './header.scss';

const Header = () => {
    const currentUser = useContext(CurrentUserContext);
    const {hidden} = useContext(CartContext);

    return (
        <div className='header'>
            <Link className='logo-container' to='/'><CrownIcon primary='#808282' /></Link>
            <div className='options'>
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/contact'>Contact</Link>
                {currentUser ? (
                    <div className='option' onClick={() => auth.signOut()}>Sign out</div>
                ) : (
                    <Link className='option' to='/signin'>Sign in</Link>
                )}
                <CartIcon primary='#808282' />
            </div>
            {hidden ? null : <CartDropdown />}
        </div>
    );
};

export default Header;
