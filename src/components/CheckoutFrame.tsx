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

    console.log('----------------', data);

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
            frameActivated={(e) => {}}
            frameFocus={(e) => {}}
            frameBlur={(e) => {}}
            frameValidationChanged={(e) => {}}
            paymentMethodChanged={(e) => {}}
            cardValidationChanged={(e) => {}}
            cardSubmitted={() => {}}
            cardTokenized={(e) => {
                alert(e.token);
            }}
            cardTokenizationFailed={(e) => {}}
            cardBinChanged={(e) => {}}
        >
            <CardFrame />
            <button
                onClick={(e) => {}}
            >
                PAY GBP 25.00
            </button>
        </Frames>
    );
};

export default CheckoutFrame;
