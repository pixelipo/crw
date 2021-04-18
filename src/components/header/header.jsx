import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';

import CrownIcon from '../icons/crown'

import './header.scss'

const Header = ({currentUser}) => (
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
        </div>

    </div>
)

export default Header;
