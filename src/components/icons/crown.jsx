import * as React from 'react';

const CrownIcon = (props) => (
    <svg className='crown' width="50" height="39" xmlns="http://www.w3.org/2000/svg">
        <path fill={props.primary} d="M3 14l22 12.5L47 14l-6.145 25H9.085z"/>
        <path fill-opacity=".263" fill="#101A1A" d="M25 8l15 31H10z"/>
        <circle fill="#5E6363" cx="2" cy="9" r="2"/>
        <circle fill="#5E6363" cx="25" cy="2" r="2"/>
        <circle fill="#5E6363" cx="48" cy="9" r="2"/>
    </svg>
)

export default CrownIcon;
