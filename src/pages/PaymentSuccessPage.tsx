import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const PaymentSuccessPage: React.FC = () => {
    const [queryParameters] = useSearchParams();
    const ckoPaymentId = queryParameters.get('cko-payment-id')
    const ckoSessionId = queryParameters.get('cko-session-id') 

    return (
        <>
            <header>
                <h1>Your payment was successful!</h1>
            </header>
            {ckoPaymentId && <p>CKO Payment Id: {ckoPaymentId}</p>}
            {ckoSessionId && <p>CKO Session Id: {ckoSessionId}</p>}
            <Link to={'/'}>Back to the Store</Link>
        </>
    );
};

export default PaymentSuccessPage;
