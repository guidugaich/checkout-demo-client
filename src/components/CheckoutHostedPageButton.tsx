import React from 'react';
import { IBasket } from './Basket';
import { Country, countryCurrencyMap } from './CountrySelection';
import { getTotalBasketAmount } from '../utils/basketUtils';
import { requestHostedPaymentPage } from '../services/api/payments';

interface CheckoutHostedPageButtonProps {
    basket: IBasket;
    country: Country;
};

const CheckoutHostedPageButton: React.FC<CheckoutHostedPageButtonProps> = ({ basket, country }) => {
    const totalBasketAmountMinor = getTotalBasketAmount(basket)*100;
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
        } catch(err) {
            console.log(err);
        }
    };
    
    return (
        <>
            <button
                onClick={() => handleCheckoutClick(totalBasketAmountMinor, country, currency)}
                disabled={totalBasketAmountMinor <= 0}
                className='checkoutHostPageButton'
            >
                Checkout with Hosted Page
            </button>
        </>
    );
}

export default CheckoutHostedPageButton;
