import React from 'react';
import {withRouter} from 'react-router-dom';

import './menu-item.scss'

const MenuItem = ({title, subtitle, imageUrl, size, history, linkUrl, match}) => (
    <div
        onClick={() => history.push(`${match.url}${linkUrl}`)}
        style={{backgroundImage: `url(${imageUrl})`}}
        className={`${size} menu-item`}
    >
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <p className='subtitle'>{subtitle.toUpperCase()}</p>
        </div>
    </div>
)

export default withRouter(MenuItem);
