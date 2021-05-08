import React from 'react';
import {withRouter} from 'react-router-dom';

import './menu-item.scss'

const MenuItem = ({title, imageUrl, size, history, match}) => {

    return(
        <div
            onClick={() => history.push(`${match.url}shop/${title}`)}
            style={{backgroundImage: `url(${imageUrl})`}}
            className={`${size} menu-item`}
        >
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <p className='subtitle'>shop now</p>
            </div>
        </div>
    );
};

export default withRouter(MenuItem);
