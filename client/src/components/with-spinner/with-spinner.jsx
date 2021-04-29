import React from 'react';

import './with-spinner.scss';

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps}) => {
    return isLoading ? (
        <div className='spinner-box'>
            <div className='spinner' />
        </div>
    ) : (
        <WrappedComponent {...otherProps} />
    );
};

export default WithSpinner;
