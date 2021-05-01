import React from 'react';

import './button.scss'

const Button = ({children, styler='', ...otherProps}) => (
    <button className={`${styler} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default Button;
