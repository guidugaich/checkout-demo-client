/* global CheckoutWebComponents */
import React from 'react';
import config from '../config';

interface CheckoutPaymentComponentProps {
  paymentSession: any;
}

const getCheckoutWebComponent = async (paymentSession: any) => {
  console.log('webComponent', config.checkoutPublicKey);
  
  const cko = await CheckoutWebComponents({
    paymentSession: paymentSession.data,
    publicKey: config.checkoutPublicKey,
    environment: 'sandbox',
  });
  
  const payments: any = cko.create('payments');
  payments.mount(document.getElementById('payments'))

  console.log('payments', payments);
  
};

const CheckoutPaymentComponent: React.FC<CheckoutPaymentComponentProps> = ({ paymentSession }) => {
  console.log('CheckoutPaymentComponent', paymentSession);

  if (paymentSession.data) {
    getCheckoutWebComponent(paymentSession);
  
    return (
      <header>
        <h4>{paymentSession.data.id}</h4>
        <div id="payments"></div>
      </header>
    );
  }
};

export default CheckoutPaymentComponent;
