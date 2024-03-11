import React from 'react';
import { IBasket } from './Basket';
import { Country, countryCurrencyMap } from './CountySelection';
import { getTotalBasketAmount } from '../utils/basketUtils';
import { requestPaymentSession } from '../services/api/payments';

interface CheckoutButtonProps {
    basket: IBasket;
    country: Country;
    setPaymentSessionData: (paymentSessionData: any) => void
}

const CheckoutButton: React.FC<CheckoutButtonProps> = ({ basket, country, setPaymentSessionData }) => {
    const totalBasketAmount = getTotalBasketAmount(basket);
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
            onClick={() => handleCheckoutClick(totalBasketAmount, country, currency)}
            disabled={totalBasketAmount <= 0} 
        >
        Checkout
        </button>
    );
}

export default CheckoutButton;
