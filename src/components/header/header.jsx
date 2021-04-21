import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';

import CrownIcon from '../icons/crown';
import CartIcon from '../icons/cart';
import CartDropdown from '../cart-dropdown/cart-dropdown';

import './header.scss';

const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link className='logo-container' to='/'><CrownIcon primary='#808282' /></Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>Contact</Link>
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>Sign out</div>
                :
                <Link className='option' to='/signin'>Sign in</Link>
            }
            <CartIcon primary='#808282' />
        </div>
        {
            hidden ? null :
            <CartDropdown />
        }

    </div>
)

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
});

export default connect(mapStateToProps)(Header);
