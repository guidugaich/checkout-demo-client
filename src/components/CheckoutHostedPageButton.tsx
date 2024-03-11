import React, { useState } from 'react';
import { IBasket } from './Basket';
import { Country, countryCurrencyMap } from './CountySelection';
import { getTotalBasketAmount } from '../utils/basketUtils';
import { requestHostedPaymentPage } from '../services/api/payments';
import { Navigate } from 'react-router-dom';

interface CheckoutHostedPageButtonProps {
    basket: IBasket;
    country: Country;
};

const CheckoutHostedPageButton: React.FC<CheckoutHostedPageButtonProps> = ({ basket, country }) => {
    const [redirectTo, setRedirectTo] = useState<string>('');
    
    const totalBasketAmount = getTotalBasketAmount(basket);
    const currency: string = countryCurrencyMap[country];

    const handleCheckoutClick = async (
        amount: number,
        country: string,
        currency: string
    ) => {
        try {
            const result = await requestHostedPaymentPage({ amount, country, currency });
            
            console.log('payments page result', result);
            const redirectLink = result.data._links.redirect.href;
            window.open(redirectLink, '_blank');
            setRedirectTo("/checkout-demo-client/success")
        } catch(err) {
            console.log(err);
        }
    };
    
    return (
        <>
            {redirectTo && <Navigate to={redirectTo} />}
            <button
                onClick={() => handleCheckoutClick(totalBasketAmount, country, currency)}
                disabled={totalBasketAmount <= 0} 
            >
                Checkout with Hosted Page
            </button>
        </>
    );
}

export default CheckoutHostedPageButton;
