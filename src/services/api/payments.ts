import config from "../../config";

export async function requestPaymentComponent() {
  const url = `${config.serverSideBaseUrl.local}/request-payment-session`;

  const paymentSession = fetch(url, { method: 'POST' })
    .then((res) => res.json());
  
  console.log(paymentSession);

  return paymentSession;
};