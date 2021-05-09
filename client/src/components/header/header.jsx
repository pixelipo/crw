import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import {gql, useQuery} from '@apollo/client';

import CrownIcon from '../icons/crown';
import CartIcon from '../icons/cart';
import CartDropdown from '../cart-dropdown/cart-dropdown';

import { cartHiddenVar } from '../../graphql/cache';
import CurrentUserContext from '../../contexts/current-user/current-user';

import './header.scss';

const GET_CART_HIDDEN = gql`
    query getCartHidden {
        cartHidden @client
    }
`;

const Header = () => {
    const currentUser = useContext(CurrentUserContext);
    const {data} = useQuery(GET_CART_HIDDEN);

    return (
        <div className='header'>
            <Link className='logo-container' to='/'><CrownIcon primary='#808282' /></Link>
            <div className='options'>
                <Link className='option' to='/shop'>Shop</Link>
                <Link className='option' to='/contact'>Contact</Link>
                {currentUser ? (
                    <div className='option' onClick={() => auth.signOut()}>Sign out</div>
                ) : (
                    <Link className='option' to='/signin'>Sign in</Link>
                )}
                <CartIcon primary='#808282' />
            </div>
            {data.cartHidden ? null : <CartDropdown />}
        </div>
    );
};

export default Header;
