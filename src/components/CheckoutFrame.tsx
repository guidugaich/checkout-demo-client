import React, { useEffect, useState } from 'react';
import { Frames, CardFrame } from 'frames-react';

import config from '../config';
import { requestPaymentComponent } from '../services/api/payments';

const CheckoutFrame: React.FC = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        requestPaymentComponent()
            .then((jsonResponse) => setData(jsonResponse))
    }, []);

    return (
        <Frames
            config={{
                publicKey: config.checkoutPublicKey,
                localization: {
                    cardNumberPlaceholder: 'Card number',
                    expiryMonthPlaceholder: 'MM',
                    expiryYearPlaceholder: 'YY',
                    cvvPlaceholder: 'CVV',
                },
                style: {
                    base: {
                        fontSize: '20px',
                    },
                },
            }}
            ready={() => {}}
            frameActivated={() => {}}
            frameFocus={() => {}}
            frameBlur={() => {}}
            frameValidationChanged={() => {}}
            paymentMethodChanged={() => {}}
            cardValidationChanged={() => {}}
            cardSubmitted={() => {}}
            cardTokenized={(e) => {
                alert(e.token);
            }}
            cardTokenizationFailed={() => {}}
            cardBinChanged={() => {}}
        >
            <CardFrame />
            <button
                onClick={() => {}}
            >
                PAY GBP 25.00
            </button>
        </Frames>
    );
};

export default CheckoutFrame;
