import React from 'react';
import { IBasket } from './Basket';
import { Country } from './CountrySelection';
import { getTotalBasketAmount } from '../utils/basketUtils';
import { requestPaymentSession } from '../services/api/payments';
import { countryCurrencyMap } from '../utils/countryCurrencyMap';

interface CheckoutButtonProps {
    basket: IBasket;
    country: Country;
    setPaymentSessionData: (paymentSessionData: any) => void
}

const CheckoutButton: React.FC<CheckoutButtonProps> = ({ basket, country, setPaymentSessionData }) => {
    const totalBasketAmountMinor = getTotalBasketAmount(basket)*100;
    const currency = countryCurrencyMap[country];

    const handleCheckoutClick = async (
        amount: number,
        country: string,
        currency: string
    ) => {
        try {
            const result = await requestPaymentSession({ amount, country, currency });
            
            setPaymentSessionData(result);
        } catch(err) {
            console.log(err);
            
            setPaymentSessionData({});
        }
    };
    
    return (
        <button
            onClick={() => handleCheckoutClick(totalBasketAmountMinor, country, currency)}
            disabled={totalBasketAmountMinor <= 0} 
            className='checkoutButton'
        >
        Checkout
        </button>
    );
}

export default CheckoutButton;
