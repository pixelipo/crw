import React from 'react';
import {withRouter} from 'react-router-dom';

import './menu-item.scss'

const MenuItem = ({title, imageUrl, history, match}) => {

    return(
        <div className='menu-item' onClick={() => history.push(`${match.url}shop/${title}`)}>
            <div className='cover' style={{backgroundImage: `url(${imageUrl})`}}>
                <div className='content'>
                    <h1 className='title'>{title.toUpperCase()}</h1>
                    <p className='subtitle'>shop now</p>
                </div>
            </div>
        </div>
    );
};

export default withRouter(MenuItem);
