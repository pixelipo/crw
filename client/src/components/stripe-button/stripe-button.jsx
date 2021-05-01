import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IjU1eJOz4pPyfE0Fv4QQLAlePCYtp71kiQruRCnismO4kIZua87qfXqUj86R4Zf3MzWTdOwyNDGvkJCRATcwwbi00YMH6iN44';

    const onToken = token => {
        axios({
            url: 'http://localhost:5000/payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment successful');
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error));
            alert('Payment failed');
        });
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Test Sp. z o.o.'
            currency='PLN'
            billingAddress
            shippingAddress
            image=''
            description={`your total price is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
