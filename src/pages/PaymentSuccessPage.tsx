import React from 'react';
import { Link } from 'react-router-dom';

const PaymentSuccessPage: React.FC = () => {
  return (
    <>
        <header>
            <h1>Your payment was successful</h1>
        </header>
        <Link to={'/'}>Back to the Store</Link>
    </>
  );
};

export default PaymentSuccessPage;
