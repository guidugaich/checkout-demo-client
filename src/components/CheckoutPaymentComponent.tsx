/* eslint-disable @typescript-eslint/no-unused-vars */
/* global CheckoutWebComponents */
import React from 'react';
import config from '../config';

interface CheckoutPaymentComponentProps {
  paymentSession: any;
}

const getCheckoutWebComponent = async (paymentSession: any) => {
  const CheckoutWebComponents = (window as any).CheckoutWebComponents
  
  const cko = await CheckoutWebComponents({
    paymentSession: paymentSession.data,
    publicKey: config.checkoutPublicKey,
    environment: 'sandbox',
  });
  
  const payments: any = cko.create('payments');
  payments.mount(document.getElementById('payments'))  
};

const CheckoutPaymentComponent: React.FC<CheckoutPaymentComponentProps> = ({ paymentSession }) => {
  if (paymentSession.data) {
    getCheckoutWebComponent(paymentSession);
  
    return (
      <header>
        <div id="payments"></div>
      </header>
    );
  }
};

export default CheckoutPaymentComponent;
