import React from 'react';
import { Frames, CardFrame } from 'frames-react';

import config from '../config';

const CheckoutFrame: React.FC = () => (
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

export default CheckoutFrame;
