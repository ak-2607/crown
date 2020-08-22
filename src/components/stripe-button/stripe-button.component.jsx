import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HIV3kLAKY9vwnF0Y2j1OMEdxQxxbOahYylZWpfwith5bm18rY6dY2uTJ1ZAQU9ySFrf1Ovp767UR2OvGOHPVj0P00srrUHAyB';

    const onToken = token => {
        alert('Payment Successful');
    }
    return (
        <StripeCheckout 
            label='Pay Now'
            name='CROWN Ltd'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel = 'Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        /> 
    )
};


export default StripeCheckoutButton;